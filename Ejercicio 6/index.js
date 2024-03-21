// Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

const deleteClass = document.querySelector(".fn-remove-me");

deleteClass.remove()

//! Más corto:
//? const deleteClass = document.querySelector(".fn-remove-me").remove();