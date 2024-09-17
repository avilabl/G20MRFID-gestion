import { DatePipe, Time } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Data } from '@angular/router';
import { isDate, LongDateFormatKey } from 'moment';
import { timer, windowTime } from 'rxjs';
import { dieta,dia,caravana } from 'src/app/models';
//import { UsuariosService } from 'src/app/modules/shared/services/UsuariosService';
//import { UtilService } from 'src/app/modules/shared/services/util.service';

declare var require: any;

@Component({
  selector: 'app-gestion-animal',
  templateUrl: './gestion-animal.component.html',
  styleUrls: ['./gestion-animal.component.css']
})

export class GestionAnimalComponent implements OnInit{

  //isAdmin:any;
  //private usuariosService = inject(UsuariosService);
  cantDosis=0;
  valor:number=0;
  dosis:number[]=[0,0,0,0,0];
  dosiss=0;
  dosisAux:number[]=[0,0,0,0,0];
  inicioCiclo: Date;
  finCiclo:Date;
  minFecha:number;
  finCicloAUX:string = '';
  fechaAUX: number =0;
  diaDieta:number[]=[1];
  inputDiaDieta=true;
  setEstacion: number=0;
  dietaAUX:dieta[]=[]
  diasAUX:dia[]=[{dietaDiaria:[],inicioDia:1}];
  dietas:dieta[]=[];
  pesoAUX:number=0;
  caravanaAUX:caravana={animales:0,dias:[],estacion:0,checked:false};
  validarCheck:number=0;
  validar:boolean[]=[false, // 0 - flag validacion num. de estacion        
                    false,  // 1 - flag validacion fecha de inicializacion 
                    false,  // 2 - flag validacion check animales          
                    false,  // 3 - flag validacion inicio dieta
                    false,  // 4 - flag validacion cantidad de dosis
                    false,  // 5 - flag validacion peso dosis
                    false,  // 6 - flag validacion horario dosis
                    false ];
 caravanas:caravana[]
 mostrarCaravana:caravana[]=[{animales:0,dias:[{dietaDiaria:[{peso:0,horario:0}],inicioDia:1}],estacion:5,checked:false}]



  constructor(/*private util:UtilService*/){
    
    this.caravanas = JSON.parse(localStorage.getItem("caravana")!);
    this.mostrarCaravana.splice(0,1); 
    this.inicioCiclo= new Date();
    this.finCiclo=new Date;
    this.minFecha=0;
        
  }
  
  ngOnInit(): void {
   // this.getUsuarios();
    //console.log(this.util.getRoles());
    //this.isAdmin = this.util.isAdmin();
  }

  getUsuarios(): void {

   /* this.usuariosService.loadAllUsuarios()
        .subscribe( (data:any) => {
          console.log("repuesta correta",data);
        },(error:any)=>{
          console.log("error:",error);
        })
      */}

  arrayMostrar(){
    this.mostrarCaravana.splice(0,this.mostrarCaravana.length);
    /* if(this.setEstacion>0 && this.setEstacion<4){  
      for(let j=0;j<this.caravanas.length;j++){
        if(this.caravanas[j].estacion==this.setEstacion){ 
          this.mostrarCaravana.push(this.caravanas[j]);
        }
      }
    } */
    if(this.setEstacion>0){
      for(let j=0;j<this.caravanas.length;j++){ 
          this.mostrarCaravana.push(this.caravanas[j]);  
      }
    }
  }

  cambioCheck(check:boolean,i:number){

    if(check){
      this.caravanas[i].checked=false;
      this.validarCheck=0;
      for(let l=0 ; l<this.caravanas.length ; l++){
        if(this.caravanas[l].checked){
          this.validarCheck++;
        }
        if(this.validarCheck!=0){
          this.validar[2]=false;
        }else{
          this.validar[2]=true;
        }
      }
    }else{
      this.caravanas[i].checked=true;
      this.validarCheck=1;
      this.validar[2]=false;
    }
  }

  dietaDefault(){
    
    this.diasAUX.push({dietaDiaria:[],inicioDia:30});
    this.diasAUX.push({dietaDiaria:[],inicioDia:60});
    this.diasAUX.push({dietaDiaria:[],inicioDia:90});
    this.diasAUX[0].dietaDiaria.push({peso:0.5,horario:8})
    this.diasAUX[0].dietaDiaria.push({peso:0.5,horario:18})
    this.diasAUX[1].dietaDiaria.push({peso:1,horario:8})
    this.diasAUX[1].dietaDiaria.push({peso:1,horario:18})
    this.diasAUX[2].dietaDiaria.push({peso:1.5,horario:8})
    this.diasAUX[2].dietaDiaria.push({peso:1.5,horario:18})
    this.diasAUX[3].dietaDiaria.push({peso:1,horario:8})
    this.diasAUX[3].dietaDiaria.push({peso:0.5,horario:18})
  }

