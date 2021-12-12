import useDarkMode from "./useDarkMode";
import Head from 'next/head'

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 h-screen w-screen p-10  dark:bg-blueGrey900 dark:text-blueGrey200 bg-blueGrey200 text-blueGrey900">
      <Head>
        <title>Albourane Blog - مدونة ألبوران</title>
        <meta name="description" content="Albourane Artisanal Fishing Cooperative in Ouedlaou, Morocco.
تعاونية الصيد البحري التقليدي بوادلو المغرب" />
        <link rel="canonical" href="https://blog.albourane.com/" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to{' '}
          <a className="text-blue-500" href="https://albourane.com">
            Albourane's
          </a> Blog
        </h1>
        <h1 className="text-5xl font-bold">
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

      <footer className="flex items-center justify-between w-full h-24 border-t">
      {colorTheme === "light" ? (
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 m-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 m-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
        <a
          className="flex items-center justify-center"
          href="https://omniversify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/omniversify.webp" alt="Omniverisfy" className="h-4 ml-2 m-8" />
        </a> 
      </footer>
    </div>
  )
}
