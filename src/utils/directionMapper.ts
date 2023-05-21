import {Coordinate} from "@/utils/tspSolver";

enum Direction {
    North = 'north',
    East = 'east',
    South = 'south',
    West = 'west',
}

export const getInstructions = (() => {
    let lastDirection: Direction = Direction.North;

    return function (currentLocation: Coordinate, targetLocation: Coordinate): string {
        const [currentX, currentY] = currentLocation;
        const [targetX, targetY] = targetLocation;

        let instructions: string[] = [];

        const diffX = targetX - currentX;
        const diffY = targetY - currentY;

        if (diffX > 0) {
            instructions.push(getMoveInstruction(Direction.East, Math.abs(diffX)));
        } else if (diffX < 0) {
            instructions.push(getMoveInstruction(Direction.West, Math.abs(diffX)));
        }

        if (diffY < 0) {
            instructions.push(getMoveInstruction(Direction.South, Math.abs(diffY)));
        } else if (diffY > 0) {
            instructions.push(getMoveInstruction(Direction.North, Math.abs(diffY)));
        }

        return instructions.join(', ');

        function getMoveInstruction(direction: Direction, distance: number): string {
            let instruction = '';
            if (lastDirection) {
                switch (direction) {
                    case Direction.North:
                        instruction = getNorthInstruction(lastDirection, distance);
                        lastDirection = Direction.North;
                        console.log("Should be north.")
                        break;
                    case Direction.East:
                        instruction = getEastInstruction(lastDirection, distance);
                        lastDirection = Direction.East;
                        console.log("Should be east.")
                        break;
                    case Direction.South:
                        instruction = getSouthInstruction(lastDirection, distance);
                        lastDirection = Direction.South;
                        console.log("Should be south.")
                        break;
                    case Direction.West:
                        instruction = getWestInstruction(lastDirection, distance);
                        lastDirection = Direction.West;
                        console.log("Should be west.")
                        break;
                }
            } else {
                instruction = `Go forward ${distance} aisles`;
                lastDirection = Direction.North;
            }
            return instruction;
        }

        function getNorthInstruction(lastDirection: Direction, distance: number): string {
            if (lastDirection === Direction.South) {
                return `Turn around and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.East) {
                return `Turn left and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.West) {
                return `Turn right and go forward ${distance} aisles`;
            } else {
                return `Go forward ${distance} aisles`;
            }
        }

        function getEastInstruction(lastDirection: Direction, distance: number): string {
            if (lastDirection === Direction.West) {
                return `Turn around and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.South) {
                return `Turn left and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.North) {
                return `Turn right and go forward ${distance} aisles`;
            } else {
                return `Go forward ${distance} aisles`;
            }
        }

        function getSouthInstruction(lastDirection: Direction, distance: number): string {
            if (lastDirection === Direction.North) {
                return `Turn around and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.West) {
                return `Turn left and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.East) {
                return `Turn right and go forward ${distance} aisles`;
            } else {
                return `Go forward ${distance} aisles`;
            }
        }

        function getWestInstruction(lastDirection: Direction, distance: number): string {
            if (lastDirection === Direction.East) {
                return `Turn around and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.North) {
                return `Turn left and go forward ${distance} aisles`;
            } else if (lastDirection === Direction.South) {
                return `Turn right and go forward ${distance} aisles`;
            } else {
                return `Go forward ${distance} aisles`;
            }
        }
    };
})();