/**
 * Splits a card title into lines, keeping "&" on the same line as the previous word.
 * e.g. "Integrity & Trust" → ["Integrity &", "Trust"]
 */
export function formatCardTitleLines(title: string): string[] {
  return title.split(" ").reduce<string[]>(
    (lines, word) =>
      word === "&" && lines.length > 0
        ? [...lines.slice(0, -1), `${lines.at(-1)} &`]
        : [...lines, word],
    []
  );
}
