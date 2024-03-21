// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const divHtml = document.querySelector("[data-function='printHere']")

const ulDiv = document.createElement("ul")

for (const place of places) {
  const liDiv = document.createElement("li")
  liDiv.textContent = place
  ulDiv.appendChild(liDiv)
}

divHtml.append(ulDiv)