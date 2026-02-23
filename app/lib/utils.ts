export function daysAgo(dateStr: string): number {
  const posted = new Date(dateStr + "T00:00:00");
  const now = new Date();
  const diff = now.getTime() - posted.getTime();
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

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
