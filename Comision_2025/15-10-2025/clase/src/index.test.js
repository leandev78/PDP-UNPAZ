const {Persona} = require("./personas")


describe("Testeos",()=>{

    test("Testeo si la persona es mayor de edad luego de cumplir 18 años",()=>{
        const p4 = new Persona("Juana",17);
        p4.cumplirAnios();
        expect(p4.sosMayor()).toBe(true)
    })
})