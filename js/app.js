console.log("JS funcionando");

const productTable = document.querySelector("tbody")

const searchInput = document.querySelector("#search-input")
// Obtener todos los items desde el fetch
fetch("https://dummyjson.com/products?limit=100")
    .then(response =>{
        return response.json();
    })
    .then(data => {
        data.products.forEach(product => {


            console.log(product);
            //Crear filas y columnas
            const row = document.createElement("tr");

            const titleCell = document.createElement("td");
            titleCell.textContent = product.title;

            const categoryCell = document.createElement("td");
            categoryCell.textContent = product.category;

            const priceCell = document.createElement("td");
            priceCell.textContent = product.price;

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
    })
