package com.Medisync.project.Services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Medisync.project.Entities.MedicalRecord;
import com.Medisync.project.repositories.MedicalRecordRepo;

@Service
public class MedicalRecordService {
	@Autowired
	private MedicalRecordRepo medicalrecordrepo;
	
	public List<MedicalRecord> getAllMedicalRecords() {
        return medicalrecordrepo.findAll();
    }
    
    public MedicalRecord saveMedicalRecord(MedicalRecord medicalrecord) {
        return medicalrecordrepo.save(medicalrecord);
    }
    
    public Optional<MedicalRecord> getMedicalRecordById(Long id) {
        return medicalrecordrepo.findById(id);
    }
    
    public void deleteMedicalRecord(Long id) {
    	medicalrecordrepo.deleteById(id);
    }

}
