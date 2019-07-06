import { Component, OnInit } from '@angular/core';

import { Employee } from '../model/Employee';
import { ServiceService } from '../employee-service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  empList : Employee[] = [];

  constructor(private userService : ServiceService, private router: Router) { }

  ngOnInit() {
    this.empList = this.userService.getList();
  }

  delete(index: number) {
    var ans = confirm("Are You Sure You want To delete?")
    if (ans) {
      this.userService.deleteUser(index); //delete from service
    }
  }

}
