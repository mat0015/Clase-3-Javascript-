let numero = parseInt(prompt("Ingrese un numero"));

    for(let i = 1; i<6; i++) 
    {
        console.log(`El numero ingresado es el ${numero} sumando uno por ciclo es ${numero+i} `);
    }

let contra = prompt("Ingrese la palabra clave");

    while(contra != "ESC")
    {
        alert("La palabra no es la correcta")
        contra = prompt("Ingrese la palabra clave");
    }
    alert("La palabra es correcta")

let cantidad = parseInt(prompt("Ingrese la cantidad de veces que se mostrara la palabra HOLA"));
for (let i = 0; i < cantidad; i++) 
{
    document.write(`HOLA <br/>`)
}