package com.anima.desafioTech.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anima.desafioTech.entities.Calendar;
import com.anima.desafioTech.repositories.CalendarRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/calendar")
public class CalendarController {

	@Autowired
	CalendarRepository repository;
	
	@GetMapping
	public List<Calendar> getAll(){
		return repository.findAll();
	}
	
	@PostMapping(value = "/salvar")
    public Calendar create(@RequestBody Calendar calendar) {
        return repository.save(calendar);
    }
	
}
