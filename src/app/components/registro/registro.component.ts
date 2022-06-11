import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from 'src/app/models/registro';
import { ContactoService } from 'src/app/services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;
  id: string | null;
  titulo_formulario = 'enviar datos'

  constructor(private fb: FormBuilder, private _contactoService: ContactoService, private router: Router, private idRoute: ActivatedRoute) {
    this.registroForm = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
    })
    this.id = this.idRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.accionSolicitada();
  }

  guardarregistro() {
    const registroGuardar: Registro = {
      correo: this.registroForm.get('correo')?.value,
      nombre: this.registroForm.get('nombre')?.value,
      edad: this.registroForm.get('edad')?.value
    }
    console.log(registroGuardar)

    if (this.id !== null) {
      this._contactoService.putContacto(this.id, registroGuardar).subscribe(data => {
        this.router.navigate(['tabla'])
        Swal.fire({
          title: 'Datos actualizados!',
          text: 'Se guardaron los cambios',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
      }, error => {
        console.log(error)
      })
    } else {
      this._contactoService.postContacto(registroGuardar).subscribe(data => {
        this.router.navigate(['/dts-enviados'])
      }, error => {
        console.log(error)
      })
    }
  }

  accionSolicitada(){
    if(this.id !==null) {
      this.titulo_formulario = "actualizar datos"
      this._contactoService.getContacto(this.id).subscribe(data => {
        this.registroForm.setValue({
          correo: data.correo,
          nombre: data.nombre,
          edad: data.edad
        })
      },error =>{
        console.log(error)
      })
    }
  }



}
