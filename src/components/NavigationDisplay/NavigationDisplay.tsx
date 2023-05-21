import React, {useState} from 'react';
import {ItemType} from "@/types/types";
import instruction from "@/components/Instruction/Instruction";
import {createOptimalRoute, Coordinate} from "@/utils/tspSolver";
import {getInstructions} from "@/utils/directionMapper";
import Instruction from "@/components/Instruction/Instruction";
import s from "./NavigationDisplay.module.css";
import ShoppingBasket from "@/components/ShoppingBasket/ShoppingBasket";
import {BasketType} from "@/types/types";

interface navigationDisplayProps {
    basket: ItemType[]
}

const NavigationDisplay = ({basket}: navigationDisplayProps) => {
    const [pathStep, setPathStep] = useState(0);
    const [instruction, setInstruction] = useState("Press button to start route");
    const [itemsAtCoordinate, setItemsAtCoordinate] = useState([]);

    const getAllCoordinates = () => {
        const coordinatesList: number[][] = [];

        basket.forEach((item) => {
            coordinatesList.push(item.coordinate);
        });

        return coordinatesList;
    };


    const coords = getAllCoordinates()
    console.log("Coords" + coords)
    const path = createOptimalRoute(coords);
    console.log("Path" + path)


    const handleClick = () => {
        if (path.length - 1 > pathStep) {
            console.log("Path Step: " + path[pathStep] + ", Path Step Next: " + path[pathStep + 1])
            setInstruction(getInstructions(path[pathStep], path[pathStep + 1]))
            setPathStep(pathStep + 1);
            setItemsAtCoordinate(findItemsByCoordinate(path[pathStep + 1], basket))
            console.log("You are at: " + path[pathStep])
        } else {
            console.log("You are at: " + path[pathStep])
            setInstruction("You have completed your route.")
            setItemsAtCoordinate(findItemsByCoordinate(path[pathStep + 1], basket))
        }
    }


    function findItemsByCoordinate(coordinate: Coordinate, items: ItemType[]): ItemType[] {
        try{
            return items.filter(item => item.coordinate[0] === coordinate[0] && item.coordinate[1] === coordinate[1]);
        } catch {}
        return []
    }


    function createBasketFromItems(items: ItemType[]): BasketType {
        return {
            items: items,
            addItem: (item: ItemType) => {
            },
            removeItem: (itemId: string) => {
            },
        };
    }


    return (
        <div className={s.NavigationDisplay}>
            <Instruction instruction={instruction}></Instruction>
            {itemsAtCoordinate && (
                <ShoppingBasket basket={createBasketFromItems(itemsAtCoordinate)}
                                hideRemoveButton={true}></ShoppingBasket>
            )}
            {path.length > pathStep && (
                <button className={s.navigationDisplayButton} onClick={handleClick}>
                    Next Item
                </button>
            )}
        </div>
    )
}

export default NavigationDisplay;