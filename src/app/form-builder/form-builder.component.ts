import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, NgStyle, NgIf, FormsModule, CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {
  private _fb = inject(FormBuilder);

  StudentForm:FormGroup=this._fb.group({
    StuName: ['',[Validators.required, Validators.minLength(3)]],
    StuEmail: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]],
    StuPassword: ['',[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$")]],
    StuContact: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]")]],
    StuSpi: ['',[Validators.required, Validators.min(0), Validators.max(10)]],
    StuAge: ['',[Validators.required, Validators.min(18)]],
    StuAddress: this._fb.array([this.createAddress()])
    })

    get StuAddArray():FormArray{
      return this.StudentForm.get('StuAddress') as FormArray
    }

    createAddress():FormGroup{
      return this._fb.group({
        houseNo: ['', Validators.required],
        streetNo: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      });
    }

    addAddress(){
      this.StuAddArray.push(this.createAddress())
    }

    removeAddress(id:number){
      this.StuAddArray.removeAt(id)
    }

    // addAddressControl(){
    //   this.StudentForm.addControl('StuAddress', this._fb.control('',[Validators.required]))
    // }

    // removeAddressControl(){
    //   this.StudentForm.removeControl('StuAddress');
    // }
}
