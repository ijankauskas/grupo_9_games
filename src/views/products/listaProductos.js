let listaProductos=[
    {
        id: 1,
        nombre: 'World of Warcraft',
        imagenLogo: '/imagenes/world-of-warcraft.jpg',
        compatibilidad: '<i class="fa-solid fa-desktop"></i>',
        precio: '$5.000',
        descuento: '40%',
    },
    {
        id: 2,
        nombre: 'Gran Turismo',
        imagenLogo: '/imagenes/gran-turismo.jpg',
        compatibilidad: '<i class="fa-solid fa-desktop"></i><i class="fa-brands fa-playstation"><i class="fa-brands fa-xbox"></i>',
        precio: '$12.400',
        descuento: '20%',
    },
    {
        id: 3,
        nombre: 'Stardew Valley',
        imagenLogo: '/imagenes/stardew-valley.jpg',
        compatibilidad: '<i class="fa-solid fa-desktop"></i><i class="fa-brands fa-playstation"><i class="fa-brands fa-xbox"></i><i class="fa-brands fa-apple"></i><i class="fa-brands fa-android"></i>',
        precio: '$3.750',
        descuento: '67%',
    }
]

module.exports = listaProductos;