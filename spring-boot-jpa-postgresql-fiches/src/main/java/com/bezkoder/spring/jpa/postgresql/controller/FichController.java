package com.bezkoder.spring.jpa.postgresql.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.jpa.postgresql.model.fiche.Fiche;
import com.bezkoder.spring.jpa.postgresql.repository.fiche.FicheRepository;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class FichController {
	
	@Autowired
	private FicheRepository ficheRepo;

	
	
	@PostMapping("/fiches")
	public ResponseEntity<Fiche> createfiche(@RequestBody Fiche fiche) {
		try {
			ficheRepo.save(fiche);
			return new ResponseEntity<>(fiche, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}