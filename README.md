🛒 Lista de Compras – PWA Offline para iPhone y PC

Una aplicación PWA (Progressive Web App) diseñada para crear listas de compras completas, organizadas y visualmente agradables.
Funciona 100% offline, incluso en modo avión desde el iPhone, gracias al uso de Service Workers y almacenamiento local.

Ideal para compras en feria y supermercado, permitiendo llevar un registro histórico de gastos, productos frecuentes y estadísticas detalladas de consumo.

🚀 Características principales
✔ Catálogo visual con imágenes

Catálogo completo de frutas y verduras.

Catálogo de productos de supermercado.

Imágenes locales para funcionamiento total sin internet.

✔ Lista de compras inteligente

Separación por categoría: Feria / Supermercado.

Agregar productos tocando el catálogo.

Agregar productos manualmente si no existen.

Cantidad, unidad y precio editable.

División automática:

Pendientes

Comprados

Botón “Comprado” en color verde.

Exportar lista lista para compartir.

✔ App instalable – PWA

Se instala en iPhone desde Safari (como una app nativa).

Funciona sin conexión, sin WiFi, sin datos.

Íconos personalizados (192px y 512px).

Service Worker para navegación offline + caché local.

✔ Historial de compras avanzado

Guarda los productos marcados como “Comprado”.

Registra fecha, precio y cantidad.

Filtros avanzados:

Desde / Hasta

Todas las categorías

Solo Feria

Solo Supermercado

Estadísticas detalladas:

Veces que se compró cada producto.

Cantidad total consumida.

Total gastado aproximado.

Ranking de productos más comprados y más costosos.

📱 Instalación en iPhone (PWA)

Abrir la URL del proyecto (GitHub Pages) en Safari.

Esperar a que cargue completamente.

Tocar el botón Compartir.

Seleccionar Agregar al inicio.

La aplicación aparecerá como una app normal en el menú del iPhone.

Funciona incluso en modo avión.

🗂 Estructura del proyecto
📦 raiz del proyecto
 ┣ 📂 img
 │   ┣ 📂 frutas_verduras
 │   ┗ 📂 super
 ┣ 📂 icons
 │   ┣ icon-192.png
 │   ┗ icon-512.png
 ┣ 📜 index.html
 ┣ 📜 styles.css
 ┣ 📜 app.js
 ┣ 📜 service-worker.js
 ┣ 📜 manifest.json
 ┗ 📜 README.md

🛠 Tecnologías utilizadas

HTML5, CSS3, JavaScript Vanilla

PWA (Progressive Web App)

Service Worker / Cache API

LocalStorage

Imágenes locales

Compatible con:

iPhone (iOS)

Android

PC / Mac

🧩 Próximas mejoras

Modo oscuro / alto contraste

Exportar historial a Excel o CSV

Gráficos estadísticos

Sincronización entre dispositivos (nube)

Favoritos / productos recurrentes

Comparación de precios mes a mes

Ruta optimizada de supermercado

👨‍💻 Autor

Joao Corozo
Proyecto personal enfocado en mejorar la organización de compras y el análisis de gastos mensuales.

📄 Licencia

MIT License — libre para usar, modificar y mejorar.