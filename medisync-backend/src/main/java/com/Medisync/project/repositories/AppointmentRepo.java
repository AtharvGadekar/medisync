package com.Medisync.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Medisync.project.Entities.Appointment;

public interface AppointmentRepo extends JpaRepository<Appointment, Long>{

}
