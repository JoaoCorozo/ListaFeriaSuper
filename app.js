// Versión de la app
const APP_VERSION = "1.1.0";

// -----------------------------
// Catálogo de productos
// -----------------------------
const PRODUCTOS = [
  // ---------- FERIA ----------
  { id: "acelga", nombre: "Acelga", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/acelga.jpg" },
  { id: "aji_rojo", nombre: "Aji rojo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/aji_rojo.webp" },
  { id: "aji_verde", nombre: "Aji verde", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/aji_verde.jpg" },
  { id: "ajo", nombre: "Ajo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/ajo.jpg" },
  { id: "albahaca", nombre: "Albahaca", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/albahaca.jpg" },
  { id: "alcachofa", nombre: "Alcachofa", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/alcachofa.jpg" },
  { id: "apio", nombre: "Apio", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/apio.jpg" },
  { id: "arandano", nombre: "Arandano", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/arandano.jpg" },
  { id: "arvejas", nombre: "Arvejas", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/arvejas.jpg" },
  { id: "berenjena", nombre: "Berenjena", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/berenjena.jpg" },
  { id: "betarraga", nombre: "Betarraga", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/betarraga.jpg" },
  { id: "brocoli", nombre: "Brocoli", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/brocoli.jpg" },
  { id: "cebolla", nombre: "Cebolla", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/cebolla.jpg" },
  { id: "cebollin", nombre: "Cebollin", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/cebollin.jpg" },
  { id: "champiñon", nombre: "Champiñon", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/champiñon.jpg" },
  { id: "chirimoya", nombre: "Chirimoya", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/chirimoya.jpg" },
  { id: "choclo", nombre: "Choclo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/choclo.jpg" },
  { id: "ciboulette", nombre: "Ciboulette", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/ciboulette.jpg" },
  { id: "cilantro", nombre: "Cilantro", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/cilantro.jpg" },
  { id: "ciruela", nombre: "Ciruela", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/ciruela.jpg" },
  { id: "coco", nombre: "Coco", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/coco.jpg" },
  { id: "coliflor", nombre: "Coliflor", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/coliflor.jpg" },
  { id: "damasco", nombre: "Damasco", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/damasco.jpg" },
  { id: "durazno", nombre: "Durazno", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/durazno.jpg" },
  { id: "esparrago", nombre: "Esparrago", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/esparrago.jpg" },
  { id: "espinaca", nombre: "Espinaca", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/espinaca.jpg" },
  { id: "frambuesa", nombre: "Frambuesa", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/frambuesa.jpg" },
  { id: "frutilla", nombre: "Frutilla", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/frutilla.jpg" },
  { id: "granada", nombre: "Granada", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/granada.jpg" },
  { id: "guinda", nombre: "Guinda", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/guinda.jpg" },
  { id: "habas", nombre: "Habas", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/habas.jpg" },
  { id: "higo", nombre: "Higo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/higo.jpg" },
  { id: "kiwi", nombre: "Kiwi", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/kiwi.jpg" },
  { id: "laurel", nombre: "Laurel", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/laurel.jpg" },
  { id: "lechuga", nombre: "Lechuga", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/lechuga.jpg" },
  { id: "limon", nombre: "Limon", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/limon.jpg" },
  { id: "mandarina", nombre: "Mandarina", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/mandarina.jpg" },
  { id: "mango", nombre: "Mango", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/mango.jpg" },
  { id: "manzana", nombre: "Manzana", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/manzana.jpg" },
  { id: "melon", nombre: "Melon", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/melon.jpg" },
  { id: "membrillo", nombre: "Membrillo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/membrillo.jpg" },
  { id: "menta", nombre: "Menta", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/menta.jpg" },
  { id: "mora", nombre: "Mora", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/mora.jpg" },
  { id: "naranja", nombre: "Naranja", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/naranja.jpg" },
  { id: "palta", nombre: "Palta", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/palta.jpg" },
  { id: "papa", nombre: "Papa", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/papa.jpg" },
  { id: "papaya", nombre: "Papaya", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/papaya.jpg" },
  { id: "pepino_dulce", nombre: "Pepino dulce", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/pepino_dulce.jpg" },
  { id: "pepino", nombre: "Pepino", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/pepino.jpg" },
  { id: "pera", nombre: "Pera", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/pera.jpg" },
  { id: "perejil", nombre: "Perejil", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/perejil.jpg" },
  { id: "pimenton", nombre: "Pimenton", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/pimenton.jpg" },
  { id: "piña", nombre: "Piña", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/piña.jpg" },
  { id: "platano", nombre: "Platano", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/platano.jpg" },
  { id: "pomelo", nombre: "Pomelo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/pomelo.jpg" },
  { id: "porotos_verdes", nombre: "Porotos verdes", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/porotos_verdes.jpg" },
  { id: "porotos", nombre: "Porotos", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/porotos.jpg" },
  { id: "rabano", nombre: "Rabano", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/rabano.jpg" },
  { id: "repollo", nombre: "Repollo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/repollo.jpg" },
  { id: "romero", nombre: "Romero", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/romero.jpg" },
  { id: "sandia", nombre: "Sandia", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/sandia.jpg" },
  { id: "tomate_ch", nombre: "Tomate ch", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/tomate_ch.jpg" },
  { id: "tomate", nombre: "Tomate", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/tomate.jpg" },
  { id: "tuna", nombre: "Tuna", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/tuna.jpg" },
  { id: "uva", nombre: "Uva", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/uva.jpg" },
  { id: "zanahoria", nombre: "Zanahoria", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/zanahoria.jpg" },
  { id: "zapallo_it", nombre: "Zapallo it", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/zapallo_it.jpg" },
  { id: "zapallo", nombre: "Zapallo", categoria: "feria", unidadDefault: "kg", imagen: "img/frutas_verduras/zapallo.jpg" },

  // ---------- SUPERMERCADO ----------
  { id: "aceite", nombre: "Aceite", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/aceite.jpg" },
  { id: "arroz", nombre: "Arroz", categoria: "supermercado", unidadDefault: "kg", imagen: "img/super/arroz.jpg" },
  { id: "azucar", nombre: "Azucar", categoria: "supermercado", unidadDefault: "kg", imagen: "img/super/azucar.jpg" },
  { id: "cafe", nombre: "Cafe", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/cafe.jpg" },
  { id: "cereal", nombre: "Cereal", categoria: "supermercado", unidadDefault: "caja", imagen: "img/super/cereal.jpg" },
  { id: "confort", nombre: "Confort", categoria: "supermercado", unidadDefault: "paquete", imagen: "img/super/confort.jpg" },
  { id: "detergente", nombre: "Detergente", categoria: "supermercado", unidadDefault: "litro", imagen: "img/super/detergente.jpg" },
  { id: "fideos", nombre: "Fideos", categoria: "supermercado", unidadDefault: "paquete", imagen: "img/super/fideos.jpg" },
  { id: "harina", nombre: "Harina", categoria: "supermercado", unidadDefault: "kg", imagen: "img/super/harina.jpg" },
  { id: "jabon", nombre: "Jabon", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/jabon.jpg" },
  { id: "jamon", nombre: "Jamon", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/jamon.jpg" },
  { id: "leche", nombre: "Leche", categoria: "supermercado", unidadDefault: "litro", imagen: "img/super/leche.jpg" },
  { id: "mantequilla", nombre: "Mantequilla", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/mantequilla.jpg" },
  { id: "pan_molde", nombre: "Pan molde", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/pan_molde.jpg" },
  { id: "queso", nombre: "Queso", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/queso.jpg" },
  { id: "sal", nombre: "Sal", categoria: "supermercado", unidadDefault: "kg", imagen: "img/super/sal.jpg" },
  { id: "salsa_tomate", nombre: "Salsa tomate", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/salsa_tomate.jpg" },
  { id: "te", nombre: "Te", categoria: "supermercado", unidadDefault: "caja", imagen: "img/super/te.jpg" },
  { id: "yogurt", nombre: "Yogurt", categoria: "supermercado", unidadDefault: "unidad", imagen: "img/super/yogurt.jpg" }
];

// Unidades
const UNIDADES_FRECUENTES = [
  "unidad",
  "kg",
  "litro",
  "bandeja",
  "paquete",
  "caja",
  "frasco"
];
const UNIDADES_OTRAS = ["atado", "cabeza", "saco", "bolsa", "lata"];

// Estado
let categoriaActual = "feria";
let productoSeleccionado = null;
let items = JSON.parse(localStorage.getItem("lista_compras") || "[]");
let historial = JSON.parse(localStorage.getItem("historial_compras") || "[]");
let favoritos = JSON.parse(localStorage.getItem("favoritos_productos") || "[]");
let ultimoFiltradoHistorial = [];

// DOM
const catButtons = document.querySelectorAll(".cat-btn");
const categoriaLabel = document.getElementById("categoria-actual-label");
const labelListaCategoria = document.getElementById("label-lista-categoria");
const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const filtroFavoritosCheckbox = document.getElementById("filtro-favoritos");

const listaPendientesEl = document.getElementById("lista-pendientes");
const listaCompradosEl = document.getElementById("lista-comprados");
const toggleComprados = document.getElementById("toggle-comprados");
const countCompradosHeader = document.getElementById("count-comprados-header");
const arrowComprados = document.getElementById("arrow-comprados");

const formManual = document.getElementById("form-manual");
const inputManualNombre = document.getElementById("manual-nombre");

const statTotal = document.getElementById("stat-total");
const statPendientes = document.getElementById("stat-pendientes");
const statComprados = document.getElementById("stat-comprados");

const btnBorrarTodo = document.getElementById("btn-borrar-todo");
const btnBorrarComprados = document.getElementById("btn-borrar-comprados");
const btnExportarLista = document.getElementById("btn-exportar-lista");

// Historial DOM
const btnGuardarHistorial = document.getElementById("btn-guardar-historial");
const historialDesdeInput = document.getElementById("historial-desde");
const historialHastaInput = document.getElementById("historial-hasta");
const historialCategoriaSelect = document.getElementById("historial-categoria");
const btnAplicarRango = document.getElementById("btn-aplicar-rango");
const historialResumenEl = document.getElementById("historial-resumen");
const historialGraficosEl = document.getElementById("historial-graficos");
const btnExportarHistorial = document.getElementById("btn-exportar-historial");
const btnBackupHistorial = document.getElementById("btn-backup-historial");
const inputRestaurarBackup = document.getElementById("input-restaurar-backup");
const btnBorrarHistorial = document.getElementById("btn-borrar-historial");

// Footer DOM
const appVersionEl = document.getElementById("app-version");
const onlineStatusEl = document.getElementById("online-status");

// Catálogo toggle
const catalogSection = document.querySelector(".catalog-section");
const toggleCatalogoBtn = document.getElementById("toggle-catalogo");

// Modal
const modal = document.getElementById("modal-agregar");
const modalTitulo = document.getElementById("modal-titulo");
const modalNombre = document.getElementById("modal-producto-nombre");
const modalCantidad = document.getElementById("modal-cantidad");
const modalUnidad = document.getElementById("modal-unidad");
const modalPrecio = document.getElementById("modal-precio");
const modalCancelar = document.getElementById("modal-cancelar");
const modalForm = document.getElementById("modal-form");

// -----------------------------
// Persistencia
// -----------------------------
function guardar() {
  localStorage.setItem("lista_compras", JSON.stringify(items));
}

function guardarHistorial() {
  localStorage.setItem("historial_compras", JSON.stringify(historial));
}

function guardarFavoritos() {
  localStorage.setItem("favoritos_productos", JSON.stringify(favoritos));
}

// -----------------------------
// Stats
// -----------------------------
function actualizarStats(listaVisible) {
  const total = listaVisible.length;
  const comprados = listaVisible.filter(i => i.comprado).length;
  const pendientes = total - comprados;

  statTotal.textContent = total;
  statPendientes.textContent = pendientes;
  statComprados.textContent = comprados;
}

// -----------------------------
// Favoritos
// -----------------------------
function esFavorito(id) {
  return favoritos.includes(id);
}

function toggleFavorito(id) {
  if (esFavorito(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  guardarFavoritos();
}

// -----------------------------
// Catálogo con búsqueda + favoritos
// -----------------------------
function renderCatalogo() {
  catalogo.innerHTML = "";

  const nombreCat = categoriaActual === "feria" ? "Feria" : "Supermercado";
  categoriaLabel.textContent = nombreCat;
  labelListaCategoria.textContent = nombreCat;

  const texto = buscador.value.toLowerCase().trim();
  const soloFavs = filtroFavoritosCheckbox?.checked;

  const productosFiltrados = PRODUCTOS.filter(p => {
    if (p.categoria !== categoriaActual) return false;
    if (!p.nombre.toLowerCase().includes(texto)) return false;
    if (soloFavs && !esFavorito(p.id)) return false;
    return true;
  });

  productosFiltrados.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "product-image-wrapper";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = p.imagen;
    img.alt = p.nombre;

    imgWrapper.appendChild(img);

    const body = document.createElement("div");
    body.className = "product-body";

    const nombreEl = document.createElement("div");
    nombreEl.className = "product-name";
    nombreEl.textContent = p.nombre;

    const metaEl = document.createElement("div");
    metaEl.className = "product-meta";
    metaEl.textContent = `Unidad típica: ${p.unidadDefault}`;

    body.appendChild(nombreEl);
    body.appendChild(metaEl);

    // Botón favorito
    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn" + (esFavorito(p.id) ? " fav-active" : "");
    favBtn.textContent = "★";
    favBtn.addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorito(p.id);
      renderCatalogo();
    });

    card.appendChild(imgWrapper);
    card.appendChild(body);
    card.appendChild(favBtn);

    card.addEventListener("click", () => abrirModalAgregar(p));

    catalogo.appendChild(card);
  });
}

// -----------------------------
// Modal
// -----------------------------
function abrirModalAgregar(producto) {
  productoSeleccionado = producto;

  modalTitulo.textContent = "Agregar producto";
  modalNombre.textContent = producto.nombre;
  modalCantidad.value = "1";
  modalPrecio.value = "";

  modalUnidad.innerHTML = "";

  UNIDADES_FRECUENTES.forEach(u => {
    const opt = document.createElement("option");
    opt.value = u;
    opt.textContent = u;
    modalUnidad.appendChild(opt);
  });

  if (UNIDADES_OTRAS.length > 0) {
    const sep = document.createElement("option");
    sep.disabled = true;
    sep.textContent = "──────────";
    modalUnidad.appendChild(sep);

    UNIDADES_OTRAS.forEach(u => {
      const opt = document.createElement("option");
      opt.value = u;
      opt.textContent = u;
      modalUnidad.appendChild(opt);
    });
  }

  if (
    UNIDADES_FRECUENTES.includes(producto.unidadDefault) ||
    UNIDADES_OTRAS.includes(producto.unidadDefault)
  ) {
    modalUnidad.value = producto.unidadDefault;
  } else {
    modalUnidad.value = "unidad";
  }

  modal.classList.remove("oculto");
}

function cerrarModal() {
  productoSeleccionado = null;
  modal.classList.add("oculto");
}

// Evento modal
modalForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!productoSeleccionado) return;

  const cantidad = modalCantidad.value.trim();
  const unidad = modalUnidad.value;
  const precio = modalPrecio.value.trim();

  if (!cantidad || Number(cantidad) <= 0) return;

  items.push({
    nombre: productoSeleccionado.nombre,
    categoria: productoSeleccionado.categoria,
    cantidad,
    unidad,
    precio: precio || null,
    comprado: false
  });

  guardar();
  renderLista();
  cerrarModal();
});

modalCancelar.addEventListener("click", cerrarModal);

modal.addEventListener("click", e => {
  if (e.target === modal) cerrarModal();
});

// -----------------------------
// Agregar manual
// -----------------------------
formManual.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = inputManualNombre.value.trim();
  if (!nombre) return;

  const productoManual = {
    id: "manual-" + Date.now(),
    nombre,
    categoria: categoriaActual,
    unidadDefault: "unidad",
    imagen: ""
  };

  abrirModalAgregar(productoManual);
  inputManualNombre.value = "";
});

// -----------------------------
// Crear item de lista
// -----------------------------
function crearItemElemento(item, index) {
  const li = document.createElement("li");
  li.className = "item" + (item.comprado ? " item-comprado" : "");

  const main = document.createElement("div");
  main.className = "item-main";

  const nombreEl = document.createElement("div");
  nombreEl.className = "item-nombre";
  nombreEl.textContent = item.nombre;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = item.categoria === "feria" ? "Feria" : "Supermercado";

  nombreEl.appendChild(document.createTextNode(" "));
  nombreEl.appendChild(badge);

  const detalleRow = document.createElement("div");
  detalleRow.className = "item-detalle-row";

  // Cantidad
  const labelCant = document.createElement("label");
  labelCant.textContent = "Cant.";
  const inputCant = document.createElement("input");
  inputCant.type = "number";
  inputCant.min = "0";
  inputCant.value = item.cantidad || "";
  inputCant.addEventListener("change", () => {
    items[index].cantidad = inputCant.value;
    guardar();
  });
  labelCant.appendChild(inputCant);

  // Unidad
  const labelUnidad = document.createElement("label");
  labelUnidad.textContent = "Unidad";
  const selectUnidad = document.createElement("select");

  UNIDADES_FRECUENTES.forEach(u => {
    const opt = document.createElement("option");
    opt.value = u;
    opt.textContent = u;
    selectUnidad.appendChild(opt);
  });

  if (UNIDADES_OTRAS.length > 0) {
    const sep = document.createElement("option");
    sep.disabled = true;
    sep.textContent = "──────────";
    selectUnidad.appendChild(sep);

    UNIDADES_OTRAS.forEach(u => {
      const opt = document.createElement("option");
      opt.value = u;
      opt.textContent = u;
      selectUnidad.appendChild(opt);
    });
  }

  if (
    item.unidad &&
    !UNIDADES_FRECUENTES.includes(item.unidad) &&
    !UNIDADES_OTRAS.includes(item.unidad)
  ) {
    const opt = document.createElement("option");
    opt.value = item.unidad;
    opt.textContent = item.unidad;
    selectUnidad.insertBefore(opt, selectUnidad.firstChild);
  }

  selectUnidad.value = item.unidad || "unidad";

  selectUnidad.addEventListener("change", () => {
    items[index].unidad = selectUnidad.value;
    guardar();
  });

  labelUnidad.appendChild(selectUnidad);

  // Precio
  const labelPrecio = document.createElement("label");
  labelPrecio.textContent = "Precio";
  const inputPrecio = document.createElement("input");
  inputPrecio.type = "number";
  inputPrecio.min = "0";
  inputPrecio.step = "0.01";
  inputPrecio.value = item.precio ?? "";
  inputPrecio.addEventListener("change", () => {
    items[index].precio = inputPrecio.value;
    guardar();
  });
  labelPrecio.appendChild(inputPrecio);

  detalleRow.appendChild(labelCant);
  detalleRow.appendChild(labelUnidad);
  detalleRow.appendChild(labelPrecio);

  main.appendChild(nombreEl);
  main.appendChild(detalleRow);

  const acciones = document.createElement("div");
  acciones.className = "item-actions";

  const btnToggle = document.createElement("button");
  btnToggle.textContent = item.comprado ? "Desmarcar" : "Comprado";
  btnToggle.className = "btn-success";
  btnToggle.addEventListener("click", () => {
    items[index].comprado = !items[index].comprado;
    guardar();
    renderLista();
  });

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn-danger";
  btnEliminar.addEventListener("click", () => {
    items.splice(index, 1);
    guardar();
    renderLista();
  });

  acciones.appendChild(btnToggle);
  acciones.appendChild(btnEliminar);

  li.appendChild(main);
  li.appendChild(acciones);

  return li;
}

// -----------------------------
// Render lista
// -----------------------------
function renderLista() {
  listaPendientesEl.innerHTML = "";
  listaCompradosEl.innerHTML = "";

  const visibles = [];

  items.forEach((item, index) => {
    if (item.categoria !== categoriaActual) return;

    visibles.push(item);
    const el = crearItemElemento(item, index);

    if (item.comprado) {
      listaCompradosEl.appendChild(el);
    } else {
      listaPendientesEl.appendChild(el);
    }
  });

  actualizarStats(visibles);
  countCompradosHeader.textContent = visibles.filter(i => i.comprado).length;
}

// -----------------------------
// Eventos de categoría
// -----------------------------
catButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.categoria;
    if (cat === categoriaActual) return;

    categoriaActual = cat;

    catButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    renderCatalogo();
    renderLista();
  });
});

// Búsqueda
if (buscador) {
  buscador.addEventListener("input", () => {
    renderCatalogo();
  });
}

// Filtro solo favoritos
if (filtroFavoritosCheckbox) {
  filtroFavoritosCheckbox.addEventListener("change", () => {
    renderCatalogo();
  });
}

// Colapsar / expandir comprados
let compradosOcultos = false;

toggleComprados.addEventListener("click", () => {
  compradosOcultos = !compradosOcultos;

  if (compradosOcultos) {
    listaCompradosEl.classList.add("oculta");
    arrowComprados.textContent = "▲";
  } else {
    listaCompradosEl.classList.remove("oculta");
    arrowComprados.textContent = "▼";
  }
});

// Botones borrar
btnBorrarTodo.addEventListener("click", () => {
  if (items.length === 0) return;
  if (
    !confirm(
      "¿Seguro que quieres borrar toda la lista (todas las categorías)?"
    )
  )
    return;

  items = [];
  guardar();
  renderLista();
});

btnBorrarComprados.addEventListener("click", () => {
  const hayComprados = items.some(
    i => i.categoria === categoriaActual && i.comprado
  );
  if (!hayComprados) return;

  if (!confirm("¿Borrar solo los productos comprados de esta categoría?"))
    return;

  items = items.filter(i => !(i.categoria === categoriaActual && i.comprado));
  guardar();
  renderLista();
});

// Ocultar / mostrar catálogo
let catalogoOculto = false;

toggleCatalogoBtn.addEventListener("click", () => {
  catalogoOculto = !catalogoOculto;

  if (catalogoOculto) {
    catalogSection.classList.add("hidden-block");
    toggleCatalogoBtn.textContent = "Mostrar catálogo";
  } else {
    catalogSection.classList.remove("hidden-block");
    toggleCatalogoBtn.textContent = "Ocultar catálogo";
  }
});

// Exportar lista a texto (para copiar/compartir)
btnExportarLista.addEventListener("click", () => {
  const lineas = items.map(item => {
    const partes = [];
    partes.push(item.nombre);
    if (item.cantidad) partes.push(`x${item.cantidad}`);
    if (item.unidad) partes.push(item.unidad);
    if (item.precio) partes.push(`$${item.precio}`);
    partes.push(item.categoria === "feria" ? "[Feria]" : "[Super]");
    if (item.comprado) partes.push("[Comprado]");
    return "- " + partes.join(" ");
  });

  const texto = lineas.join("\n") || "Lista vacía";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(texto)
      .then(() => alert("Lista copiada al portapapeles."))
      .catch(() => alert(texto));
  } else {
    alert(texto);
  }
});

// -----------------------------
// Historial
// -----------------------------
function guardarHistorialDeComprados() {
  const comprados = items.filter(i => i.comprado);
  if (!comprados.length) {
    alert(
      "Marca algunos productos como comprados antes de guardar el historial."
    );
    return;
  }

  const ahora = new Date();
  const fecha = ahora.toISOString().slice(0, 10);
  const timestamp = ahora.toISOString();

  comprados.forEach(i => {
    historial.push({
      nombre: i.nombre,
      categoria: i.categoria,
      cantidad: i.cantidad || null,
      unidad: i.unidad || null,
      precio: i.precio ? Number(i.precio) : null,
      fecha,
      timestamp
    });
  });

  guardarHistorial();

  if (
    confirm(
      "Compra guardada en el historial.\n\n¿Quieres eliminar los productos comprados de la lista actual?"
    )
  ) {
    items = items.filter(i => !i.comprado);
    guardar();
    renderLista();
  }

  actualizarVistaHistorial();
}

// Gráficos del historial
function renderGraficosHistorial(filas) {
  if (!historialGraficosEl) return;

  if (!filas.length) {
    historialGraficosEl.innerHTML = "";
    return;
  }

  const top = filas.slice(0, 5);
  const maxGastado =
    Math.max(...top.map(f => f.totalGastado || 0).filter(v => v >= 0)) || 1;

  let html = '<div class="chart-block">';
  html += "<h4>Top productos por gasto</h4>";
  html += '<div class="chart-bars">';

  top.forEach(f => {
    const width = ((f.totalGastado || 0) / maxGastado) * 100;
    html += `
      <div class="chart-row">
        <span class="chart-label">${f.nombre}</span>
        <div class="chart-bar-wrapper">
          <div class="chart-bar" style="width:${width}%;"></div>
        </div>
        <span class="chart-value">$${(f.totalGastado || 0).toFixed(0)}</span>
      </div>
    `;
  });

  html += "</div></div>";
  historialGraficosEl.innerHTML = html;
}

// Vista del historial (con eliminación por registro)
function actualizarVistaHistorial() {
  if (!historialResumenEl) return;

  if (!historial.length) {
    historialResumenEl.innerHTML =
      "<p>No hay datos en el historial todavía.</p>";
    historialGraficosEl.innerHTML = "";
    ultimoFiltradoHistorial = [];
    return;
  }

  const desdeStr = historialDesdeInput?.value || "";
  const hastaStr = historialHastaInput?.value || "";
  const catFiltro = historialCategoriaSelect?.value || "todas";

  let desde = null;
  let hasta = null;

  if (desdeStr) {
    desde = new Date(desdeStr + "T00:00:00");
  }
  if (hastaStr) {
    hasta = new Date(hastaStr + "T23:59:59");
  }

  const filtrado = historial
    .map((reg, idx) => ({ ...reg, __index: idx }))
    .filter(reg => {
      const d = reg.timestamp ? new Date(reg.timestamp) : new Date(reg.fecha);
      if (isNaN(d)) return false;

      if (desde && d < desde) return false;
      if (hasta && d > hasta) return false;

      if (catFiltro !== "todas" && reg.categoria !== catFiltro) return false;

      return true;
    });

  ultimoFiltradoHistorial = filtrado;

  if (!filtrado.length) {
    historialResumenEl.innerHTML =
      "<p>No hay datos en este rango de fechas / categoría.</p>";
    historialGraficosEl.innerHTML = "";
    return;
  }

  // ------- RESUMEN AGRUPADO POR PRODUCTO -------
  const agrupado = {};
  filtrado.forEach(reg => {
    const key = reg.nombre;
    if (!agrupado[key]) {
      agrupado[key] = {
        nombre: reg.nombre,
        categoria: reg.categoria,
        veces: 0,
        totalCantidad: 0,
        totalGastado: 0
      };
    }
    const entry = agrupado[key];
    entry.veces += 1;

    const cantNum = parseFloat(reg.cantidad) || 0;
    const precioNum = parseFloat(reg.precio) || 0;
    entry.totalCantidad += cantNum;
    entry.totalGastado += precioNum;
  });

  const filas = Object.values(agrupado).sort(
    (a, b) => b.totalGastado - a.totalGastado
  );

  let totalGlobal = 0;
  filas.forEach(f => {
    totalGlobal += f.totalGastado;
  });

  let html = "<h4>Resumen por producto</h4>";
  html += "<table><thead>";
  html +=
    "<tr><th>Producto</th><th>Categoría</th><th>Veces</th><th>Cant. total</th><th>Gastado aprox.</th></tr>";
  html += "</thead><tbody>";

  filas.forEach(f => {
    html += "<tr>";
    html += `<td>${f.nombre}</td>`;
    html += `<td>${f.categoria === "feria" ? "Feria" : "Super"}</td>`;
    html += `<td>${f.veces}</td>`;
    html += `<td>${f.totalCantidad || "-"}</td>`;
    html += `<td>${f.totalGastado ? "$" + f.totalGastado.toFixed(0) : "-"}</td>`;
    html += "</tr>";
  });

  html += "</tbody></table>";
  html += `<p style="margin-top:0.5rem;font-size:0.8rem;"><strong>Total gastado aprox. en este rango: $${totalGlobal.toFixed(
    0
  )}</strong></p>`;

  // ------- DETALLE POR REGISTRO (para poder borrar) -------
  html += `<h4 style="margin-top:0.8rem;">Detalle de compras en este rango</h4>`;
  html += "<table><thead>";
  html +=
    "<tr><th>Fecha</th><th>Producto</th><th>Categoría</th><th>Cant.</th><th>Unidad</th><th>Precio</th><th></th></tr>";
  html += "</thead><tbody>";

  filtrado.forEach(reg => {
    html += "<tr>";
    html += `<td>${reg.fecha || ""}</td>`;
    html += `<td>${reg.nombre}</td>`;
    html += `<td>${reg.categoria === "feria" ? "Feria" : "Super"}</td>`;
    html += `<td>${reg.cantidad ?? "-"}</td>`;
    html += `<td>${reg.unidad ?? "-"}</td>`;
    html += `<td>${
      reg.precio != null ? "$" + Number(reg.precio).toFixed(0) : "-"
    }</td>`;
    html += `<td><button class="btn-danger btn-small btn-eliminar-registro" data-hindex="${reg.__index}">Eliminar</button></td>`;
    html += "</tr>";
  });

  html += "</tbody></table>";

  historialResumenEl.innerHTML = html;

  // Conectar botones de eliminar
  const botonesEliminar = historialResumenEl.querySelectorAll(
    ".btn-eliminar-registro"
  );
  botonesEliminar.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.hindex);
      if (Number.isNaN(idx)) return;

      if (!confirm("¿Eliminar este producto del historial?")) return;

      historial.splice(idx, 1);
      guardarHistorial();
      actualizarVistaHistorial();
    });
  });

  // gráficos basados en el resumen
  renderGraficosHistorial(filas);
}

// Exportar historial a CSV (filtrado actual)
function exportarHistorialCSV() {
  if (!ultimoFiltradoHistorial.length) {
    alert("No hay datos en este rango para exportar.");
    return;
  }

  const encabezados = [
    "fecha",
    "nombre",
    "categoria",
    "cantidad",
    "unidad",
    "precio"
  ];

  const filas = ultimoFiltradoHistorial.map(reg => [
    reg.fecha || "",
    reg.nombre || "",
    reg.categoria || "",
    reg.cantidad ?? "",
    reg.unidad ?? "",
    reg.precio ?? ""
  ]);

  let csv = encabezados.join(";") + "\n";
  filas.forEach(row => {
    csv += row.map(v => String(v).replace(/;/g, ",")).join(";") + "\n";
  });

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "historial_compras.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Backup / restore historial
function descargarBackupHistorial() {
  const data = JSON.stringify({ version: APP_VERSION, historial }, null, 2);
  const blob = new Blob([data], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "historial_backup.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function restaurarBackupDesdeArchivo(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const contenido = JSON.parse(e.target.result);
      let nuevoHistorial = null;

      if (Array.isArray(contenido)) {
        nuevoHistorial = contenido;
      } else if (contenido && Array.isArray(contenido.historial)) {
        nuevoHistorial = contenido.historial;
      }

      if (!nuevoHistorial) {
        alert("Archivo de backup no válido.");
        return;
      }

      historial = nuevoHistorial;
      guardarHistorial();
      actualizarVistaHistorial();
      alert("Backup restaurado correctamente.");
    } catch (err) {
      alert("No se pudo leer el backup. Archivo inválido.");
    }
  };
  reader.readAsText(file);
}

// Borrar historial completo
function borrarHistorialCompleto() {
  if (!historial.length) {
    alert("No hay datos en el historial para borrar.");
    return;
  }

  if (
    confirm(
      "¿Seguro que quieres borrar TODO el historial guardado? Esta acción no se puede deshacer."
    )
  ) {
    historial = [];
    guardarHistorial();
    actualizarVistaHistorial();
  }
}

// Eventos historial
btnGuardarHistorial.addEventListener("click", guardarHistorialDeComprados);
btnAplicarRango.addEventListener("click", actualizarVistaHistorial);
historialCategoriaSelect.addEventListener("change", actualizarVistaHistorial);
btnExportarHistorial.addEventListener("click", exportarHistorialCSV);
btnBackupHistorial.addEventListener("click", descargarBackupHistorial);
inputRestaurarBackup.addEventListener("change", e => {
  const file = e.target.files[0];
  if (file) restaurarBackupDesdeArchivo(file);
  e.target.value = "";
});
btnBorrarHistorial.addEventListener("click", borrarHistorialCompleto);

// -----------------------------
// Versión y estado online
// -----------------------------
if (appVersionEl) {
  appVersionEl.textContent = "Versión " + APP_VERSION;
}

function actualizarEstadoOnline() {
  if (!onlineStatusEl) return;
  if (navigator.onLine) {
    onlineStatusEl.textContent = "Online";
    onlineStatusEl.classList.remove("offline");
  } else {
    onlineStatusEl.textContent = "Offline";
    onlineStatusEl.classList.add("offline");
  }
}

window.addEventListener("online", actualizarEstadoOnline);
window.addEventListener("offline", actualizarEstadoOnline);

// -----------------------------
// Inicio
// -----------------------------
renderCatalogo();
renderLista();
actualizarEstadoOnline();
actualizarVistaHistorial();
