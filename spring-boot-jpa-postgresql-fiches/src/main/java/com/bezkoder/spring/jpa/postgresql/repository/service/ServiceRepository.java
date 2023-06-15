package com.bezkoder.spring.jpa.postgresql.repository.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.jpa.postgresql.model.service.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

}
