import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, FormBuilder, FormArray, Form } from '@angular/forms'

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})

export class WorkoutsComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    date:new FormControl(''),
    name:new FormControl(''),
    sets: this.fb.array([]),
  })

  get setsFieldFormArray(): any {
    return this.form.get('sets') as FormArray
  }

  sets(): any {
    return this.fb.group({
      reps: this.fb.control(''),
      weights: this.fb.control(''),
    })
  }
  
  addControl(): void {
    this.setsFieldFormArray.push(this.sets());
  }

  remove(i: number): void {
    this.setsFieldFormArray.removeAt(i);
  }

  addWorkout() {
    console.log(this.form.value);
  }
}
