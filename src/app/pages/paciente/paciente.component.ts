import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/_model/paciente';
import { PacienteService } from 'src/app/_service/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

export class PacienteComponent  implements OnInit{

  displayedColumns = ['idPaciente', 'nombres', 'apellidos', 'dni'];
  dataSource2 : any;
  @ViewChild(MatSort) sort : MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
 
constructor(private service : PacienteService){
}
  ngOnInit(): void {
    
  this.service.listar().subscribe( data => {
    this.dataSource2 = new MatTableDataSource<Paciente>(data);
    this.dataSource2.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
  
  });

  }

  applyFilter(valor : string){
    this.dataSource2.filter = valor.trim().toLowerCase();
  }

}
