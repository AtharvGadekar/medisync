import { Time } from "@angular/common";

export interface Appointment {
    id: number; // Optional for new appointments
    patientId: number;
    doctorId: number;
    appointmentDate: string|any; // or Date object
    appointmentTime: string|any; // or Time object
    status: string;
  }