import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css',
  providers: [EmployeeService],
})

export class DirectoryComponent implements OnInit {

  public employees: Array<Employee>;

  constructor(
    private _employeeService: EmployeeService
  ) {
    //
  }

  ngOnInit() {

    /*this._employeeService.getEmployees().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    );*/

    this._employeeService.getEmployees().subscribe({
      next: (v) => this.employees = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })

  }

  deleteEmployee(id: number) {
    this._employeeService.deleteEmployee(id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })
  }

}
