import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../appointment.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  appointments: Appointment[] = [];
  today = Date.now();
  patientid:number|any;
  doctorid:number|any;
  // appointmentdate:Date|any;
  // appointmenttime:Time|any;
  status:string|any;
  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  createAppointment(): void {
    let d = new Date();

    var s=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    var t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    const appointment: Appointment = {
      patientId: this.patientid,
      doctorId: this.doctorid,
      appointmentDate: d.toISOString(),
      appointmentTime: d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(),
      status: this.status,
      id: 0
    };
    this.appointmentService.createAppointment(appointment).subscribe(data => {
      this.appointments.push(data);
    });
  }
  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.appointments = this.appointments.filter(a => a.id !== id);
    });
  } 
}
