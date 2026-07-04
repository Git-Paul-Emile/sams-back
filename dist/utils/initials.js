/** Reprend la logique `initialsOf` du frontend : "Ibrahima Touré" -> "IT". */
export function computeInitials(nom) {
    return nom
        .split(/\s+/)
        .filter(Boolean)
        .map((token) => token.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase();
}
//# sourceMappingURL=initials.js.map