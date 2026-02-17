import type { ReactNode } from "react";

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

/**
 * Renders a card title with each line as a block (for value cards).
 */
export function renderCardTitle(title: string): ReactNode {
  return formatCardTitleLines(title).map((line, j) => (
    <span key={j} className="block">
      {line}
    </span>
  ));
}
