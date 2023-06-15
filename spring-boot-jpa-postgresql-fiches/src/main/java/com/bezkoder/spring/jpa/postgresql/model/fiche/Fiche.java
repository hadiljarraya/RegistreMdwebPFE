package com.bezkoder.spring.jpa.postgresql.model.fiche;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "fiches")
public class Fiche {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "num_dos")
	private String numdos;
	
	
    @Column(name = "service_id")
    private Long service;

    @Column(name = "doctor_id")
    private Long doctor;

    @Column(name = "hospital_id")
    private Long hospital;
    
    @Column(name = "patient_id")
    private Long patient;
    
	@Column(name = "date_diag")
	private Date datediag;
	
	@Column(name = "date_enreg")
	private Date date_enreg;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	

	public Long getPatient() {
		return patient;
	}

	public void setPatient(Long patient) {
		this.patient = patient;
	}

	public String getNumdos() {
		return numdos;
	}

	public void setNumdos(String numdos) {
		this.numdos = numdos;
	}

	public Long getService() {
		return service;
	}

	public void setService(Long service) {
		this.service = service;
	}

	public Date getDatediag() {
		return datediag;
	}

	public void setDatediag(Date datediag) {
		this.datediag = datediag;
	}

	public Date getDate_enreg() {
		return date_enreg;
	}

	public void setDate_enreg(Date date_enreg) {
		this.date_enreg = date_enreg;
	}



	public Long getMedcin() {
		return doctor;
	}

	public void setMedcin(Long doctor) {
		this.doctor = doctor;
	}

	public Long getHospital() {
		return hospital;
	}

	public void setHospital(Long hospital) {
		this.hospital = hospital;
	}

	public Fiche() {
		
	}

	public Fiche(String numdos, Long service, Long doctor, Long hospital, Long patient, Date datediag, Date date_enreg) {
		super();
		this.numdos = numdos;
		this.service = service;
		this.doctor = doctor;
		this.hospital = hospital;
		this.patient = patient;
		this.datediag = datediag;
		this.date_enreg = date_enreg;
	}
	

}