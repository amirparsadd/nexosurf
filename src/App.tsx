import { useCallback, useRef } from "react"
import Logo from "./components/Logo"
import Searchbar from "./components/Searchbar"
import EngineSearch from "./components/EngineSearch"
import EngineUpdateService from "./services/update-engine"
import AntiCacheService from "./services/anti-cache"

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusFunction = useCallback(() => inputRef.current?.focus(), [])

  return (
    <main className="bg-light text-black dark:text-light dark:bg-dark w-screen h-screen flex flex-col items-center justify-center">
      <>
        {/* Services */}
        <EngineUpdateService />
        <AntiCacheService />
      </>
      <div className="grid w-full h-full grid-rows-2">
        <div className="w-full flex flex-col items-center justify-end">
          <Logo />
          <Searchbar inputRef={inputRef}/>
        </div>
        <div className="flex items-start justify-center">
          <EngineSearch inputFocus={focusFunction}/>
        </div>
      </div>
    </main>
  )
}

export default App
