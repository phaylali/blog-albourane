import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
      <title>Albourane Blog - مدونة ألبوران</title>
        <meta name="description" content="Albourane Artisanal Fishing Cooperative in Ouedlaou, Morocco.
تعاونية الصيد البحري التقليدي بوادلو المغرب" />
        <link rel="canonical" href="https://blog.albourane.com/" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-500" href="https://albourane.com">
          Albourane's
          </a> Blog
        </h1>
        <h1 className="text-6xl font-bold">
        مرحبا في مدونة{' '}
          <a className="text-blue-500" href="https://albourane.com">
          ألبوران
          </a> 
        </h1>

        <p className="mt-3 text-2xl">
        Albourane Artisanal Fishing Cooperative in Ouedlaou, Morocco.
          تعاونية الصيد البحري التقليدي بوادلو المغرب
        </p>

        
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://omniversify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/omniversify.webp" alt="Omniverisfy" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
