import React from 'react'
import './main.css'
import JpLogo from '../../images/jplogo.png'

function Main() {
  return (
    <section id='main'>
    <div className="desc">
        <img src={JpLogo} alt="João Pessoa"/>
        <p>A capital com um dos melhores custos de vida do Brasil, com lindas praias e inúmeros locais turísticos.</p>
    </div>
        <aside>
            <div className="grid">
                <div className="card farol">
                    <div className="title">
                        <h3>Farol do Cabo Branco</h3>
                        <a href="#" className="display">
                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>
                        </a>
                        <p>Um dos primeiros e principais pontos turísticos da capital.</p>
                    </div>
                </div>

                <div className="card seixas">
                    <div className="title">
                        <h3>Piscina Natural do Seixas</h3>
                        <a href="#" className="display">
                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>
                        </a>
                        <p>Lindas redes de corais, com águas mornas e cristalinas na ponta do Seixas.</p>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="card skybar">
                    <div className="title">
                        <h3>Tour Geneve</h3>
                        <a href="#" className="display">
                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>
                        </a>
                        <p>O maior arranha-céu do Nordeste, e quinto maior do Brasil.</p>
                    </div>
                </div>
                <div className="card litoral">
                    <div className="title">
                        <h3>Litoral Sul</h3>
                        <a href="#" className="display">
                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>
                        </a>
                        <p>As praias mais paradisíacas da capital se encontram aqui, além de cânions e rios.</p>
                    </div>
                </div>
            </div>
        </aside>
    </section>
  )
}

export default Main