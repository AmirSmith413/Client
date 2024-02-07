import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Student } from '../types/students';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

constructor(private studentServices: StudentsService){}
students$!: Observable<Student[]>
ngOnInit(): void {
  
// this.studentServices.getStudents().subscribe({
//   next:(response) => {
//     console.log(response)
//   },
//   error:(err) => {
//     console.log(err)
//   }
// })
this.students$=this.studentServices.getStudents()
}

}
