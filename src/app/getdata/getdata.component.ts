
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Model/Employee';
import { ServiceService } from '../employee-service/service.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']

  
 
})
 
  export class GetdataComponent implements OnInit {
    empList : Employee[] = [];
  
  @Input() emp:Employee;
  @Input() isEdited=false;
  @Output() edited=new EventEmitter();
    constructor(private service:ServiceService) { 
      this.emp=new Employee();
    }
    ngOnInit()
     {
      this.empList = this.service.getList();
    }
    
    addEmployee(){
      this.service.addEmployee(this.emp);
      this.emp=new Employee();
    }
  
    update(){
      this.isEdited=false;
      this.emp=new Employee();
      this.edited.emit();
    }
    delete(index: number) {
      var ans = confirm("Are You Sure You want To delete?")
      if (ans) {
        this.service.deleteUser(index); //delete from service
      }
  
    }
  }