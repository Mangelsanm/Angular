(function(){
    function activar(nombre: string,                //Parametro obligatorio
                     momento?: string,              //Parametro opcional
                     objeto: string ='batiseñal'){  //Parametro por defecto
                        if(momento) {
                            console.log(`${ nombre } activo la ${ objeto } por la ${ momento }`);
                        }
                        else {
                            console.log(`${ nombre } activo la ${ objeto }`);
                        }
                     }
    activar('Gordon')
})();