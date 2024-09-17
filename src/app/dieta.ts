import { Time } from "@angular/common";

export class dieta{
    peso: number;
    horario: Time; 

        constructor(pes: number, hor: Time){
        
            this.peso = pes;
            this.horario = hor;
        }
}

