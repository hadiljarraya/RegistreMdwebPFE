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

import com.bezkoder.spring.jpa.postgresql.model.Service;
import com.bezkoder.spring.jpa.postgresql.repository.ServiceRepository;
//@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin",origins = "*")
//@CrossOrigin(origins = "http://localhost:8080/api/services")
@CrossOrigin
@RestController
@RequestMapping("/api")
public class ServiceController {

	@Autowired
	ServiceRepository serviceRepository;

	@GetMapping("/services")
	public ResponseEntity<List<Service>> getAllservices(@RequestParam(required = false) String name) {
		try {
			List<Service> services = new ArrayList<Service>();

			if (name == null)
				serviceRepository.findAll().forEach(services::add);
			else
				serviceRepository.findByNom(name).forEach(services::add);

			if (services.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(services, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/services/{id}")
	public ResponseEntity<Service> getserviceById(@PathVariable("id") long id) {
		Optional<Service> serviceData = serviceRepository.findById(id);

		if (serviceData.isPresent()) {
			return new ResponseEntity<>(serviceData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/services")
	public ResponseEntity<Service> createservice(@RequestBody Service service) {
		try {
			Service _service = serviceRepository
	.save(new Service(service.getId(),service.getNom(),service.getUserId()));
			return new ResponseEntity<>(_service, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/services/{id}")
	public ResponseEntity<Service> updateservice(@PathVariable("id") long id, @RequestBody Service service) {
		Optional<Service> serviceData = serviceRepository.findById(id);

		if (serviceData.isPresent()) {
			Service _service = serviceData.get();
			_service.setId(service.getId());
			_service.setNom(service.getNom());
			_service.setUserId(service.getUserId());
			return new ResponseEntity<>(serviceRepository.save(_service), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/services/{id}")
	public ResponseEntity<HttpStatus> deleteservice(@PathVariable("id") long id) {
		try {
			serviceRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/services")
	public ResponseEntity<HttpStatus> deleteAllservices() {
		try {
			serviceRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}



}
