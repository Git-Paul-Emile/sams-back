/** Reprend la logique `initialsOf` du frontend : "Ibrahima Touré" -> "IT". */
export function computeInitials(nom: string): string {
  return nom
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => token.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
