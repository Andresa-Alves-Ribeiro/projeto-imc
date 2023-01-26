import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../header/Header';
import './style.css';

export function Formulario() {
    const [submit, setSubmit] = React.useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '100%', height: '100vh', alignItems: 'center', background: 'rgb(62,188,232); background: linear-gradient(90deg, rgba(62,188,232,1) 0%, rgba(62,147,232,1) 50%, rgba(62,71,232,1) 100%);' }}>
            <Header />

            <div className='box-form'>
                <h1>Preencha seus dados abaixo</h1>
                <div className='text-field'>
                    <TextField
                        label="Peso"
                        id="outlined-start-adornment"
                        sx={{ g: 1, width: '35ch', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginBottom: '40px', backgroundColor: 'whitesmoke' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />

                    <TextField
                        label="Altura"
                        id="outlined-start-adornment"
                        sx={{ g: 1, width: '35ch', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginBottom: '40px', backgroundColor: 'whitesmoke' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                        }}
                    />

                    <TextField
                        label="Idade"
                        id="outlined-start-adornment"
                        sx={{ g: 1, width: '35ch', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginBottom: '25px', backgroundColor: 'whitesmoke' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                        }}
                    />
                </div>

                <Button variant="contained" size="large" sx={{ marginLeft: '100px' }}>
                    Enviar
                </Button>
            </div>
        </Box>
    );
}