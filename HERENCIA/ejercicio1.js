class Animal {
    constructor (nombre, edad){         
        this.nombre=nombre;
        this.edad=edad;
    }

    hacerSonido() {
      console.log (` El animal hace un sonido`);
    }
  }


  class Perro extends Animal {  
    constructor(nombre, edad, raza) {
      super(nombre, edad); 
      this.raza=raza; // nueva propiedad que se llama raza
    }

    hacerSonido(){
    console.log ('el perro ladra: ¡Guau!');
    } 
  }
  
 
const Animalito = new Animal("Animal generico", 5);
Animalito.hacerSonido();  // Imprime: "El animal hace un sonido."


const Perrito = new Perro("Firulais", 3);
Perrito.hacerSonido();  // Imprime: "El perro ladra: ¡Guau!"

