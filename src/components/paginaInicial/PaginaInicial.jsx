import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Homem from '../../assets/homem.png'
import Mulher from '../../assets/mulher.png'
import Header from '../header/Header'


export default function PaginaInicial() {
    return (
        <div>
            <div className='pagina-inicial'>
                <Header />
                <section>
                    <div className='frase-inicial'>
                        <h1 className='titulo-inicial'>DESCUBRA SEU IMC</h1>
                        <p className='texto-inicial'>Com o <span>finderIMC</span> você pode descobrir o seu IMC a partir do preenchimento dos seus dados corporais!</p>
                    </div>
                </section>
            </div>

            <body>
                <section className='escolha-genero'>
                    <h2>Me identifico como:</h2>

                    <div className='botoes-escolha'>
                        <Link to="/form-homem" className='botao-inicial'>
                            <img src={Homem} alt="homem" className='imagem-inicial' />
                            <p>Homem</p>
                        </Link>

                        <Link to="/form-mulher" className='botao-inicial'>
                            <img src={Mulher} alt="homem" className='imagem-inicial' />
                            <p>Mulher</p>
                        </Link>
                    </div>
                </section>
            </body>
        </div>
    )
}