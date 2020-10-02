( () => {
    const retirarDinero = (montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;

        return new Promise( (resolve, reject) => {
            if(montoRetirar > dineroActual) {
                reject('Fondos Insuficientes');
            }
            else {
                resolve(dineroActual -= montoRetirar);
            }
        });
    }

    retirarDinero(1200)
                        .then(montoActual => console.log(`Le restan ${montoActual} en su cuenta`))
                        .catch(err => console.warn(err))
})();