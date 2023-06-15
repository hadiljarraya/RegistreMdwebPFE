package com.bezkoder.spring.jpa.postgresql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.Transactional;

import com.bezkoder.spring.jpa.postgresql.model.hospital.Hospital;
import com.bezkoder.spring.jpa.postgresql.repository.hospital.HospitalRepository;



//
//@ComponentScan(basePackages = { "com.*"})
//@EnableCaching
@Configuration
//@EnableJpaRepositories(basePackageClasses = {DoctorRepository.class,FicheRepository.class,HospitalRepository.class,PatientRepository.class,ServiceRepository.class})
//@EnableJpaRepositories( "com.bezkoder.spring.jpa.postgresql.repository")
//@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@ComponentScan({"com.bezkoder.spring.jpa.dbConfig.DoctorConfig","com.bezkoder.spring.jpa.dbConfig.HospitalConfig","com.bezkoder.spring.jpa.dbConfig.ServiceConfig"})
@SpringBootApplication
public class SpringBootJpaPostgresqlApplication {

	@Autowired
	private static  HospitalRepository repo;
	public static void main(String[] args) {
		SpringApplication.run(SpringBootJpaPostgresqlApplication.class, args);
		whenCreatingProduct_thenCreated();
	
	}
	
	    @Transactional("hospitalTransactionManager")
	    private static void whenCreatingProduct_thenCreated() {

	    	
	        Hospital hospital = new Hospital();
	        hospital.setAdress("aa");;
	        hospital.setId(1);
	        hospital.setEmail("2");
	        repo.save(hospital);

	    }

}
