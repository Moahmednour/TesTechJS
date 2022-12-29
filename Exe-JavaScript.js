function FailedStudent(liste) {
  const filterEtudiants = liste.filter(
    (etudiant) => etudiant.note !== undefined
  );

  const totnotes = filterEtudiants.reduce(
    (total, etudiant) => total + etudiant.note
  );

  const moyenne = totnotes / filterEtudiants.length;
  filterEtudiants.sort((a, b) => b.note - a.note);

  filterEtudiants.forEach((etudiant) => {
    if (etudiant.note >= moyenne) {
      etudiant.mention = "bien";
    } else {
      etudiant.mention = "passable";
    }
  });
  return filterEtudiants;
}

const etudiants = [
  { name: "sarah", note: undefined },
  { name: "carlos", note: 13 },
  { name: "monya", note: 7 },
  { name: "fadhel", note: 18 },
];

const result = FailedStudent(etudiants);
console.log(result);
