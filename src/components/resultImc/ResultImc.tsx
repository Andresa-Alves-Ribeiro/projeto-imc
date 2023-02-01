import React from 'react'
import './style.css'
import { GridItem } from '../gridItem/GridItem'

export type Level = {
    title: string;
    color: string;
    icon: 'abaixo-18' | 'entre-18-24' | 'entre-25-29' | 'entre-30-34' | 'entre-35-39' | 'acima-40';
    imc: number[],
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Abaixo do peso', color: '#0EAD69', icon: 'abaixo-18', imc: [0, 18.5] },
    { title: 'Normal', color: '#E2B039', icon: 'entre-18-24', imc: [18.5, 24.99] },
    { title: 'Sobrepeso', color: '#C3423F', icon: 'entre-25-29', imc: [25, 29.9] },
    { title: 'Obesidade I', color: '#C3423F', icon: 'entre-30-34', imc: [30, 34.9] },
    { title: 'Obesidade II', color: '#C3423F', icon: 'entre-35-39', imc: [35, 39.9] },
    { title: 'Obesidade III', color: '#C3423F', icon: 'acima-40', imc: [40, 200] }
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            levels[i].yourImc = imc;
            return levels[i];
        }
    }
}

export function ResultImc() {
    return (
        <div>
            {levels.map((item, key) => (
                <GridItem key={key} item={item} />
            ))}
        </div>
    )
}