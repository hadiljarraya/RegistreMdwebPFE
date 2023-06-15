package com.bezkoder.spring.jpa.postgresql.repository.patient;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.jpa.postgresql.model.patient.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

  Optional<Patient> findByNom(String name);
  /*
  @Query("select * from patient where userId:=UserId")
  Optional<Patient> findByUserId(long UserId);
  */
}
