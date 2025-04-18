'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser'

export default function Form() {
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [whats, setWhats] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const templateParams = { nome, email, whats }

    try {
      console.log('Enviando via EmailJS...')

      const res1 = await emailjs.send(
        'service_ym09oip',
        'template_11jwdwh',
        templateParams,
        'CL0gHHp3JdA3UdQsf'
      )

      const res2 = await emailjs.send(
        'service_ym09oip',
        'template_2e4dvhb',
        templateParams,
        'CL0gHHp3JdA3UdQsf'
      )

      console.log('Emails enviados com sucesso:', res1.status, res2.status)
      router.push('/roleta')
    } catch (err) {
      console.error('Erro ao enviar EmailJS:', err)
      alert('Erro ao enviar. Verifique sua conexão ou tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-white border-4 border-yellow-400 shadow-lg rounded-lg w-full max-w-md">
      <h1 className="text-2xl font-extrabold text-center text-gray-800">Ganhe seu cupom exclusivo!</h1>
      <p className="text-center text-sm text-gray-600">Preencha os dados abaixo para participar</p>

      <input
        required
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border px-4 py-2 rounded focus:ring-2 focus:ring-yellow-400"
      />

      <input
        required
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-4 py-2 rounded focus:ring-2 focus:ring-yellow-400"
      />

      <input
        required
        type="tel"
        placeholder="WhatsApp com DDD"
        value={whats}
        onChange={(e) => setWhats(e.target.value)}
        className="border px-4 py-2 rounded focus:ring-2 focus:ring-yellow-400"
      />

      <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded transition duration-300">
        Quero meu cupom
      </button>
    </form>
  )
}
