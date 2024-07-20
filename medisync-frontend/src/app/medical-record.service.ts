import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicalRecord } from './models/medical-record.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  private baseUrl = 'http://localhost:8080/api/medical-records';

  constructor(private http: HttpClient) {}

  getAllMedicalRecords(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(this.baseUrl);
  }

  createMedicalRecord(medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    console.log("medical record")
    return this.http.post<MedicalRecord>(this.baseUrl, medicalRecord);
  }

  getMedicalRecordById(id: number): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(`${this.baseUrl}/${id}`);
  }

  deleteMedicalRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
