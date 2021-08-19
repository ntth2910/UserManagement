// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray} from '@angular/forms';

// @Component({
//   selector: 'app-report-template-create',
//   templateUrl: './report-template-create.component.html',
//   styleUrls: ['./report-template-create.component.scss']
// })
// export class ReportTemplateCreateComponent implements OnInit {

//   constructor(private _fb: FormBuilder) { }
//   public addmore!: FormGroup;

//   ngOnInit(): void {
//     this.addmore = this._fb.group({
//       reportName: [''],
//       description: [''],
//       itemRows: this._fb.array([this.initItemRows()])
//     });
//   }

//   get formArrs() {
//     return this.addmore.get('itemRows') as FormArray;
//   }

//   initItemRows() {
//     return this._fb.group({
//       field: ['']
//     });
//   }

//   addNewRow() {
//     this.formArrs.push(this.initItemRows());
//   }

//   deleteRow(index: number) {
//     this.formArrs.removeAt(index);
//   }

//   submit() {
//     console.log(this.addmore.value);
//   }
// }
