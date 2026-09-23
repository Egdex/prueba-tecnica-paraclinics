# Catálogo de Productos

Prueba técnica desarrollada para Paraclinics S.A.

Aplicación web que consume la API de DummyJSON y muestra un catálogo de productos con búsqueda en tiempo real.

---

## Tecnologías utilizadas

| Tecnología | Uso                                      |
| ---------- | ---------------------------------------- |
| HTML5      | Estructura de la página                  |
| CSS3       | Diseño y estilos                         |
| JavaScript | Consumo de API y lógica de la aplicación |
| Git        | Control de versiones                     |

---

## Funcionalidades

* Consumo de productos mediante la API de DummyJSON.
* Visualización de imagen, título, categoría, precio y stock.
* Formato de precios en pesos chilenos (CLP).
* Búsqueda de productos por título en tiempo real.
* Indicador de carga mientras se obtienen los productos.
* Mensaje de error en caso de que falle la solicitud a la API.

---

## Cómo ejecutar el proyecto

### Requisitos

* Visual Studio Code
* Extensión Live Server
* Navegador web

### Ejecución

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Abrir la carpeta del proyecto en Visual Studio Code.

3. Abrir `index.html` utilizando Live Server.

4. La aplicación cargará automáticamente los productos desde la API.

---

## Estructura del proyecto

```text
Pag Web Prueba tecnica/
│
├── index.html
├── README.md
│
├── css/
│   └── styles.css
│
└── js/
    └── app.js
```

---

## Decisiones de desarrollo

Se utilizó JavaScript vanilla, sin frameworks ni librerías externas, para realizar el consumo de la API y la manipulación del DOM.

La lógica encargada de mostrar los productos se separó en la función `renderProducts()`. Esto permite reutilizar la misma lógica tanto para mostrar todos los productos como para mostrar los resultados obtenidos mediante la búsqueda.

Para la búsqueda se utiliza `filter()` junto con `includes()`. La comparación se realiza utilizando texto en minúsculas para evitar diferencias entre mayúsculas y minúsculas.

También se incorporó un mensaje de carga y un manejo de errores para entregar información al usuario y facilitar el proceso de debugging durante el desarrollo.

---

## Mejoras futuras

* Ordenamiento por precio, stock u otras columnas.
* Paginación para manejar una mayor cantidad de productos.
* Mejor adaptación de la tabla a dispositivos móviles.
* Filtros adicionales por categoría o rango de precio.
* Mayor personalización visual de la interfaz.

---

## API utilizada

DummyJSON - Products

```text
https://dummyjson.com/products?limit=100
```

---

## Autor

Proyecto desarrollado como parte de una prueba técnica.
