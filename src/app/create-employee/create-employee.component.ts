import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  onSubmit(form) {
    console.log(form);
  }

  onAddItem(f) {
    //
  }

  ngOnInit(): void {
    
  }

}
