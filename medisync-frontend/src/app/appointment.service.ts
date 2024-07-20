import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) {}

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, appointment);
  }

  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
