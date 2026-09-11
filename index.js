//una veterinaria necesita desarrollar un sistema para la atencion de mascotas
//animal, propietario, atencion
class Animal{
    nombre
    raza 
    especie
    edad
constructor (nombre,raza, especie,edad){
    this.nombre=nombre
     this.raza=raza
      this.especie=especie
       this.edad=edad
}
registrarNombre(nuevonombre){
     this.nombre=nuevonombre
}
registrarRaza(nuevaRaza){
    this.raza=nuevaRaza
}
registrarEspecie(nuevaEspecie){
    this.especie=nuevaEspecie
}
registrarEdad(nuevaEdad){
    this.edad=nuevaEdad
}
mostrarInformacion(){
    console.log(this.nombre+this.raza)
}
}
class propietario{
    nombrePropietario
    direccion
    telefono
    constructor(nombre,direccion,telefono){
    this.nombrePropietario=nombre
     this.direccion=direccion
      this.telefono=telefono
       this.mascota=[]
    }
    registrarNombre(nuevoNombre){
        this.nombrePropietario=nuevoNombre
    }
    registrarDireccion(nuevaDireccion){
        this.direccion=nuevaDireccion
    }
    registrarTelefono(nuevoTelefono){
        this.telefono=nuevoTelefono
}
registrarMascota(nuevamascota){
    //pop,unshift, shift push
    this.mascota.push(nuevamascota)
}
mostrarInformacion(){
    console.log("mascota"+this.mascota[0].nombre+"propietario"+this.nombrePropietario)
}
}
let colmillo=new Animal("colmillo","pitbull","perro",12)
colmillo.mostrarInformacion()
let alexa=new propietario("alexa","123","1111")
alexa.registrarMascota(colmillo)
alexa.mostrarInformacion()
