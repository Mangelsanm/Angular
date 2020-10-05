( () => {
    //Programa para definir el tipo de valor de retorno de una funcion
    const sumar = ( a: number, b: number): number => a + b;

    const nombre = (): string => 'Hola Miguel';

    //En ocasiones la funcion no puede inferir el tipo de valor de retorno,
    //en estos casos es necesario especificarlo de manera explicita.
    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Miguel');
        });
    }

    obtenerSalario().then( a => console.log( a ));
})();