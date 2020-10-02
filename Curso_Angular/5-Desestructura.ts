( () => {
    //Objeto
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Super Soldado'
    }

    //Desestructuracion de objetos.
    //Ya no se antepone el nombre del objeto para la llamada
    //de sus propiedades.
    const {nombre, clave, poder} = avenger;

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    //Arreglo
    const avengers: string[] = ['Thor', 'Ironman', 'Antman'];

    //Desestructuracion de arreglos.
    //Ya no se hacen las llamadas como avengers[0], avengers[1], ...
    //ahora solo se ponen los nombre que asignemos a los indices.
    const [cero, uno, dos] = avengers;

    console.log(cero);
    console.log(uno);
    console.log(dos);
})();