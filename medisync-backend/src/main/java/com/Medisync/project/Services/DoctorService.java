package com.Medisync.project.Services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Medisync.project.Entities.Doctor;
import com.Medisync.project.repositories.DoctorRepo;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepo doctorrepo;
	
	public List<Doctor> getAllDoctors() {
        return doctorrepo.findAll();
    }
    
    public Doctor saveDoctor(Doctor doctor) {
        return doctorrepo.save(doctor);
    }
    
    public Optional<Doctor> getDoctorById(Long id) {
        return doctorrepo.findById(id);
    }
    
    public void deleteDoctor(Long id) {
    	doctorrepo.deleteById(id);
    }

}
