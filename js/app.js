console.log("JS funcionando");

const productTable = document.querySelector("tbody")

const searchInput = document.querySelector("#search-input")

const statusMessage = document.querySelector("#status-message")

let products = [];

statusMessage.textContent = "Cargando los productos...";

// Funciones

//Rederizar productos en la tabla
function renderProducts(products) {
    products.forEach(product => {

            //Crear filas y columnas
            const row = document.createElement("tr");

            const titleCell = document.createElement("td");
            titleCell.textContent = product.title;

            const categoryCell = document.createElement("td");
            categoryCell.textContent = product.category;

            const priceCell = document.createElement("td");
            priceCell.textContent = new Intl.NumberFormat("es-CL",{
                style: "currency",
                currency: "CLP"
            }).format(product.price);

            const stockCell = document.createElement("td");
            stockCell.textContent = product.stock;

            const imageCell = document.createElement("td");
            const image = document.createElement("img");

            image.src = product.thumbnail;
            imageCell.appendChild(image);

            row.appendChild(imageCell);
            row.appendChild(titleCell);
            row.appendChild(categoryCell);
            row.appendChild(priceCell);
            row.appendChild(stockCell)
            productTable.appendChild(row); 
    });
}

searchInput.addEventListener("input", (event) => {
   
    const searchTerm = event.target.value.toLowerCase();

    const filteredProducts = products.filter(product =>
         product.title.toLowerCase().includes(searchTerm));

    productTable.innerHTML = "";
    renderProducts(filteredProducts);
});


// Obtener todos los items desde el fetch
fetch("https://dummyjson.com/products?limit=100")
    .then(response =>{
        return response.json();
    })
    .then(data => {
        products = data.products;

        renderProducts(products);

        statusMessage.textContent = "";
    })
    .catch(error =>{
        statusMessage.textContent = "No se pudo cargar los datos...";
        console.log(error);
    })

