'use client'

import { useEffect, useState } from 'react'

export default function RoletaPage() {
  const [girando, setGirando] = useState(true)
  const [mostrarCupom, setMostrarCupom] = useState(false)

  useEffect(() => {
    const wheel = document.getElementById('wheel') as HTMLElement
    const result = document.getElementById('result') as HTMLElement

    const rotation = 360 * 5 + 60 // sempre para no 5%
    wheel.style.transition = 'transform 4s ease-out'
    wheel.style.transform = `rotate(${rotation}deg)`

    setTimeout(() => {
      setGirando(false)
      setMostrarCupom(true)
    }, 4500)

    setTimeout(() => {
      window.location.href = 'https://sekaidistribuidora.com.br'
    }, 7000)
  }, [])

  return (
    <div className="min-h-screen bg-[#061c2e] text-white flex flex-col justify-center items-center">
      <div className="relative w-[300px] h-[300px] border-[10px] border-yellow-400 rounded-full" id="wheel">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-4 bg-white" />
      </div>

      <p id="result" className="mt-6 text-xl font-bold text-green-400">
        {girando ? '🎯 Girando a roleta...' : ''}
      </p>

      {mostrarCupom && (
        <p className="mt-4 p-4 border-2 border-dashed border-green-400 text-green-300 font-mono text-lg">
          Cupom: <strong>SEKAI5%</strong>
        </p>
      )}
    </div>
  )
}
