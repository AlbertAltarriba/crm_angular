import { Injectable } from '@angular/core';
import { DEPARTAMENTOS } from '../db/departamentos.db';
import { Departamento } from '../interfaces/departamento.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private arrEmpleados: Departamento[] = []
  constructor() { 
    this.arrEmpleados = DEPARTAMENTOS
  }
}
