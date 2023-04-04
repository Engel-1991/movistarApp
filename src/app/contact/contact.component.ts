import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { SkillsComponent } from '../skills/skills.component';

type AOA = any[][];


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {

  @ViewChild(SkillsComponent) skillsComponent: SkillsComponent | undefined;
  
  
  
  isTableExpanded = true;
  data: AOA = [];
  dataFilter: AOA = [];
  texto: string = "";
  telefonos: string[] = [];

  public excelData: any[] = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  toggleTable() {
    this.isTableExpanded = !this.isTableExpanded;
  }


  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[1];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      this.dataFilter = this.data;

      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  FiltrarNombre(texto: any) {
    if(texto.data == null) {
      this.texto = this.texto.slice(0, this.texto.length - 1)
    } else {
      this.texto += texto.data;
    }
    this.dataFilter = this.data.filter(data => data[0].toLocaleLowerCase().includes(this.texto.toLocaleLowerCase()) || data[2] == 'CELULAR');
  } 


  
  GenerarListaReproducciones() {
    for(var i = 1; i < this.dataFilter.length; i++) {
      this.telefonos.push(this.dataFilter[i][2].toString());
    } 
    this.skillsComponent?.sendData(this.telefonos, 0);
  }   
}
