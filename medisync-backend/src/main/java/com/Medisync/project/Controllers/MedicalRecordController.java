package com.Medisync.project.Controllers;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Medisync.project.Entities.MedicalRecord;
import com.Medisync.project.Services.MedicalRecordService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/medical-records")
public class MedicalRecordController {

	@Autowired
    private MedicalRecordService medicalrecordService;
    
    @GetMapping
    public List<MedicalRecord> getAllMedicalRecords() {
        return medicalrecordService.getAllMedicalRecords();
    }
    
    @PostMapping
    public MedicalRecord createMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        return medicalrecordService.saveMedicalRecord(medicalRecord);
    }
    
    @GetMapping("/{id}")
    public Optional<MedicalRecord> getMedicalRecordById(@PathVariable Long id) {
        return medicalrecordService.getMedicalRecordById(id);
    }
    
    @DeleteMapping("/{id}")
    public void deleteMedicalRecord(@PathVariable Long id) {
    	medicalrecordService.deleteMedicalRecord(id);
    }

}
