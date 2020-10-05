( () => {
    // Creando interfaz entre la llamda a funcion y el tipo de
    // parametro que acepta nuestra funcion.
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = ( xmen: Xmen ) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision( wolverine );
})();