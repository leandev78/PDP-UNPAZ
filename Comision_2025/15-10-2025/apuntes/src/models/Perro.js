const Animal = require('./Animal');

class Perro extends Animal {
    hablar() { return "Guau!" } // sobreescribo.
}
module.exports = Perro;