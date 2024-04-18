import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})

export class AddTripComponent implements OnInit {

  public addForm!: FormGroup;
  submitted = false;

  constructor(        
      private formBuilder: FormBuilder,
      private router: Router,
      private tripService: TripDataService
  ) { }

ngOnInit() {
  this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
  })
}

onSubmit() {
  this.submitted = true;
  if(this.addForm.valid){
      this.tripService.addTrip(this.addForm.value)
      .then( data => {
          console.log(data);
          this.router.navigate(['list-trips']);
      });
  }
}
// get the form short name to access the form fields
get f() { return this.addForm.controls; }
}
