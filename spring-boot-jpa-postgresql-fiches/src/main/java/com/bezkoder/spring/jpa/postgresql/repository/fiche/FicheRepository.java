package com.bezkoder.spring.jpa.postgresql.repository.fiche;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.jpa.postgresql.model.fiche.Fiche;
@Repository
public interface FicheRepository extends JpaRepository<Fiche, Long> {

}

