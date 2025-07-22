import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multidimentional',
  imports: [NgFor, FormsModule],
  templateUrl: './multidimentional.component.html',
  styleUrl: './multidimentional.component.css'
})
export class MultidimentionalComponent {
  students:{FirstName: String, LastName: String, Dept: String}[] = [
    {FirstName: "Tejasvi", LastName: "Patel", Dept: "CSE"},
    {FirstName: "Khushboo", LastName: "Lo", Dept: "CSE"},
    {FirstName: "Payal", LastName: "Kava", Dept: "CSE"}
  ]
  tempStu : {FirstName: String, LastName: String, Dept: String} = {
    FirstName : "",
    LastName : "",
    Dept : ""
  }
    StuName = '';
    idtoedit = -1;
    searchName = '';
    btnName = "Click to Add";
    filter = this.students

    insert() {
        if (this.tempStu.FirstName != '' && this.tempStu.LastName != '' && this.tempStu.Dept != '') {
            if (this.idtoedit < 0) {
                this.students.push({...this.tempStu});
                // this.filter = [...this.students];
            }
            else {
                if(confirm("Are you sure??")){
                    this.students[this.idtoedit] = {...this.tempStu};
                    this.idtoedit = -1;
                }
            }
        }
        this.tempStu.FirstName = ''
        this.tempStu.LastName = ''
        this.tempStu.Dept = ''
        this.btnName = "Click to Add";
    }

    delete(id: any) {
        if(confirm("Are you sure??")){
            this.students.splice(id, 1)
        }
    }

    update(id: any) {
        this.tempStu = {...this.students[id]};
        this.btnName = "Click to Update";
        this.idtoedit = id;
    }

    filtered() {
             
        if(this.searchName != ''){
            this.filter = this.students.filter((s) => {
                return s.FirstName.toLowerCase().includes(this.searchName.toLowerCase()) || s.LastName.toLowerCase().includes(this.searchName.toLowerCase()) || s.Dept.toLowerCase().includes(this.searchName.toLowerCase());
            });
            this.searchName = ''
        }
        else{
            this.filter = this.students
        }
        
    }
}
