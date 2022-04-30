package com.anima.desafioTech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anima.desafioTech.entities.Calendar;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar,Long> {

}
