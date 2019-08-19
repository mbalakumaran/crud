import { Injectable } from '@angular/core';
import { Empolyee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees: Empolyee[] =[ 
        {
        id : 1,
        name: 'mark',
        gender: 'male',
        email: 'bala@gmail.com',
        dateOfBirth: new Date(7/17/2019),
        department: 'it',
        isActive: true,
        photoPath: 'assets/images/user-1.jpg',
        },
        {
        id : 2,
        name: 'vijay',
        gender: 'male',
        email: 'bala@gmail.com',
        dateOfBirth: new Date(7/17/2019),
        department: 'it',
        isActive: true,
        photoPath: 'assets/images/user-2.jpg',
        },
        {
        id : 3,
        name: 'bala',
        gender: 'male',
        email: 'bala@gmail.com',
        dateOfBirth: new Date(7/17/2019),
        department: 'it',
        isActive: true,
        photoPath: 'assets/images/user-3.jpg',
        },
        {
        id : 1,
        name: 'mark',
        gender: 'male',
        email: 'bala@gmail.com',
        dateOfBirth: new Date(7/17/2019),
        department: 'it',
        isActive: true,
        photoPath: 'assets/images/user-1.jpg',
        },
        {
        id : 2,
        name: 'vijay',
        gender: 'male',
        email: 'bala@gmail.com',
        dateOfBirth: new Date(7/17/2019),
        department: 'it',
        isActive: true,
        photoPath: 'assets/images/user-2.jpg',
        },
        {
        id : 3,
        name: 'bala',
        gender: 'male',
        email: 'bala@gmail.com',
        dateOfBirth: new Date(7/17/2019),
        department: 'it',
        isActive: true,
        photoPath: 'assets/images/user-3.jpg',
        }, 
    ];

    getEmployees(): Empolyee[]{
        return this.listEmployees;
    }

    save(employee: Empolyee){
        this.listEmployees.push(employee);
    }

}
