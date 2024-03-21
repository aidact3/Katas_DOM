//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const button = document.createElement('button')
button.id = 'btnToClick'

button.addEventListener('click', (e) => console.log(e));
document.body.append(button)

//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input = document.querySelector(".focus");
input.addEventListener("focus", (e) => console.log(e.target.value));

//? En JavaScript, `e.target.value` es una propiedad comúnmente utilizada en eventos de entrada, como cuando se está trabajando con formularios HTML o elementos de entrada de texto. Aquí está la explicación detallada:
//?`e`: Esto se refiere al objeto evento que se pasa a una función de controlador de eventos. Cuando ocurre un evento (por ejemplo, cuando un usuario escribe en un campo de texto), se crea un objeto evento que contiene información sobre ese evento, como qué tipo de evento ocurrió y dónde ocurrió.
//? `target`: `e.target` se refiere al elemento DOM que desencadenó el evento. En otras palabras, es el elemento en el que ocurrió el evento. Por ejemplo, si estás trabajando con un formulario y el evento ocurre dentro de un campo de entrada `<input>`, entonces `e.target` será ese `<input>`.
//? `value`: `e.target.value` es la propiedad que contiene el valor actual del elemento que desencadenó el evento. Para elementos de entrada de texto, este valor es el texto que el usuario ha ingresado en ese momento. Por ejemplo, si un usuario escribe "Hola" en un campo de entrada de texto, `e.target.value` contendrá la cadena "Hola".
//? Entonces, cuando se usa `e.target.value` en un controlador de eventos de entrada, se está accediendo al valor actual del elemento que desencadenó el evento de entrada. Esto es útil para realizar acciones basadas en los datos que el usuario ha ingresado en un formulario o en un campo de entrada de texto, como enviar ese valor a un servidor o realizar alguna operación basada en ese valor.


//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input2 = document.querySelector(".value");
input.addEventListener("input", (e) => console.log(e.target.value));
