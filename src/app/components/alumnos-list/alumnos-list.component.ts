import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.scss']
})
export class AlumnosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullname', 'curso'];
  dataSource!: Observable<Alumno[]>;
  searchControl = new FormControl('');

  constructor(private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit() {
    this.dataSource = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.alumnoService.getAlumnos(term as string)),
      startWith([]) 
    );
  }
}