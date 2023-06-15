package com.bezkoder.spring.jpa.postgresql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
@EnableAutoConfiguration 
@SpringBootApplication (exclude={DataSourceAutoConfiguration.class})
public class SpringBootJpaPostgresqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJpaPostgresqlApplication.class, args);
	}

}
