import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patients: Patient[] =[];

  pname: string = '';
  page: number | any;
  pgender: string = '';
  paddress: string = '';
  pphone: string = '';
  pemail: string = '';

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  createPatient(): void {
    const patient: Patient = {
      name: this.pname,
      age: this.page,
      gender: this.pgender,
      address: this.paddress,
      phone: this.pphone,
      email: this.pemail,
      id: 0
    };
    this.patientService.createPatient(patient).subscribe(data => {
      this.patients.push(data);
    });
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id).subscribe(() => {
      this.patients = this.patients.filter(p => p.id !== id);
    });
  }
}
