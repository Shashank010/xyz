import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  empList : Employee[] = [];
  empListArray:Employee[];
  constructor() {

    this.empList=[
    {

      // return this.stuList;
  
      Id:1001,
      empName: 'Bharati',
     
       salary: 9000,
       dept: 'Java',
       doj:'6/12/2014'
  
    },
    {
      Id:1002,
      empName: 'Anju',
     
       salary: 11000,
       dept: 'ORAAPS',
       doj:'6/12/2017'
  
    },
    {Id:1003,
      empName: 'Uma',
     
       salary: 12000,
       dept: 'Java',
       doj:'6/12/2010'
  },
  {
    Id:1004,
      empName: 'Yogini',
     
       salary: 11500,
       dept: 'ORAAPS',
       doj:'11/12/2017'
  
  },
  {Id:1005,
    empName: 'Tanmay',
   
     salary: 7000,
     dept: 'NET',
     doj:'1/1/2018'
    },
     {Id:1006,
      empName: 'Kavita',
     
       salary: 17000,
       dept: 'BI',
       doj:'9/12/2012'
      },
      {Id:1007,
        empName: 'Rajita',
       
         salary: 21000,
         dept: 'BI',
         doj:'6/7/2014'
        },
        {Id:1008,
          empName: 'Neelima',
         
           salary: 81000,
           dept: 'Testing',
           doj:'6/17/2015'
          },
          {Id:1009,
            empName: 'Daya',
           
             salary: 1000,
             dept: 'Testing',
             doj:'6/17/2016',
             
            },
            


     
  ];
  }

  //add data in database
  addEmployee(emp: Employee) {console.log(emp)
    this.empList.push(emp);
  }

  //return whole database
  getList(): Employee[] {
  return this.empList;
 
 
  

}
  //delete a entry
  deleteUser(index: number) {
    return this.empList.splice(index, 1);
  }
  searchOrder(id:number){
    var result=this.empList.find(x=>x.Id==id);
    if(result==null){
     return null;
    }else{
      return result;
    }
}
}