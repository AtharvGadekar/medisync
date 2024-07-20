package com.Medisync.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Medisync.project.Entities.Patient;

public interface PatientRepo extends JpaRepository<Patient,Long>{

}
