import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { Registro } from 'src/app/models/registro';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tablad',
    templateUrl: './tablad.component.html',
    styleUrls: ['./tablad.component.css']
})
export class TabladComponent implements OnInit {

    listaContactos: Registro[] = []

    constructor(private _contactoService: ContactoService) { }

    ngOnInit(): void {
      this.obtenerContactos()
    }
    obtenerContactos() {
        this._contactoService.getContactos().subscribe(data => {
            console.log(data)
            this.listaContactos = data
        }, error => {
            console.log(error);
        })
    }

    eliminarContacto(id: any) {
        Swal.fire({
            title: 'Desea eliminar el contacto?',
            text: "esta accion no sera revercible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                this._contactoService.deleteContacto(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'El contacto se elimino'
                    })
                },error =>{
                    console.log(error)
                })
            }
        })
    }
}
