package com.bezkoder.spring.jpa.postgresql.model;

import javax.persistence.*;

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

	public Service(long id, String nom, Long userId) {
		super();
		this.id = id;
		this.nom = nom;
		this.userId = userId;
	}
	   public Service() {
		
	       }

}
	