package com.Medisync.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Medisync.project.Entities.MedicalRecord;

public interface MedicalRecordRepo extends JpaRepository<MedicalRecord,Long>{

}
