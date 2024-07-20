export interface MedicalRecord {
    id: number; // Optional for new medical records
    patientId: number;
    description: string;
    //createdAt?: string; // Automatically set by the server
  }