package com.Medisync.project.Services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Medisync.project.Entities.Patient;
import com.Medisync.project.repositories.PatientRepo;

@Service
public class PatientService {
	
	@Autowired
	private PatientRepo patientrepo;
	
	public List<Patient> getAllPatients() {
        return patientrepo.findAll();
    }
    
    public Patient savePatient(Patient patient) {
        return patientrepo.save(patient);
    }
    
    public Optional<Patient> getPatientById(Long id) {
        return patientrepo.findById(id);
    }
    
    public void deletePatient(Long id) {
    	patientrepo.deleteById(id);
    }

}
