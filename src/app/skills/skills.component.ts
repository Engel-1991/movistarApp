

import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input, SimpleChanges } from '@angular/core';
import { Inventario } from '../models/inventario';
import { DataService } from '../services/user.service';


  // interface AudioResponse {
  //   data: string;
  // }
  @Component({
   
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    selector: 'app-skills',
  
  })
  export class SkillsComponent implements OnInit {
  inventario: any[] = [];
  panelOpenState = false;
  inventarios: Inventario[] = [];
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
  base64 = '';
  grabacion: any;
  decodedAudio = '';
  @Input() telefonos: string[] = [];


  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['telefonos']) {
      if(this.telefonos.length > 0) {
        this.sendData(this.telefonos, 0);
      }
      
      // Aquí se puede agregar código adicional para manejar el cambio de valor
    }
  }

  ngOnInit() {
    //Inicializar userlist con los datos que quieres enviar
    

    // Llamar sendData con los datos de userList
    //this.sendData();
  }

  sendData(telefonos: string[], indice: number) {
    this.inventario = [
      {
        Serie: '',
        Subserie: '',
        NumIdentificacion: '',
        NumDocumento: '',
        NombreUnidad: '',
        FechaDocumento: '',
        LineaCelular: telefonos[indice],
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
      userList: this.inventario,
      // ...
    };

    this.dataService.sendData(data.userList[0]).subscribe(
      (response) => {
        if(telefonos.length > indice) {
          console.log(response);
          this.inventarios.push(response);
          indice ++;
          this.sendData(telefonos, indice)
          console.log(this.inventarios);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ObtenerGrabacion(grabacion: any, div: any) {
    this.grabacion = {
      IdInventario: grabacion.IdInventario,
      IdTRD: 0,
      TipoInventario: '',
      Nombre: '',
      FechaCreacion: grabacion.FechaInicial,
      Estado: 0
    }

    this.dataService.ObtenerGrabacion(this.grabacion).subscribe(
      (response) => {
        console.log(response);
        this.GenerarReproduccion(response.StringArchivo, div);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  GenerarReproduccion(base64: string, div: any) {
    const audioPlayer = this.audioPlayerRef.nativeElement;

      this.base64 = 'data:audio/mp3;base64,' + base64;

      this.decodedAudio = this.base64;

      var htmlAudio = '<audio  style="width: 800px;" display="flex;"controls="controls" autobuffer="autobuffer" autoplay="autoplay"><source src="' + this.base64 + '"/></audio>'

      setTimeout(() => {
        div.innerHTML = htmlAudio;
      }, 3000);
  }
  }

  

  

