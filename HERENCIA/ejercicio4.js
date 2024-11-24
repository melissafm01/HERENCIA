class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
    obtenerDetalles() {
      return `Nombre: ${this.nombre}, salario:${this.salario}`;
    }
  }
  
  class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
      super(nombre, salario);
      this.departamento = departamento;
    }
  
    obtenerDetalles() {
      return `Nombre: ${this.nombre}, salario:${this.salario}, departamento: ${this.departamento}`;
    }
  }
  
  //instancias
  
  const Empleado1 = new Empleado("pablito", 60000);
  const Gerente1 = new Gerente("ramona", 84000, "valle del cauca");
  
  console.log(Empleado1.obtenerDetalles());
  console.log(Gerente1.obtenerDetalles());
  