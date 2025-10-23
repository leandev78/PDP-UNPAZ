const { Guerrero, Trabajador } = require("../model/Personaje")
const { Jabalina, Ballesta } = require("../model/Arma");

describe("Test Juego de gerra...", ()=>{

    test('Una Jabalina nueva está cargada y luego de usarla deja de estarlo', () => {
    
    const arma = new Jabalina();

    // compruebo si el estado inicial es true
    expect(arma.estaCargada()).toBe(true);

    // la uso
    arma.usar();

    // compruebo si luego de usarla ya deja de estar cargada
    expect(arma.estaCargada()).toBe(false);
    });

    test("Testear si luego que un Gerrero usar 4 veces la Ballesta esta sigue cargada", ()=>{
        const arma = new Ballesta();
        const gerrero = new Guerrero(arma);
        gerrero.arma.usar();
        gerrero.arma.usar();
        gerrero.arma.usar();
        gerrero.arma.usar();
        expect(gerrero.arma.estaCargada()).toBe(true);
    })

    test("Tras agotar la jabalina, cambiar a ballesta permite volver a atacar", () => {
        
        const jabalina = new Jabalina();
        const ballesta = new Ballesta();
        
        // Guerrero con jabalina solo puede atacar una vez
        const floki = new Guerrero(jabalina);
        expect(floki.puedoAtacar()).toBe(true);
        floki.atacar();
        expect(floki.puedoAtacar()).toBe(false);
        
        // Tras agotar la jabalina, cambiar a ballesta permite volver a atacar
        floki.cambiarDeArma(ballesta);
        expect(floki.puedoAtacar()).toBe(true);
    });


    // test("", ()=>{
        
    // });

})