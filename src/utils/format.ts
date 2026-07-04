/** Reconstruit le format abrégé "A. Ndiaye" utilisé partout côté frontend. */
export function formatAbbrevName(prenom: string, nom: string): string {
  return `${prenom.charAt(0).toUpperCase()}. ${nom}`;
}

/** Formate une Date au format "DD/MM/YYYY" utilisé par le frontend historique. */
export function formatDateFr(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
