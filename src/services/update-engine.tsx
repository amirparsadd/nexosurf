import { useAtom } from "jotai"
import { useEffect } from "react"
import { inputAtom } from "../store/input"
import { engineAtom } from "../store/engine"
import { getEngineNameFromQuery } from "../utils/engine"

/**
 * Update engine based on the input using the `getEngineNameFromQuery` function
 */
export default function EngineUpdateService() {
  const [ input ] = useAtom(inputAtom)
  const [ , setEngine ] = useAtom(engineAtom)

  useEffect(() => setEngine(getEngineNameFromQuery(input)), [ input, setEngine ])

  return null
}