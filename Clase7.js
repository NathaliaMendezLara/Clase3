//Proyecto integrador - Catalogo web - registro de usuarios

// Datos
let nombre = prompt("Hola, ingresa tu nombre:");
alert("Bienvenid@, " + nombre + " "+ "por favor indicanos lo que vas a llevar");

//Menu

const productos = [
    {
        id:1,
        nombre:"Fresas ",
        precio:3,
    },
    {
        id:2,
        nombre:"Gusanito acido",
        precio:1,

    },
    {
        id:3,
        nombre:"Bananitas ",
        precio:2,

    },
    {
        id:4,
        nombre:"Malvadisco ",
        precio:4,

    }

  ]
  
  console.log(productos);

  for(let i = 0;i<productos.length;i++)
  {
      console.log(productos[i]);
  }

  console.log("Recorrer con OF")
  for(let producto of productos)
  {
      console.log(producto.nombre);
  }