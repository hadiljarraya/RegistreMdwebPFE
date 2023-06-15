package com.bezkoder.spring.jpa.postgresql.model;

import javax.persistence.*;

@Entity
@Table(name = "tutorials")
public class Tutorial {

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
	
	public Tutorial() {

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

	public Tutorial(String nom, String adress, String tel, String email,Long userId) {
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
