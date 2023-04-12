import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token = "";
  value = 'Borrar';
  showSection = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private router: Router, private dataService: DataService, private _snackBar: MatSnackBar) {}
  
  ngOnInit() {}

  submitToken() {
    localStorage.setItem('token', this.token);
    var inventario = [
      {
        Serie: '',
        Subserie: '',
        NumIdentificacion: '',
        NumDocumento: '',
        NombreUnidad: '',
        FechaDocumento: '',
        LineaCelular: "3022930255",
        PeticionNoOrden: '',
        ReqObra: '',
        IdInventario: '',
        UserNCA: {
          UsuarioRed: 'ghernandele',
          CentroCosto: 'NA',
          IdGerencia: 'NA',
          IdJefatura: null,
          Seccion: 'NA',
          SubFondo: 'NA',
          SubSeccion: 'NA',
          Correo: 'NA',
          NombreJefe: 'NA',
          ApellidoJefe: 'NA',
          CorreoJefe: 'NA',
          CargoEmpleado: 'NA',
        },
        filtro: '',
        pagina: 0,
        tamano_pagina: 10,
        Columna: '1',
        Orden: 'asc',
        Operacion: '1',
        Estado: 1,
      },
    ];

    const data = {
      // Aquí colocarías los datos que quieres enviar
      userList: inventario,
      // ...
    };

    this.dataService.sendData(data.userList[0]).subscribe(
      (response) => {
        this.router.navigate(['home']);
      },
      (error) => {
        this._snackBar.open('No fue posible iniciar sesión', '', {
          duration: 3000,
        });
        console.error(error);
      }
    );
  }
}









