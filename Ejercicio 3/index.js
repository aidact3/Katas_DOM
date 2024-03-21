// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul')

for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}

//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar = document.querySelector('.fn-remove-me')
eliminar.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const divCars = document.querySelector("[data-function='printHere']")
const ulCars = document.createElement('ul')

for (const car of cars) {
  const liCar = document.createElement('li')
  liCar.textContent = car
  liCar.setAttribute('data-function', 'printHere') //! Establecer el atributo en cada li
  ulCars.append(liCar)
}

divCars.append(ulCars)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const country of countries2) {
  const divCountry = document.createElement('div')
  const h4Country = document.createElement('h4')
  const imgCountry = document.createElement('img')

  h4Country.textContent = country.title
  imgCountry.src = country.imgUrl

  divCountry.append(h4Country)
  divCountry.append(imgCountry)

  document.body.append(divCountry) // dentro del bucle for porque son varios divs que se crean en base a los paises
}

//! 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement('button')
button.textContent = 'Eliminar último elemento'

function deleteLastDiv() {
  const removeAll = document.querySelectorAll('div')
  removeAll[removeAll.length - 1].remove() //? para eliminar el último div (la posición del último elemento será la longitud - 1)
}

button.addEventListener('click', deleteLastDiv) //? crea la acción de clickear, que cuando ocurra el evento de "click", se impulse una función
document.body.append(button)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const allDivsRemoved = document.querySelectorAll('div')

for (const div of allDivsRemoved) {
  const buttonDivs = document.createElement('button')
  buttonDivs.textContent = 'Elimino este div'
  buttonDivs.addEventListener('click', (e) => e.target.parentElement.remove())
  div.appendChild(buttonDivs)
}

//? (e): Esto representa el objeto de evento (Event) que se genera cuando se produce el evento de clic. e es un parámetro que representa este objeto de evento.
//?e.target: Esto se refiere al objetivo del evento, es decir, al elemento en el que se hizo clic. En este caso, e.target se refiere al elemento del botón en el que se hizo clic.
//?e.target.parentElement: Esto se refiere al elemento padre del elemento del botón en el que se hizo clic. En otras palabras, es el elemento que contiene al botón. Podría ser cualquier elemento que sea el padre directo del botón en el DOM.
