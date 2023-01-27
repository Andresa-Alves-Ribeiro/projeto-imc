import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css';
import InputMask from 'react-input-mask';

export function Formulario(props) {
    const [form, setForm] = React.useState();

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '100%', height: '100vh', alignItems: 'center', }}>
            <div className='box-form'>
                <h1>Preencha seus dados abaixo</h1>

                <div className='text-field'>
                    <InputMask
                        mask="9.99"
                        onChange={handleChange}
                        name="Altura"
                    >
                        {() => <TextField
                            label="Peso"
                            id="outlined-start-adornment"
                            sx={{ g: 1, width: '35ch', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginBottom: '40px', backgroundColor: 'whitesmoke' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                        />}
                    </InputMask>

                    <InputMask
                        mask="999"
                        onChange={handleChange}
                        name="Peso"
                    >
                        {() => <TextField
                            label="Altura"
                            id="outlined-start-adornment"
                            sx={{ g: 1, width: '35ch', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginBottom: '40px', backgroundColor: 'whitesmoke' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }}
                        />}
                    </InputMask>
                </div>

                <Button variant="contained" size="large" sx={{ marginLeft: '100px' }}>
                    Enviar
                </Button>
            </div>
        </Box>
    );
}