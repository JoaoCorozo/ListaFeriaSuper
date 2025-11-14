const CACHE_NAME = "lista-compras-v4";

const FILES_TO_CACHE = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",

  // === IMÁGENES FERIA ===
  "img/frutas_verduras/acelga.jpg",
  "img/frutas_verduras/aji_rojo.webp",
  "img/frutas_verduras/aji_verde.jpg",
  "img/frutas_verduras/ajo.jpg",
  "img/frutas_verduras/albahaca.jpg",
  "img/frutas_verduras/alcachofa.jpg",
  "img/frutas_verduras/apio.jpg",
  "img/frutas_verduras/arandano.jpg",
  "img/frutas_verduras/arvejas.jpg",
  "img/frutas_verduras/berenjena.jpg",
  "img/frutas_verduras/betarraga.jpg",
  "img/frutas_verduras/brocoli.jpg",
  "img/frutas_verduras/cebolla.jpg",
  "img/frutas_verduras/cebollin.jpg",
  "img/frutas_verduras/champiñon.jpg",
  "img/frutas_verduras/chirimoya.jpg",
  "img/frutas_verduras/choclo.jpg",
  "img/frutas_verduras/ciboulette.jpg",
  "img/frutas_verduras/cilantro.jpg",
  "img/frutas_verduras/ciruela.jpg",
  "img/frutas_verduras/coco.jpg",
  "img/frutas_verduras/coliflor.jpg",
  "img/frutas_verduras/damasco.jpg",
  "img/frutas_verduras/durazno.jpg",
  "img/frutas_verduras/esparrago.jpg",
  "img/frutas_verduras/espinaca.jpg",
  "img/frutas_verduras/frambuesa.jpg",
  "img/frutas_verduras/frutilla.jpg",
  "img/frutas_verduras/granada.jpg",
  "img/frutas_verduras/guinda.jpg",
  "img/frutas_verduras/habas.jpg",
  "img/frutas_verduras/higo.jpg",
  "img/frutas_verduras/kiwi.jpg",
  "img/frutas_verduras/laurel.jpg",
  "img/frutas_verduras/lechuga.jpg",
  "img/frutas_verduras/limon.jpg",
  "img/frutas_verduras/mandarina.jpg",
  "img/frutas_verduras/mango.jpg",
  "img/frutas_verduras/manzana.jpg",
  "img/frutas_verduras/melon.jpg",
  "img/frutas_verduras/membrillo.jpg",
  "img/frutas_verduras/menta.jpg",
  "img/frutas_verduras/mora.jpg",
  "img/frutas_verduras/naranja.jpg",
  "img/frutas_verduras/palta.jpg",
  "img/frutas_verduras/papa.jpg",
  "img/frutas_verduras/papaya.jpg",
  "img/frutas_verduras/pepino_dulce.jpg",
  "img/frutas_verduras/pepino.jpg",
  "img/frutas_verduras/pera.jpg",
  "img/frutas_verduras/perejil.jpg",
  "img/frutas_verduras/pimenton.jpg",
  "img/frutas_verduras/piña.jpg",
  "img/frutas_verduras/platano.jpg",
  "img/frutas_verduras/pomelo.jpg",
  "img/frutas_verduras/porotos_verdes.jpg",
  "img/frutas_verduras/porotos.jpg",
  "img/frutas_verduras/rabano.jpg",
  "img/frutas_verduras/repollo.jpg",
  "img/frutas_verduras/romero.jpg",
  "img/frutas_verduras/sandia.jpg",
  "img/frutas_verduras/tomate_ch.jpg",
  "img/frutas_verduras/tomate.jpg",
  "img/frutas_verduras/tuna.jpg",
  "img/frutas_verduras/uva.jpg",
  "img/frutas_verduras/zanahoria.jpg",
  "img/frutas_verduras/zapallo_it.jpg",
  "img/frutas_verduras/zapallo.jpg",

  // === IMÁGENES SUPER ===
  "img/super/aceite.jpg",
  "img/super/arroz.jpg",
  "img/super/azucar.jpg",
  "img/super/cafe.jpg",
  "img/super/cereal.jpg",
  "img/super/confort.jpg",
  "img/super/detergente.jpg",
  "img/super/fideos.jpg",
  "img/super/harina.jpg",
  "img/super/jabon.jpg",
  "img/super/jamon.jpg",
  "img/super/leche.jpg",
  "img/super/mantequilla.jpg",
  "img/super/pan_molde.jpg",
  "img/super/queso.jpg",
  "img/super/sal.jpg",
  "img/super/salsa_tomate.jpg",
  "img/super/te.jpg",
  "img/super/yogurt.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Si está en caché → lo sirve
      if (response) return response;
      // Si no, trata de ir a la red
      return fetch(event.request).catch(() => {
        // Aquí podrías devolver una página de error offline si quisieras
      });
    })
  );
});
