package com.bezkoder.spring.jpa.postgresql.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;


import com.bezkoder.spring.jpa.postgresql.model.Service;

public interface ServiceRepository extends JpaRepository<Service, Long> {

  List<Service> findByNom(String name);
  
  @Query("select * from services where userId:=UserId")
  Optional<Service> findByUserId(long UserId);
}

