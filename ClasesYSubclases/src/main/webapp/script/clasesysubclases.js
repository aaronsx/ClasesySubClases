class Poligono
{
	constructor(altura, ancho) {
    this.altura = altura;
    this.ancho = ancho;
    this.nombre = "Poligono";
  }
  get nombre(){
          return this.nombre;
     }
}

class Cuadrado extends Poligono 
{
   constructor(lado){
          super();
          this.lado=lado;
           this.nombre = "Poligono";
}
		calculaArea()
		{
		return this.lado*this.lado;
	    }
}

function claseCuadrado(){
	var cuadrado = new Cuadrado(4);
document.write(cuadrado.calculaArea());
}   

     