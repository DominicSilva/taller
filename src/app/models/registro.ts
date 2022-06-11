export class Registro{
  _id?: string;
  correo: string;
  nombre: string;
  edad: number;

  constructor(correo:string, nombre:string,edad:number){
      this.correo = correo
      this.nombre = nombre
      this.edad = edad
  }
}
