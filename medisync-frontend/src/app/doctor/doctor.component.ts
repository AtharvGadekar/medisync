import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  doctors: Doctor[] = [];

  dname: string= '';
  dspecialization: string= '';
  dphone: string= '';
  demail: string= '';
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(data => {
      this.doctors = data;
    });
  }
  createDoctor(): void {
    const doctor: Doctor = {
      name: this.dname,
      specialization: this.dspecialization,
      phone: this.dphone,
      email: this.demail,
      id: 0
    };
    this.doctorService.createDoctor(doctor).subscribe(data => {
      this.doctors.push(data);
    });
  }
  deleteDoctor(id: number): void {
    this.doctorService.deleteDoctor(id).subscribe(() => {
      this.doctors = this.doctors.filter(d => d.id !== id);
    });
  }
}
