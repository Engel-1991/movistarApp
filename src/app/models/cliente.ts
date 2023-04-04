export class Cliente {
      Serie: string;
      Subserie: string;
      NumIdentificacion: string;
      NumDocumento: string;
      NombreUnidad: string;
      FechaDocumento: string;
      LineaCelular: string;
      PeticionNoOrden: string;
      ReqObra: string;
      IdInventario: string;
      UserNCA: {
        UsuarioRed: string;
        CentroCosto: string;
        IdGerencia: string;
        IdJefatura: string;
        Seccion: string;
        SubFondo: string;
        SubSeccion: string;
        Correo: string;
        NombreJefe: string;
        ApellidoJefe: string;
        CorreoJefe: string;
        CargoEmpleado: string;
      };
      filtro: string;
      pagina: number;
      tamano_pagina: number;
      Columna: string;
      Orden: string;
      Operacion: string;
      Estado: number
}