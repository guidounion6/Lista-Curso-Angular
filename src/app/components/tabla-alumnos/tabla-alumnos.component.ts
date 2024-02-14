import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock'
import { CommonModule } from '@angular/common';
import { alumno } from '../../models/alumno-to';

@Component({
  selector: 'Tabla-Alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit{
    
  public alumnos?: alumno[]

  ngOnInit(): void {
    this.alumnos = alumnos
  }

}
