import React from 'react'
import './styles.css'

export default function Historico() {
  return (
    <ul>
      {Array(50).fill(<li>meu histórico</li>)}
    </ul>
  )
}