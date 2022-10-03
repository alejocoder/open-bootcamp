let nombre= "hector";
let apellido = "jimenez";

let nombreCompleto= {
    nombre: nombre,
    apellido: apellido
};

sessionStorage.setItem("persona", JSON.stringify(nombreCompleto));

localStorage.setItem("persona", JSON.stringify(nombreCompleto));

const now = new Date();

document.cookie = `persona=${JSON.stringify(nombreCompleto)};expires= ${new Date(now.getTime() + 2 * 60000)}`