package com.bezkoder.spring.jpa.postgresql.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.jpa.postgresql.model.Doctor;


public interface DoctorRepository extends JpaRepository<Doctor, Long> {

  List<Doctor> findByNom(String name);
  @Query("select * from doctors where userId=UserId")
  Optional<Doctor> findByUserId(long UserId);
}
