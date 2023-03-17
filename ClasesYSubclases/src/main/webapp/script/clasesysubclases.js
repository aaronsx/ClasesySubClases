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
let poli =new Poligono(100,200);
console.log(poli.nombre());
document.write("Anchura: "+poli.ancho+"Altura: "+poli.altura);
class Cuadrado extends Poligono 
{
   constructor(lado){
          super(lado, lado);
           this.nombre = "Cuadrado";
}
		calculaArea()
		{
			return this.altura*this.ancho;
	    }
}

function claseCuadrado(){
	var cuadrado = new Cuadrado(4);
	document.write("El aria es: "+cuadrado.calculaArea());
}   

     