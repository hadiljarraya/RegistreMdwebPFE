package com.bezkoder.spring.jpa.postgresql.repository.doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.jpa.postgresql.model.doctor.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
