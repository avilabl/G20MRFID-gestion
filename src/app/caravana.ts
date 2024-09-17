import { dia } from '../app/dia'

export class caravana{
    animales: number;
    dias:dia[]=[];
    estacion: number;
    checked: boolean;

        constructor(animal:number,est: number,check: boolean){
            
            this.dias.length=1;
            this.animales = animal;
            this.estacion = est;
            this.checked = check;
        }
}