import { Button } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'
import './style.css'
import react from 'react'

type PropsType = {
    label: string,
    buttonName: string
}

export const Input = ({label, buttonName}:PropsType) => {
    return (
        <div className='input'>
            <label>{label}</label>
            <div className='wrapper-input'>
                <TextField className='input-field' size='small' id="outlined-basic" variant="outlined" />
                <Button className='button' variant='contained'>{buttonName}</Button>
            </div>
        </div>
    )
}