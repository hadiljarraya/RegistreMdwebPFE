package com.bezkoder.spring.jpa.postgresql.model.hospital;

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
@Table(name = "tutorials")
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "nom")
	private String nom;

	@Column(name = "adress")
	private String adress;

	@Column(name = "tel")
	private  String tel;

	@Column(name = "email")
	private  String email;
	
	@Column(name = "userId")
	private Long userId;
	
    
	public Hospital() {

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

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Hospital(String nom, String adress, String tel, String email,Long userId) {
		super();
		this.nom = nom;
		this.adress = adress;
		this.tel = tel;
		this.email = email;
		this.userId=userId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}


}
