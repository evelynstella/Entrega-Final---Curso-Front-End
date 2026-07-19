// -- Array con cada producto 
const juegos = [
    { id: 1, nombre: 'Life Is Strange 2 | PS4', precio: 35720, imagen: '../img/juegos/Life Is Strange 2.jpg' },
    { id: 2, nombre: 'Hollow Knight: Voidheart Edition | PS4', precio: 15220, imagen: '../img/juegos/HOLLOW KNIGHT VOIDHEART EDITION.jpg' },
    { id: 3, nombre: 'Hogwarts Legacy | PS4', precio: 40000, imagen: '../img/juegos/Hogwarts Legacy .jpg' },
    { id: 4, nombre: 'The Sims 4 | PS4', precio: 20000, imagen: '../img/juegos/The Sims 4 ps4.jpg' },
    { id: 5, nombre: 'Red Dead Redemption 2 | PS4', precio: 60990, imagen: '../img/juegos/Red Dead Redemption 2 ps4.jpg' },
    { id: 6, nombre: 'Resident Evil Biohazard | PS4', precio: 30520, imagen: '../img/juegos/Resident evil VII_ biohazard_.webp' },
    { id: 7, nombre: 'Elden Ring | PS4', precio: 55277.90, imagen: '../img/juegos/Elden Ring.jpg' },
    { id: 8, nombre: 'Rise Of The Tomb Raider | PS4', precio: 75720, imagen: '../img/juegos/rise of the tomb raider.jpg.jpg' },

    { id: 9, nombre: 'Horizon Forbidden West | PS5', precio: 59999, imagen: '../img/juegos/Horizon Forbidden West Standard Edition.jpg' },
    { id: 10, nombre: 'Resident Evil Requiem | PS5', precio: 80000, imagen: '../img/juegos/Resident Evil Requiem.jpg' },
    { id: 11, nombre: 'The Last Of Us | PS5', precio: 76890, imagen: '../img/juegos/the las of us remake.jpg' },
    { id: 12, nombre: 'Minecraft | PS5', precio: 22300, imagen: '../img/juegos/Minecraft - PS5.jpg' },
    { id: 13, nombre: 'Silent Hill 2 | PS5', precio: 82420, imagen: '../img/juegos/silent hill 2.jpg' },
    { id: 14, nombre: 'Death Stranding 2 | PS5', precio: 75000, imagen: '../img/juegos/Death Stranding 2.jpg' },
    { id: 15, nombre: 'Demon Slayer | PS5', precio: 92000, imagen: '../img/juegos/Demon Slayer.webp' },
    { id: 16, nombre: 'The Witcher Wild Hunt | PS5', precio: 28533, imagen: '../img/juegos/The Witcher wild hunt.jpg' },

    { id: 17, nombre: 'Bratz | NS', precio: 57000, imagen: '../img/juegos/Bratz.jpg' },
    { id: 18, nombre: 'Five Nights At Freddy´s Into The Pitt | NS', precio: 25000, imagen: '../img/juegos/Five nights at Freddy\'s _ into the pit.jpg' },
    { id: 19, nombre: 'Five Nights At Freddy´s Core Collection | NS', precio: 65000, imagen: '../img/juegos/fnaf core collection.jpg' },
    { id: 20, nombre: 'Hello Kitty Island Adventure | NS', precio: 65400, imagen: '../img/juegos/hello kitty island adventure.jpg' },
    { id: 21, nombre: 'Mario Kart 8 Deluxe | NS', precio: 77000, imagen: '../img/juegos/Mario Kart 8 Deluxe  (1).jpg' },
    { id: 22, nombre: 'Hollow Knight: Silk Edition | NS', precio: 28000, imagen: '../img/juegos/Hollow Knight Silk Song (2).jpg' },
    { id: 23, nombre: 'Undertale | NS', precio: 34920, imagen: '../img/juegos/Undertale.webp' },
    { id: 24, nombre: 'Tomodachi Life | NS', precio: 85720, imagen: '../img/juegos/tomodachi life.jpg' }
];


const botones = document.querySelectorAll(".carrito");

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        agregarAlCarrito(juegos[index]);
    });
});


function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    const indiceExistente = carrito.findIndex(item => item.id === producto.id);

    if (indiceExistente !== -1) {
        carrito[indiceExistente].cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            title: producto.nombre,
            price: producto.precio,
            image: producto.imagen,
            cantidad: 1
        });
    }

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito!`);
}
