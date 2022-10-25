//Pin acceso
let PIN = "1234";
let USUARIO = "franco";

function login() {
// Declaramos la variable ingresar como "false" para cancelar el ingreso
    let ingresar = false;
// Le damos 2 intentos al usuario, comenzando desde 0, en cuanta regresiva reduciendo de a -1 iniciando en 3
    for (let i = 2; i >= 0; i--) {
        let userUSUARIO = prompt("Ingresa tu usuario");
        let userPIN = prompt("Ingresa tu clave");
    if (userPIN === PIN && userUSUARIO === USUARIO) {
        alert("Bienvenido/a Ingreso exitoso");
        ingresar = true;
        break;
    } else {
        alert("Error te quedan " + i + " intentos");
    }
}
    return ingresar;
}

// function validacionCalidad(stock,devolucion) { verificar!
//     // let controlCalidad;

//     // if (!confirm("¿Todas las unidades pasaron el control de calidad?")) {
//     //     controlCalidad =parseInt(prompt("¿Cuantas unidades pasaron el control de calidad?"));
//     //         stock = stock + controlCalidad;
        
//     // } else {
//     //     stock = stock + devolucion;
        
//     // }
//     // alert("Mercaderia ingresada con exito, tu nuevo stock es de " + stock);
// }





let logueo = login();
console.log(logueo);

if (logueo) {
let stock = 0;

let opcion = prompt(
    "Elegí una opción: \n1- Stock Actual \n2 - Ventas (▼ Stock) \n3 - Compras (▲ Stock) \n4 - Devolucion Mercaderia (▲ Stock) \n Presioná ESC para cerrar sesion."
);

while (opcion != "ESC" && opcion != "esc") {
    switch (opcion) {
    case "1":
        alert("Tu stock actual es " + stock);
        break;
    case "2":
        let ventas = parseInt(prompt("Ingresa las unidades vendidas"));
        // si las ventas ej 2 es menor al stock actual ej 1 entonces "stock insuficente, realiza una orden de compra" - si ventas es 1 y stock es 1 vendiste 1 unidad tu stock 
        if (ventas <= stock && ventas>0) {
        stock = stock - ventas;
        alert("Vendiste " + ventas + "unidades, tu stock actual es  " + stock);
        } else {
        alert("No puede realizar la operacion");
        }
        break;

    case "3":
        let compras = parseInt(prompt("Igresa las unidades compradas"));
        stock = stock + compras;
        alert("Mercaderia ingresada con exito, tu nuevo stock es de " + stock);
        break;

        case "4":
            let devolucion = parseInt(prompt("Ingresa las unidades devueltas"));
            let controlCalidad;
            if (!confirm("¿Todas pasaron el control?")) {
                controlCalidad = parseInt(
                    prompt("¿Cuántas pasaron el control de calidad?"),
                );
                while (controlCalidad > devolucion) {
                    alert("Operacion invalida, verifica las unidades ingresadas nuevamente.");
                    controlCalidad = parseInt(
                        prompt("¿Cuántas pasaron el control de calidad?"),
                    );
                }
                stock = stock + controlCalidad;
            } else {
                stock = stock + devolucion;
            }
            alert("Mercaderia ingresada con exito, tu nuevo stock es de " + stock);
            break;

    // case "5": verificar!
    //     let devolucion = parseInt(prompt("Ingresa las unidades devueltas"));
    //     validacionCalidad(stock,devolucion);
    //     break;


    default:
        alert("Opción no válida");
        break;
    }
    opcion = prompt(
    "¿Quieres registrar otra operacion? \n Elegí una opción: \n1- Stock Actual \n2 - Ventas (▼ Stock) \n3 - Compras (▲ Stock) \n4 - Devolucion Mercaderia (▲ Stock) \nPresioná ESC para cerrar sesion."
    );
}
} else {
alert("Bloqueamos preventivamente tu cuenta, comunicate con el administrador");
}

alert("Cerraste sesion con exito");
