package com.Medisync.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Medisync.project.Entities.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor, Long>{

}
