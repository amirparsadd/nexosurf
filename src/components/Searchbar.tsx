import { type RefObject } from "react"
import "./styles/Searchbar.css"
import { SEARCH_ENGINES } from "../data/engines"
import { useAtom } from "jotai"
import { inputAtom } from "../store/input"
import { engineAtom } from "../store/engine"

function Searchbar({ inputRef }: { inputRef: RefObject<HTMLInputElement | null> }) {
  const [ input, setInput ] = useAtom(inputAtom)
  const [ engine ] = useAtom(engineAtom)

  return (
    <>
      <label
        htmlFor="search"
        className="searchbar-wrapper min-h-14 max-w-164 bg-lesslight dark:bg-lessdark mt-8 w-[90vw] md:w-screen rounded-md shadow-md p-3"
      >
        <form
          className="flex h-full items-center gap-4"
          onSubmit={(e) => {
            e.preventDefault()

            let final = input.trim()

            if(final.startsWith("/")){
              const temp = final.split(" ")
              temp.splice(0, 1)

              final = temp.join(" ")
            }

            window.location.href = SEARCH_ENGINES[engine].url(final)
          }}
        >
          <button
            type="submit" className={input.trim().length !== 0 ? "cursor-pointer" : ""}
            disabled={input.trim().length === 0}>

            <img
              src={`/engineicons/${SEARCH_ENGINES[engine].name.toLowerCase().split(" ").join("-")}.ico`}
              alt={`${SEARCH_ENGINES[engine].name} Icon`}
            />
          </button>

          <input
            ref={inputRef}
            autoComplete="off"
            type="text"
            name="Search"
            id="search"
            className="w-full focus:outline-0"
            placeholder="Search or enter address"

            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </label>
      
    </>
  )
}

export default Searchbar