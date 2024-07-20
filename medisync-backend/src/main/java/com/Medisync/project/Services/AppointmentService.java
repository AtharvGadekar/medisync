package com.Medisync.project.Services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Medisync.project.Entities.Appointment;
import com.Medisync.project.repositories.AppointmentRepo;

@Service
public class AppointmentService {
	
	@Autowired
	private AppointmentRepo appointmentrepo;
	
	public List<Appointment> getAllAppointments() {
        return appointmentrepo.findAll();
    }
    
    public Appointment saveAppointment(Appointment appointment) {
        return appointmentrepo.save(appointment);
    }
    
    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentrepo.findById(id);
    }
    
    public void deleteAppointment(Long id) {
    	appointmentrepo.deleteById(id);
    }

}
