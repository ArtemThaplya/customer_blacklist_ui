import { Injectable } from '@angular/core';
import {Employee} from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  employee = new Employee();

  constructor() { }
}
