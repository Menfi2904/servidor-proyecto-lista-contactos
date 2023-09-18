let contactos = [
  { id: 1, nombre: "menfi", esSoltero: false },
  { id: 2, nombre: "stefany", esSoltero: false },
  { id: 3, nombre: "sofia", esSoltero: true },
];

function agregarContacto(nuevoContacto) {
  contactos.push(nuevoContacto);
}

function borrarContacto(contactoId) {
  let nuevosContactos = contactos.filter(
    (contacto) => contacto.id !== contactoId
  );
  contactos = nuevosContactos;
}

function buscarContacto(contactoId) {
  let contacto = contactos.filter((item) => item.id === contactoId);
  return contacto[0];
}

function actualizarContacto(id, contactoNuevo) {
  const index = contactos.findIndex((contactos) => contactos.id === id);
  if (index !== -1) {
    contactos[index] = { ...contactos[index], ...contactoNuevo };
  }
}

function imprimirContactos() {
  return contactos;
}

module.exports = {
  agregarContacto,
  borrarContacto,
  buscarContacto,
  imprimirContactos,
  actualizarContacto
};
