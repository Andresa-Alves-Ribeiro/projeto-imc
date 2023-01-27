import React, { useState } from 'react';
import './style.css';

export function CalcImc(props) {

    const [height, setHeight] = React.useState(0);

    const [weight, setWeight] = React.useState(0);

    const [message, setMessage] = useState('');

    const [textButton, setTextButton] = useState("");

    const [imc, setImc] = React.useState(null);

    const imcCalculator = () => {
        return setImc((weight / (height * height)).toFixed(2));
    };

    function calculationResult() {
        if (weight !== '0' && height !== '0') {
            imcCalculator()
            setHeight('0')
            setWeight('0')
            setMessage('Seu IMC é igual a:')
            setTextButton("Calcular Novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessage("Preencha seu peso e sua altura")
    }

    return (
        <div>
            //resultado
        </div>
    )
}