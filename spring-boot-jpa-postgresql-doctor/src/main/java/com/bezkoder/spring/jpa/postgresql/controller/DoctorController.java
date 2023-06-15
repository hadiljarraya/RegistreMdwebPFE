package com.bezkoder.spring.jpa.postgresql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.jpa.postgresql.model.Doctor;
import com.bezkoder.spring.jpa.postgresql.repository.DoctorRepository;
//@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin",origins = "*")
//@CrossOrigin(origins = "http://localhost:8082/api/doctors")
@CrossOrigin
@RestController
@RequestMapping("/api")
public class DoctorController {

	@Autowired
	DoctorRepository doctorRepository;

	@GetMapping("/doctors")
	public ResponseEntity<List<Doctor>> getAlldoctors(@RequestParam(required = false) String name) {
		try {
			List<Doctor> doctors = new ArrayList<Doctor>();
			

			if (name == null)
				doctorRepository.findAll().forEach(doctors::add);
			else
				doctorRepository.findByNom(name).forEach(doctors::add);

			if (doctors.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(doctors, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/doctors/{id}")
	public ResponseEntity<Doctor> getdoctorById(@PathVariable("id") long id) {
		Optional<Doctor> doctorData = doctorRepository.findByUserId(id);

		if (doctorData.isPresent()) {
			return new ResponseEntity<>(doctorData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/doctors")
	public ResponseEntity<Doctor> createdoctor(@RequestBody Doctor doctor) {
		try {
			Doctor _doctor = doctorRepository
	.save(new Doctor(doctor.getId(),doctor.getNom(),doctor.getAdress(),doctor.getEmail(),doctor.getTel(),doctor.getUserId()));
			return new ResponseEntity<>(_doctor, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/doctors/{id}")
	public ResponseEntity<Doctor> updatedoctor(@PathVariable("id") long id, @RequestBody Doctor doctor) {
		Optional<Doctor> doctorData = doctorRepository.findById(id);

		if (doctorData.isPresent()) {
			Doctor _doctor = doctorData.get();
			_doctor.setAdress(doctor.getAdress());
			_doctor.setEmail(doctor.getEmail());
			_doctor.setNom(doctor.getNom());
			_doctor.setTel(doctor.getTel());
			_doctor.setUserId(doctor.getUserId());
			return new ResponseEntity<>(doctorRepository.save(_doctor), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/doctors/{id}")
	public ResponseEntity<HttpStatus> deletedoctor(@PathVariable("id") long id) {
		try {
			doctorRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/doctors")
	public ResponseEntity<HttpStatus> deleteAlldoctors() {
		try {
			doctorRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}



}
