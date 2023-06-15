package com.bezkoder.spring.jpa.postgresql.repository.hospital;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.jpa.postgresql.model.hospital.Hospital;


public interface HospitalRepository extends JpaRepository<Hospital, Long> {

	static char[] getHospitalById(int i) {

		return null;
	}
}
