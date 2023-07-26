import { Button } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'
import './style.css'
import { useState } from 'react'
import react from 'react'

type PropsType = {
    label: string,
    buttonName: string
    addTask?: (value: string) => void
}

export const Input = ({addTask, label, buttonName }: PropsType) => {

    const [value, setValue] = useState<string>('')

    return (
        <div className='input'>
            <label>{label}</label>
            <div className='wrapper-input'>
                <TextField
                    className='input-field'
                    size='small'
                    id="outlined-basic"
                    variant="outlined"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <Button onClick={()=>addTask && addTask(value)} className='button' variant='contained'>{buttonName}</Button>
            </div>
        </div>
    )
}