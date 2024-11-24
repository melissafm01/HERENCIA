function Vehiculo(marca) {
    this.marca = marca;
  }
 
  Vehiculo.prototype.arrancar = function () {
    console.log("El vehiculo ha arrancado");
  };
  
  
  
  function Coche(marca, modelo) {
      Vehiculo.call(this,marca); 
      this.modelo = modelo; 
    }
  
   
  Coche.prototype = Object.create(Vehiculo.prototype); 
  
 
  Coche.prototype.constructor = Coche;  
  
  

  Coche.prototype.mostrarInfo = function() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    };
  
  
  const miCoche = new Coche('Toyota', 'Corolla');
  
  
  miCoche.arrancar();     
  miCoche.mostrarInfo();