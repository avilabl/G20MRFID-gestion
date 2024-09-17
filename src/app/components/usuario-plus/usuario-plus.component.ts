import { Component, OnInit, inject, } from '@angular/core';
import { UsuariosService } from 'src/app/modules/shared/services/UsuariosService';
import { usuarios } from 'src/app/models';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-usuario-plus',
  templateUrl: './usuario-plus.component.html',
  styleUrls: ['./usuario-plus.component.css']
})


export class UsuarioPlusComponent implements OnInit {

  private usuariosService = inject(UsuariosService);
  usuarioActualizado=false
  alertaUsuarioExistente=false
  eliminarOK=false
  contactForm!: FormGroup
  newContactForm!: FormGroup
  busqueda!:string ;
  alertaNoEncontrado!:boolean;
  alertaUsuarioRepetido!:boolean;
  alertaBusqueda=false;
  filtro:string="usuario";
  usuarios:any;
  usuariosDB: usuarios[]=[{id:0,usuario:"",contrasenia:"",nombre:"",apellido:"",nombreGranja:"",
  localidad:"",telefono:"",eMail:""}];
  tablaUsuario: usuarios[]=[{id:0,usuario:"",contrasenia:"",nombre:"",apellido:"",nombreGranja:"",
  localidad:"",telefono:"",eMail:""}];
  usuarioIn: usuarios={id:0,usuario:"",contrasenia:"",nombre:"",apellido:"",nombreGranja:"",
  localidad:"",telefono:"",eMail:""};
  listUsuarios:any;
  indice:number=0;

  constructor(private readonly fb: FormBuilder,private readonly ffbb: FormBuilder){
    this.tablaUsuario.splice(0,this.tablaUsuario.length);
  }


  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.newContactForm = this.newInitForm();
    this.getUsuarios();
  }

  onPathValue(): void{
    this.contactForm.patchValue({usuario: this.tablaUsuario[this.indice].usuario}),
    this.contactForm.patchValue({nombre: this.tablaUsuario[this.indice].nombre}),
    this.contactForm.patchValue({apellido: this.tablaUsuario[this.indice].apellido}),
    this.contactForm.patchValue({nombreGranja: this.tablaUsuario[this.indice].nombreGranja}),
    this.contactForm.patchValue({localidad: this.tablaUsuario[this.indice].localidad}),
    this.contactForm.patchValue({telefono: this.tablaUsuario[this.indice].telefono}),
    this.contactForm.patchValue({eMail: this.tablaUsuario[this.indice].eMail})
  }

  onSubmit(): void {
    console.log(this.contactForm.value)
    console.log(this.contactForm.controls['usuario'].value)
    this.alertaUsuarioExistente=false
    if((this.contactForm.controls['usuario'].value)==this.usuariosDB[this.indice].usuario){
        this.editar()
    }else{
      this.alertaUsuarioExistente=true;
      }   
  }

  onSubmit2(): void {
    this.alertaUsuarioExistente=false
    for(let i=0;i<this.usuariosDB.length;i++){
      if((this.newContactForm.controls['usuario'].value)==this.usuariosDB[this.indice].usuario){
        this.alertaUsuarioExistente=true;
      }
    }
      if(!(this.alertaUsuarioExistente)){
        let datos={
          usuario:this.newContactForm.controls['usuario'].value,
          contrasenia: this.newContactForm.controls['contrasenia'].value,
          nombre: this.newContactForm.controls['nombre'].value,
          apellido: this.newContactForm.controls['apellido'].value,
          nombre_granja: this.newContactForm.controls['nombreGranja'].value,
          localidad:this.newContactForm.controls['localidad'].value,
          telefono: this.newContactForm.controls['telefono'].value,
          mail: this.newContactForm.controls['eMail'].value
        }

        this.SaveUsuarios(datos)
      }
    }
  



  initForm(): FormGroup{
    return this.fb.group({
      usuario: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      nombre: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      nombreGranja: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      localidad: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      telefono: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      eMail: ['',[Validators.minLength(3), Validators.maxLength(15), Validators.email]],
    })
  }

  newInitForm(): FormGroup{
    return this.ffbb.group({
      usuario: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      contrasenia: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      nombre: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      nombreGranja: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      localidad: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      telefono: ['',[Validators.minLength(3), Validators.maxLength(15)]],
      eMail: ['',[Validators.minLength(3), Validators.maxLength(15), Validators.email]],
    })
  }

  eliminar(index:number){
    let j
    this.eliminarOK=false
    for(let i=0;i<this.usuariosDB.length;i++){
        if(this.tablaUsuario[index].usuario==this.usuariosDB[i].usuario){
          j=this.usuariosDB[i].id
          console.log(this.usuariosDB[i].id)
          this.eliminarOK=true
        }
    }
    if(this.eliminarOK){
      this.delete(j);
    }
    this.eliminarOK=false
    }
  

  delete(id:any){

    if(this.eliminarOK){
      this.usuariosService.deleteIdUsuarios(id)
      .subscribe(()=>{
        },(error:any)=>{})
    }
  }

  editar(){

    let j=this.tablaUsuario[this.indice].id

    let datos={
      usuario:this.contactForm.controls['usuario'].value,
      contrasenia: this.tablaUsuario[this.indice].contrasenia,
      nombre: this.contactForm.controls['nombre'].value,
      apellido: this.contactForm.controls['apellido'].value,
      nombre_granja: this.contactForm.controls['nombreGranja'].value,
      localidad:this.contactForm.controls['localidad'].value,
      telefono: this.contactForm.controls['telefono'].value,
      mail: this.contactForm.controls['eMail'].value
    }

    this.updateUsuarios(datos,j);

  }

  index(y:number){
    this.indice=y;
    this.onPathValue();
  }

  buscar(){
    if((this.busqueda==null||this.busqueda=='')&&(!(this.filtro=='todos'))){
      this.alertaBusqueda=true;
    }else{
      this.alertaBusqueda=false
      this.getUsuarios();
      if(this.usuariosDB!=null){
      this.tablaUsuario.splice(0,this.tablaUsuario.length);
      switch (this.filtro){
      case "usuario":{
        for(let i=0;i<this.usuariosDB.length;i++){
          if((this.usuariosDB[i].usuario.indexOf(this.busqueda))>= (0)){
            this.tablaUsuario.push(this.usuariosDB[i]);
          }
        }
        break;
      }
      case "nombre":{
        for(let i=0;i<this.usuariosDB.length;i++){
          if((this.usuariosDB[i].nombre.indexOf(this.busqueda))>= (0)){
            this.tablaUsuario.push(this.usuariosDB[i]);
          }
        }
        break;
      }
      case "apellido":{
        for(let i=0;i<this.usuariosDB.length;i++){
          if((this.usuariosDB[i].apellido.indexOf(this.busqueda))>= (0)){
            this.tablaUsuario.push(this.usuariosDB[i]);
          }
        }
        break;
      }
      case "nombreGranja":{
        for(let i=0;i<this.usuariosDB.length;i++){
          if((this.usuariosDB[i].nombreGranja.indexOf(this.busqueda))>= (0)){
            this.tablaUsuario.push(this.usuariosDB[i]);
          }
        }
        break;
      }
      case "telefono":{
        for(let i=0;i<this.usuariosDB.length;i++){
          if((this.usuariosDB[i].telefono.indexOf(this.busqueda))>= (0)){
            this.tablaUsuario.push(this.usuariosDB[i]);
          }
        }
        break;
      }
      case "localidad":{
        for(let i=0;i<this.usuariosDB.length;i++){
          if((this.usuariosDB[i].localidad.indexOf(this.busqueda))>= (0)){
            this.tablaUsuario.push(this.usuariosDB[i]);
          }
        }
        break;
      }
      case "eMail":{
        for(let i=0;i<this.usuariosDB.length;i++){
          if((this.usuariosDB[i].eMail.indexOf(this.busqueda))>=(0)){
            this.tablaUsuario.push(this.usuariosDB[i]);
          }
        }
        break;
      }
      default:{
        for(let i=0;i<this.usuariosDB.length;i++){
            this.tablaUsuario.push(this.usuariosDB[i]);
        }
        break;
      }
    }
  }
    if(this.tablaUsuario.length > 0){
      this.alertaNoEncontrado=false;
    }else{
      this.alertaNoEncontrado=true;
    }
  }
}

  getUsuarios() {

    this.usuariosService.loadAllUsuarios()
        .subscribe( (data:any) => {
          this.processUsuariosResponse(data);
        },(error:any)=>{
          console.log("error:",error);
        })
        
 }

 SaveUsuarios(data:any) {
  this.usuariosService.saveUsuarios(data)
      .subscribe( (data:any) => {
        console.log(data);
      },(error:any)=>{
        console.log("error:",error);
      })
      
}

