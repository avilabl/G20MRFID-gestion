import { dietaDiaria } from '../app/dietaDiaria'

export class dia{
    diario: dietaDiaria;
    inicioDia: number=0;

    constructor(diarios: dietaDiaria){
        
        this.diario = diarios;
    }
}