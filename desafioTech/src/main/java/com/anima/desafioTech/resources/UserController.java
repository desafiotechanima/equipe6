package com.anima.desafioTech.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anima.desafioTech.entities.Users;
import com.anima.desafioTech.repositories.UserRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	UserRepository repository;
	
	@GetMapping
	public List<Users> getAll(){
		return repository.findAll();
	}
	
	@PostMapping(value = "/salvar")
    public Users create(@RequestBody Users user) {
        return repository.save(user);
    }
}