updateUsuarios(data:any,id:number){
  this.usuariosService.updateUsuarios(data,id)
  .subscribe( (data:any) => {
    this.manejoErrores(data);
  },(error:any)=>{
  })
}

manejoErrores(resp:any){
  if(resp.metadata[0].code=="00"){
    this.usuarioActualizado=true
  }
  if(resp.metadata[0].code=="-1"){
    this.usuarioActualizado=false
  }

}

processUsuariosResponse(resp:any){

  this.usuariosDB.splice(0,this.usuariosDB.length);
  if(resp.metadata[0].code == "00"){
    this.listUsuarios = resp.usuariosResponse.usuarios;
    for(let i=0;i<this.listUsuarios.length;i++){
      this.usuariosDB.push({id:0,usuario:"",contrasenia:"",nombre:"",apellido:"",nombreGranja:"",
      localidad:"",telefono:"",eMail:""});
      this.usuariosDB[i].id=this.listUsuarios[i].id;
      this.usuariosDB[i].usuario=this.listUsuarios[i].usuario;
      this.usuariosDB[i].contrasenia=this.listUsuarios[i].contrasenia;
      this.usuariosDB[i].nombre=this.listUsuarios[i].nombre;
      this.usuariosDB[i].apellido=this.listUsuarios[i].apellido;
      this.usuariosDB[i].nombreGranja=this.listUsuarios[i].nombre_granja;
      this.usuariosDB[i].localidad=this.listUsuarios[i].localidad;
      this.usuariosDB[i].telefono=this.listUsuarios[i].telefono;
      this.usuariosDB[i].eMail=this.listUsuarios[i].mail;
    }    
  }
 }
}

