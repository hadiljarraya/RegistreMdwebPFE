package com.bezkoder.spring.jpa.postgresql.model.service;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.bezkoder.spring.jpa.postgresql.model.fiche.Fiche;

@Entity
@Table(name = "services")
public class Service {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "nom")
	private String nom;
	
	
	@Column(name = "userId")
	private Long userId;
	

	
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}


	   public Service(String nom, Long userId, Set<Fiche> fiches) {
		super();
		this.nom = nom;
		this.userId = userId;
	}

	public Service() {
		
	       }

}
	