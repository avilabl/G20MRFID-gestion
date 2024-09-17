import { dieta } from '../app/dieta'

export class dietaDiaria{
    cantDosis: dieta[]=[];
    

    constructor(){}
        
        añadirCantDosis(cantDosis: dieta){
        this.cantDosis.push(cantDosis);
    }
}