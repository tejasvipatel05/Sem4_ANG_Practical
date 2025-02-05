import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array',
  imports: [FormsModule, NgFor],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent {
  students = ['Payal', 'Khushboo', 'Tejasvi', 'Sonal', 'Palak']
  StuName = '';
  idtoedit = -1;
  searchName = '';
  btnName = "Click to Add";
  filter = this.students

  insert() {
      if (this.StuName != '') {
          if (this.idtoedit < 0) {
              this.students.push(this.StuName);
              // this.filter = [...this.students];
          }
          else {
              if(confirm("Are you sure??")){
                  this.students[this.idtoedit] = this.StuName;
                  this.idtoedit = -1;
              }
          }
      }
      this.StuName = ''
      this.btnName = "Click to Add";
  }

  delete(id: any) {
      if(confirm("Are you sure??")){
          this.students.splice(id, 1)
      }
  }

  update(id: any) {
      this.StuName = this.students[id];
      this.btnName = "Click to Update";
      this.idtoedit = id;
  }

  filtered() {
           
      if(this.searchName != ''){
          this.filter = this.students.filter((s) => {
              return s.toLowerCase().includes(this.searchName.toLowerCase());
          });
          this.searchName = ''
      }
      else{
          this.filter = this.students
      }
      
  }
}
