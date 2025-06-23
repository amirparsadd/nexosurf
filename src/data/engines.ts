import { normalizeURL } from "../utils/url"

interface Engine {
  /**
   * The name of the engine in human readable format.
   * It is better to not include spaces in the name.
   * 
   * @example "Google"
   */
  name: string

  /**
   * A short code for the engine used in engine detection by query
   * 
   * @example "g"
   */
  short: string

  /**
   * A URL generator function used for redirecting the user to the desired search engine.
   * 
   * @example (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`
   * 
   * @param query the user's input (excluding the shortcode command)
   * @returns the URL to redirect the user to
   */
  url: (query: string) => string
}

export const DEFAULT_ENGINE = "google"

export const SEARCH_ENGINES: Record<string, Engine> = {
  google: {
    name: "Google",
    short: "g",
    url: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`
  },
  bing: {
    name: "Bing",
    short: "bi",
    url: (q) => `https://www.bing.com/search?q=${encodeURIComponent(q)}`
  },
  duckduckgo: {
    name: "DuckDuckGo",
    short: "ddg",
    url: (q) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}`
  },
  brave: {
    name: "Brave",
    short: "br",
    url: (q) => `https://search.brave.com/search?q=${encodeURIComponent(q)}`
  },
  yahoo: {
    name: "Yahoo",
    short: "y",
    url: (q) => `https://search.yahoo.com/search?p=${encodeURIComponent(q)}`
  },
  startpage: {
    name: "StartPage",
    short: "sp",
    url: (q) => `https://www.startpage.com/do/dsearch?query=${encodeURIComponent(q)}`
  },
  yandex: {
    name: "Yandex",
    short: "ya",
    url: (q) => `https://yandex.com/search/?text=${encodeURIComponent(q)}`
  },
  ecosia: {
    name: "Ecosia",
    short: "ec",
    url: (q) => `https://www.ecosia.org/search?q=${encodeURIComponent(q)}`
  },
  wikipedia: {
    name: "Wikipedia",
    short: "w",
    url: (q) => `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(q)}`
  },
  reddit: {
    name: "Reddit",
    short: "r",
    url: (q) => `https://www.reddit.com/search/?q=${encodeURIComponent(q)}`
  },
  youtube: {
    name: "YouTube",
    short: "yt",
    url: (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`
  },
  github: {
    name: "GitHub",
    short: "gh",
    url: (q) => `https://github.com/search?q=${encodeURIComponent(q)}`
  },
  stackoverflow: {
    name: "StackOverflow",
    short: "so",
    url: (q) => `https://stackoverflow.com/search?q=${encodeURIComponent(q)}`
  },
  npm: {
    name: "NPM",
    short: "npm",
    url: (q) => `https://www.npmjs.com/search?q=${encodeURIComponent(q)}`
  },
  mdn: {
    name: "MDNWebDocs",
    short: "mdn",
    url: (q) => `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(q)}`
  },
  pypi: {
    name: "PyPI",
    short: "py",
    url: (q) => `https://pypi.org/search/?q=${encodeURIComponent(q)}`
  },
  chatgpt: {
    name: "ChatGPT",
    short: "gpt",
    url: (q) => `https://chat.openai.com/?q=${encodeURIComponent(q)}`
  },
  direct: {
    name: "Direct",
    short: "d",
    url: (q) => normalizeURL(decodeURIComponent(q))
  }
}