  todos(){

    for(let i=0; i < this.caravanas.length; i++){
      this.caravanas[i].checked=true;
    }
    this.validarCheck=1;
    this.validar[2]=false;
  }

  ninguno(){

    for(let i=0; i < this.caravanas.length; i++){
      this.caravanas[i].checked=false;
    }
    this.validarCheck=0;
    this.validar[2]=true;
  }

  largoArrayDiaDieta(element:number){

    this.diasAUX.push({dietaDiaria:[],inicioDia:this.diasAUX[element].inicioDia + 1});
    this.inputDiaDieta=false;
  }

  restaArrayDiaDieta(nn:number){

    if(this.diasAUX.length>1){
      this.diasAUX.splice(nn,5);
    }
  }

  cambioHorario(pos1:number,pos2:number){
      this.valor=(this.diasAUX[pos1].dietaDiaria[pos2-1].horario)
  }

  largoArray(elementos:number,indicador:number){

    if(elementos > this.diasAUX[indicador].dietaDiaria.length){
      for(let m=0 ; m < elementos ; m++){
        if(m >= this.diasAUX[indicador].dietaDiaria.length){
          this.diasAUX[indicador].dietaDiaria.push({peso:0 , horario:0});
        }
      }
    }else{
      this.diasAUX[indicador].dietaDiaria.splice(elementos,5);
    } 
  }

  actualizarDia(dia:number,indice:number){

  }

  array(jj:number , ii:number){

    this.diasAUX[jj].dietaDiaria.push;       
  }

  validarDatos(){
    
    if((this.setEstacion<1)||(this.setEstacion>3)){
      this.validar[0]=true;
    }else{
      this.validar[0]=false;
    }
    this.validarCheck=0;
    for(let kk=0 ; kk<this.caravanas.length ; kk++){
      if(this.caravanas[kk].checked){
        this.validarCheck++;
      }
    }
   
    if(this.validarCheck>0){
      this.validar[2]=false;
    }else{
      this.validar[2]=true;
    }
    this.validarCheck=0;
    for(let z=0 ; z<this.diasAUX.length-1 ; z++){
      if(this.diasAUX[z].inicioDia < this.diasAUX[z+1].inicioDia){
        this.validar[3]=false;
      }else{
        this.validar[3]=true;
        break;
      }
    }

    for(let n=0 ; n<this.diasAUX.length ; n++){
      if(this.diasAUX[n].dietaDiaria.length > 0){
        this.validar[4]=false;
      }else{
        this.validar[4]=true;
        break;
      }
    }

    for(let zz=0 ; zz<this.diasAUX.length ; zz++){
      for(let nn=0 ; nn<this.diasAUX[zz].dietaDiaria.length ; nn++){
        if(this.diasAUX[zz].dietaDiaria[nn].peso > 0){
          this.validar[5]=false;
        }else{
          this.validar[5]=true;
          break;
        }
      }
      if(this.validar[5]){
        break;
      }
    }

    for(let q=0 ; q<this.diasAUX.length ; q++){
      for(let t=0 ; t<this.diasAUX[q].dietaDiaria.length-1 ; t++){
        if(this.diasAUX[q].dietaDiaria[t].horario < this.diasAUX[q].dietaDiaria[t+1].horario){    
          this.validar[6]=false;
        }else{
          this.validar[6]=true;
          break;
        }
      }
      if(this.validar[6]){
        break;
      }
    }
    
    if (!(this.validar[0]||this.validar[1]||this.validar[2]||this.validar[3]||this.validar[4]||this.validar[5]||this.validar[6])){
      this.guardarDatos();
    }
  }

  diaFinal(fecha: Date){

    this.minFecha=Date.now();
    this.finCicloAUX=fecha.toString();
    this.fechaAUX = (Date.parse(this.finCicloAUX)) + (86400000*114);
    if(this.fechaAUX<this.minFecha){
      this.validar[1]=true;
      this.minFecha=(this.minFecha) - (86400000*113) 
      this.finCiclo=new Date(this.fechaAUX);
    }else{
      this.validar[1]=false;
      this.finCiclo=new Date(this.fechaAUX);
    }
  }

  guardarDatos(){
    for (let i=0; i < this.caravanas.length; i++) {
      if(this.mostrarCaravana[i].checked){
        for (let j=0; j < this.caravanas.length; j++) {
          if(this.mostrarCaravana[i].animales==this.caravanas[j].animales){
            this.caravanas[j]=this.mostrarCaravana[i];
          }
          
        }
      } 
    }
    localStorage.removeItem('caravana');
    localStorage.setItem('caravana', JSON.stringify(this.caravanas));

  }


  verDatos(){
    console.log(this.caravanas)

  }

}

