package com.bezkoder.spring.jpa.postgresql.model.patient;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.bezkoder.spring.jpa.postgresql.model.fiche.Fiche;

@Entity
@Table(name = "patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "username")
	private String nom;
	
	@Column(name = "date_nais")
	private Date date_nais;
	
	@Column(name = "lieu_nais")
	private String lieu_nais;

	@Column(name = "adresse")
	private String adresse;
	
	
	@Column(name = "tel")
	private String tel;

	@Column(name = "age")
	private String age;
	
	@Column(name = "pathologie")
	private String pathologie;
	

	@Column(name = "type_obs")
	private String type_obs;
	
	
	@Column(name = "date_inter")
	private Date date_inter;
	
	@Column(name = "sexe")
	private String sexe;
	
	@Column(name = "consanguinite")
	private String consanguinite;
	
	@Column(name = "origine_geo_pere")
	private String origine_geo_pere;
	
	@Column(name = "origine_geo_mere")
	private String origine_geo_mere;
	
	@Column(name = "activite")
	private String activite;
	
	
	@Column(name = "couverture_sociale")
	private String couverture_sociale;
	
	
	@Column(name = "statut")
	private String statut;
	
	
	@Column(name = "circonstance_decouvert")
	private String circonstance_decouvert;
	
	
	
	@Column(name = "structure_suivi")
	private String structure_de_suivi;
	
	
	@Column(name = "nom_struct")
	private String nom_struct;
	
	@Column(name = "specialite")
	private String specialite;
    

    


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

	public Date getDate_nais() {
		return date_nais;
	}

	public void setDate_nais(Date date_nais) {
		this.date_nais = date_nais;
	}

	public String getLieu_nais() {
		return lieu_nais;
	}

	public void setLieu_nais(String lieu_nais) {
		this.lieu_nais = lieu_nais;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getPathologie() {
		return pathologie;
	}

	public void setPathologie(String pathologie) {
		this.pathologie = pathologie;
	}

	public String getType_obs() {
		return type_obs;
	}

	public void setType_obs(String type_obs) {
		this.type_obs = type_obs;
	}

	public Date getDate_inter() {
		return date_inter;
	}

	public void setDate_inter(Date date_inter) {
		this.date_inter = date_inter;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getConsanguinite() {
		return consanguinite;
	}

	public void setConsanguinite(String consanguinite) {
		this.consanguinite = consanguinite;
	}

	public String getOrigine_geo_pere() {
		return origine_geo_pere;
	}

	public void setOrigine_geo_pere(String origine_geo_pere) {
		this.origine_geo_pere = origine_geo_pere;
	}

	public String getOrigine_geo_mere() {
		return origine_geo_mere;
	}

	public void setOrigine_geo_mere(String origine_geo_mere) {
		this.origine_geo_mere = origine_geo_mere;
	}

	public String getActivite() {
		return activite;
	}

	public void setActivite(String activite) {
		this.activite = activite;
	}

	public String getCouverture_sociale() {
		return couverture_sociale;
	}

	public void setCouverture_sociale(String couverture_sociale) {
		this.couverture_sociale = couverture_sociale;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public String getCirconstance_decouvert() {
		return circonstance_decouvert;
	}

	public void setCirconstance_decouvert(String circonstance_decouvert) {
		this.circonstance_decouvert = circonstance_decouvert;
	}

	public String getStructure_de_suivi() {
		return structure_de_suivi;
	}

	public void setStructure_de_suivi(String structure_de_suivi) {
		this.structure_de_suivi = structure_de_suivi;
	}

	public String getNom_struct() {
		return nom_struct;
	}

	public void setNom_struct(String nom_struct) {
		this.nom_struct = nom_struct;
	}

	public String getSpecialite() {
		return specialite;
	}

	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}

	
	public Patient(String nom, Date date_nais, String lieu_nais, String adresse, String tel, String age,
			String pathologie, String type_obs, Date date_inter, String sexe, String consanguinite,
			String origine_geo_pere, String origine_geo_mere, String activite, String couverture_sociale, String statut,
			String circonstance_decouvert, String structure_de_suivi, String nom_struct, String specialite) {
		super();
		this.nom = nom;
		this.date_nais = date_nais;
		this.lieu_nais = lieu_nais;
		this.adresse = adresse;
		this.tel = tel;
		this.age = age;
		this.pathologie = pathologie;
		this.type_obs = type_obs;
		this.date_inter = date_inter;
		this.sexe = sexe;
		this.consanguinite = consanguinite;
		this.origine_geo_pere = origine_geo_pere;
		this.origine_geo_mere = origine_geo_mere;
		this.activite = activite;
		this.couverture_sociale = couverture_sociale;
		this.statut = statut;
		this.circonstance_decouvert = circonstance_decouvert;
		this.structure_de_suivi = structure_de_suivi;
		this.nom_struct = nom_struct;
		this.specialite = specialite;

	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	
	
	
	

	 
	
	
}