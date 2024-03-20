// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement('div')
document.body.append(divVacio)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement('div')
const p = document.createElement('p')

divP.append(p)
document.body.append(divP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const div6P = document.createElement('div')

for (let i = 1; i <= 6; i++) {
  const p6 = document.createElement('p')
  div6P.append(p6)
}

document.body.append(div6P)

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamico = document.createElement('p')
pDinamico.textContent = 'Soy dinámico!'

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('h2.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]
  ul.append(li)
}

document.body.append(ul)

//! 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const delNodes = document.querySelectorAll('.fn-remove-me')

for (const node of delNodes) {
  node.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const allDiv = document.querySelectorAll('div')
const pMedio = document.createElement('p')
p.textContent = 'Voy en medio!'

document.body.insertBefore(pMedio, allDiv[1]) //pones el 1 porque antes hay un 0 y asi lo pones en el medio.

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const pDiv = document.querySelectorAll('div.fn-insert-here')

for (const div of pDiv) {
  const p = document.createElement("p")
  p.textContent = 'Voy dentro!'
  div.append(p)
}

