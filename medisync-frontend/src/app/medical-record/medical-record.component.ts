import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from '../models/medical-record.model';
import { MedicalRecordService } from '../medical-record.service';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit{
  medicalRecords: MedicalRecord[] = [];

  mrpatientId:number=0;
  mrdescription:string='';

  constructor(private medicalRecordService: MedicalRecordService) {}

  ngOnInit(): void {
    this.medicalRecordService.getAllMedicalRecords().subscribe(data => {
      this.medicalRecords = data;
    });
  }

  createMedicalRecord(): void {
    const medicalRecord: MedicalRecord = {
      patientId: this.mrpatientId,
      description: this.mrdescription,
      id: 0
    };
    this.medicalRecordService.createMedicalRecord(medicalRecord).subscribe(data => {
      this.medicalRecords.push(data);
    });
  }

  deleteMedicalRecord(id: number): void {
    this.medicalRecordService.deleteMedicalRecord(id).subscribe(() => {
      this.medicalRecords = this.medicalRecords.filter(mr => mr.id !== id);
    });
  }
}
