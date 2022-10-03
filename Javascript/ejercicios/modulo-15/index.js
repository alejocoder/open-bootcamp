let nombre= "hector";
let apellido = "jimenez";

let nombreCompleto= {
    nombre: nombre,
    apellido: apellido
};

sessionStorage.setItem("persona", JSON.stringify(nombreCompleto));

localStorage.setItem("persona", JSON.stringify(nombreCompleto));

document.cookie = `persona=${JSON.stringify(nombreCompleto)};expires=` + new Date(2023, 0, 1).toUTCString()