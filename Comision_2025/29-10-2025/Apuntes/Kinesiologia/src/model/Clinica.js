class Clinica {
    
    constructor(){
        this.pacientes = [];
    }

    agregarPaciente(paciente){
        this.pacientes.push(paciente);
    }
    
}
module.exports = Clinica;