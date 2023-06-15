package com.bezkoder.spring.jpa.postgresql.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.jpa.postgresql.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {

  List<Tutorial> findByNom(String name);
  
  @Query("select * from Tutorial where userId:=UserId")
  Optional<Tutorial> findByUserId(long UserId);
}
