import { Time } from "@angular/common";

export class dieta{
    
    peso: number;
    horario: number;

        constructor(pes: number, hor: number){
        
            this.peso = pes;
            this.horario = hor;

        }

}

/* export class dietaDiaria{

    cantDosis: dieta[]=[];
    
        constructor(cDosi:dieta[]){

            this.cantDosis=cDosi;

        }
    
} */

export class dia{

    dietaDiaria: dieta[]=[];
    inicioDia: number;

        constructor(diDia: dieta[], iniDay: number){
        
            this.dietaDiaria = diDia;
            this.inicioDia = iniDay;

        }

}

export class caravana{
    
    animales: number;
    dias:dia[]=[];
    estacion: number;
    checked: boolean;

        constructor(animal:number,day: [],est: number,check: boolean){
            
            this.animales = animal;
            this.dias=day;
            this.estacion = est;
            this.checked = check;
        }
        
}

export class usuarios{
    
    id:number;
    usuario: string;
    contrasenia:string
    nombre:string;
    apellido: string;
    nombreGranja: string;
    localidad: string;
    telefono: string;
    eMail: string;

        constructor(Id:number,Usuario: string,Contrasenia:string,Nombre:string,Apellido: string,NombreGranja: string,
            Localidad: string,Telefono: string,Email: string){
            
            this.id = Id;
            this.usuario=Usuario;
            this.contrasenia = Contrasenia;
            this.nombre = Nombre;
            this.apellido = Apellido;
            this.nombreGranja = NombreGranja;
            this.localidad = Localidad;
            this.telefono = Telefono;
            this.eMail = Email;
        }
    }