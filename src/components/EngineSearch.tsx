import { useMemo } from "react"
import { SEARCH_ENGINES } from "../data/engines"
import { searchEngines } from "../utils/engine"
import { useAtom } from "jotai"
import { engineAtom } from "../store/engine"
import { inputAtom } from "../store/input"

function EngineSearch({ inputFocus }: { inputFocus?: () => void }) {
  const [ engine ] = useAtom(engineAtom)
  const [ input, setInput ] = useAtom(inputAtom)

  const availableEngines: string[] = useMemo<string[]>(() => {
    if(!input.trim().startsWith("/")) return []

    const searchResult = searchEngines(input.trim().split(" ")[0].slice(1), 6)

    return searchResult.length === 1 && engine === searchResult[0]
        ? []
        : searchResult
  }, [ input, engine ])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 gap-4">
      {
        availableEngines.map(val => (
          <button
            tabIndex={engine === val ? -1 : undefined}
            key={val}
            className={`flex items-center gap-1 bg-lessdark hover:bg-lessdark/50 transition-colors p-2 rounded-md cursor-pointer ${engine === val ? "outline-1 outline-green-300" : ""}`}
            onClick={() => {
              const inputSplit = input.trim().split(" ")

              inputSplit[0] = `/${SEARCH_ENGINES[val].short}`

              setInput(inputSplit.join(" ") + (inputSplit.length === 1 ? " " : ""))

              if(!inputFocus) return
              inputFocus()
            }}
          >
            <img
              src={`/engineicons/${SEARCH_ENGINES[val].name.toLowerCase().split(" ").join("-")}.ico`}
              alt={`${SEARCH_ENGINES[val].name} Icon`}
            />
            <p>
              {SEARCH_ENGINES[val].name}
            </p>
          </button>
        ))
      }
    </div>
  )
}

export default EngineSearch