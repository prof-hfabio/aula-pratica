import React from 'react'
import './styles.css'

export default function Interacao() {
  return (
    <section className='interacao'>
      <div className='historico'>
        {/* histórico de chat */}
        <div className='row'>
          <span className='user'>olá mundo</span>
        </div>
        <div className='row'>
          <span className='ai'>olá mundo</span>
        </div>
      </div>
      <div>
        {/* text input e botão de submit */}
        <textarea name="input" id="input"></textarea>
        <button>enviar</button>
      </div>
    </section>
  )
}
