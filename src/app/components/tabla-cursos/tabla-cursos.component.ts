import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { CommonModule } from '@angular/common';
import { curso } from '../../models/curso-to';

@Component({
  selector: 'Tabla-Cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit{

  public cursos?: curso[]

  ngOnInit():void{
     this.cursos = cursos
  }

}
