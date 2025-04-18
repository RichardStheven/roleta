'use client'

import { useEffect } from 'react'

export default function Roleta() {
  useEffect(() => {
    const wheel = document.getElementById('wheel') as HTMLElement
    const result = document.getElementById('result') as HTMLElement

    const rotation = 360 * 5 + 60 // gira várias vezes e para no 5%
    wheel.style.transition = 'transform 4s ease-out'
    wheel.style.transform = `rotate(${rotation}deg)`

    setTimeout(() => {
      result.innerText = '🎉 Você ganhou 5% de desconto!'
    }, 4500)

    setTimeout(() => {
      window.location.href = 'https://sekaidistribuidora.com.br'
    }, 7000)
  }, [])

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="w-[300px] h-[300px] border-[10px] border-gray-800 rounded-full relative" id="wheel">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-2 h-4 bg-red-500" />
      </div>
      <p id="result" className="mt-6 text-xl font-bold text-green-700"></p>
    </div>
  )
}
