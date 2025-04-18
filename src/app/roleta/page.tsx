'use client'

import { useEffect, useState } from 'react'
import '@/styles/roleta.css'

export default function RoletaPage() {
  const [girando, setGirando] = useState(true)
  const [mostrarCupom, setMostrarCupom] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGirando(false)
      setMostrarCupom(true)

      setTimeout(() => {
        window.location.href = 'https://sekaidistribuidora.com.br'
      }, 4000)
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold animate-pulse">
        {girando ? 'Girando a roleta...' : '🎉 Você ganhou! 🎉'}
      </h1>

      <div className={`roleta ${girando ? 'girando' : ''}`}></div>

      {mostrarCupom && (
        <div className="mt-4 p-4 border-2 border-yellow-400 text-yellow-400 text-xl font-bold rounded-lg animate-bounce">
          CUPOM: SEKAI5%
        </div>
      )}

      {!girando && !mostrarCupom && (
        <p className="text-sm text-gray-400">Aguardando resultado...</p>
      )}
    </div>
  )
}