import React from 'react'
import './style.css'
import Header from '../header/Header'
import { Formulario } from '../formulario/Formulario'


export default function PaginaInicial() {
    return (
        <div className='pagina-inicial'>
            <div>
                <Header />
                <section>
                    <div className='frase-inicial'>
                        <h1 className='titulo-inicial'>DESCUBRA SEU IMC</h1>
                        <p className='texto-inicial'>Com o <span>finderIMC</span> você pode descobrir o seu IMC a partir do preenchimento dos seus dados corporais!</p>
                    </div>
                </section>
            </div>

            <Formulario />
        </div>
    )
}