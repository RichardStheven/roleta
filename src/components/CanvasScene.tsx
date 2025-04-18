'use client'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0f172a] text-white flex items-center justify-center p-6">
      <div className="bg-white text-black rounded-xl p-8 shadow-2xl max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Bem-vindo à Sekai Distribuidora</h1>
        <p className="mb-6 text-center text-sm">
          Preencha o formulário abaixo para acessar seu cupom exclusivo. Entraremos em contato pelo WhatsApp.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="WhatsApp com DDD"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition duration-300"
          >
            Quero meu cupom!
          </button>
        </form>
      </div>
    </main>
  )
}
