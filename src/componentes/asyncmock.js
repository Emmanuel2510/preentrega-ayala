const productos = [
    { nombre: "Pulsera", precio: 2000, id: "1", img: "../src/assets/pulsera.png", idCat: "2" },
    { nombre: "collar", precio: 1500, id: "2", img: "../src/assets/collar.png", idCat: "2"},
    { nombre: "reloj", precio: 3000, id: "3", img: "../src/assets/descarg.png", idCat: "3" },
    { nombre: "anillo", precio: 1000, id: "4", img: "../src/assets/anillo.png", idCat: "3" }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(productos);
        }, 2000)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}