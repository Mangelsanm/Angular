(function(){
    //Definicion de una funcion, lo unico diference es que
    //se asigna la funcion a una variable.
    const miFuncion = function( a: string ) {
        return a.toUpperCase();
    }

    //Definicion de una funcion usando la flecha
    //(util cuando la funcion solo realiza una operacion)
    const miFuncionF = ( a: string ) => a.toUpperCase();

    //Suma de dos numeros con funcion normal
    const sumarN = function( a: number, b: number) {
        return a + b;
    }

    //Suma de dos numeros con funcion flecha
    const sumarF = ( a: number, b: number) => a + b;

    //Ejercicio para demostrar que la funcion de flecha no modifica a lo que apunta this.
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout( () => {
                console.log(`${ this.nombre } smash!!!`);
            }, 1000);
        }
    }

    //Llamadas a las funciones
    console.log(miFuncion('Normal'));
    console.log(miFuncionF('Flecha'));
    console.log(sumarN(8, 8));
    console.log(sumarF(9, 6));
    hulk.smash();
})();