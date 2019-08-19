import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Empolyee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


import { from } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  previewPhoto = false;

  departments: Department[] =[
    {id: 1, name: 'helpdisk' },
    {id: 2, name: 'it' },
    {id: 3, name: 'cse' },
    {id: 4, name: 'ece' },
  ];

  employee: Empolyee ={
    id : null,
    name: null,
    gender: null,
    email: "",
    phoneNumber: null,
    dateOfBirth: null,
    department: "select",
    isActive: null,
    photoPath: null,
  };

  constructor( private _employeeService: EmployeeService, private _router: Router) {

  }

  togglePhotoPreview(){
    this.previewPhoto = ! this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(){
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
