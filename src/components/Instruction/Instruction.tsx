import React from 'react'
import s from "./Instruction.module.css"

interface InstructionProps {
    instruction : string
}

const Instruction = ({instruction}:InstructionProps) => {
    return (
        <div className={s.instructionText}>
            {instruction}
        </div>
    )
}

export default Instruction;