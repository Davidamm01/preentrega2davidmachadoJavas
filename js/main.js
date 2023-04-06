alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-Sushi $4500 2-Pollo $1800 3-Chaufa $3200 4-CocaCola $1500 "))
let seleccionarCantidad;
let total = 0;
let carrito = []


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Sushi, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 4500)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Pollo, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1800)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Chaufa, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 3200)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es CocaCola, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 1500)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-Sushi $4500 2-Pollo $1800 3-Chaufa $3200 4-CocaCola $1500 "))
}
alert("el total de la compra es de: " + total)


const envio = () => {
  if (total >= 10000) {
    alert("El envio es gratuito")
  }else{
    total += 1000
    alert("el costo de envio es de 1000, el total es: " + total)
  }
}

envio()

//Pago
const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 500
    alert("tenes un descuento de 500, el total es:" + total)
  }


}

metodoDePago()

carrito.push({seleccionarProductos, cantidad , total})
console.log(carrito)

Seleccion = prompt ("desea seguir comprando?")
while(seleccion === "no") {
  alert("Hasta luego, vuelve pronto")
  carrito.forEach ((carritoFinal) => {
    console.log("seleccionarProductos: ${carritoFinal.producto}, cantidad: ${carritoFinal.cantidad}, total ${carritoFinal.seleccionarProductos * carritoFinal.cantidad}") 

  } )
  const total = carrito.reduce ((acc,el) => acc + el.cant * el.precio, 0 )
  console.log("el total a pagar por su compra es: ${total}")
  
}
  



