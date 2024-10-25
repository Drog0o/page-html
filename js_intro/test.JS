// Créer un objet student
let student = {
    name: "Marie",
    age: 20,
    courses: []
  };
  
  // Modifier les propriétés de l'objet
  student.age = 21; // Changer l'âge à 21
  student.grade = "A"; // Ajouter une nouvelle propriété 'grade'
  
  // Travailler avec le tableau 'courses'
  student.courses.push("Math", "Physics", "Chemistry"); // Ajouter les cours
  
  // Utiliser indexOf pour trouver l'index de "Physics"
  let physicsIndex = student.courses.indexOf("Physics");
  
  // Utiliser slice pour obtenir un nouveau tableau avec les deux premiers éléments
  let firstTwoCourses = student.courses.slice(0, 2);
  
  // Afficher les résultats
  console.log("Objet student avec les modifications : ", student);
  console.log("Index de 'Physics' : ", physicsIndex);
  console.log("Nouveau tableau avec slice : ", firstTwoCourses);  