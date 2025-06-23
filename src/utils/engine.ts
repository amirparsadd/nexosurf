import { DEFAULT_ENGINE, SEARCH_ENGINES } from "../data/engines"
import { isProbablyURL } from "./url"

export function searchEngines(text: string, max?: number): string[] {
  const results = []

  for (const [engine, config] of Object.entries(SEARCH_ENGINES)) {
    if (config.short.startsWith(text)) {
      results.push(engine)
    }

    if(max && results.length === max) return results
  }

  return results
}

export function getEngineNameFromQuery(text: string): string {
  if(text.trim().length === 0) return DEFAULT_ENGINE
  if(isProbablyURL(text)) return "direct"

  const engineFromShortCode = getEngineNameFromShortCode(text)

  if(engineFromShortCode) {
    return engineFromShortCode
  }

  return DEFAULT_ENGINE
}

export function getEngineNameFromShortCode(text: string): string | undefined {
  const trimmed = text.trim();
  if (!trimmed.startsWith("/")) return;

  const shortCode = trimmed.slice(1).split(" ")[0];

  for (const [engine, config] of Object.entries(SEARCH_ENGINES)) {
    if (config.short === shortCode) {
      return engine;
    }
  }
}