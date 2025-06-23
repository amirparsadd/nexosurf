export function isProbablyURL(input: string) {
  const trimmed = input.trim();

  // Try to match full URLs (http(s)://...)
  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (ignore) { // eslint-disable-line
    // If it's not a full URL, try matching a domain
    const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return domainPattern.test(trimmed);
  }
}


/**
 * Convert a url without a protocol to a url with a protocol.
 * Returns URLs with a protocol without any modifications.
 * 
 * @param text the URL
 * @returns a usable URL
 */
export function normalizeURL(text: string): string {
  return text.startsWith('http://') || text.startsWith('https://')
    ? text
    : `https://${text}`;
}