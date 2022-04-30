package com.anima.desafioTech.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anima.desafioTech.entities.Usuario;
import com.anima.desafioTech.services.UsuarioService;


	@RestController
	@RequestMapping(value = "/clientes")
	public class UsuarioController {

		@Autowired
		UsuarioService service;	
		
		@GetMapping
		public List<Usuario> findAll() {
			List<Usuario> result = service.findAll();
			return result;
		}			
			
		@PostMapping    
	    public Usuario create(@RequestBody Usuario cliente) {
	        return service.create(cliente);
	    }	
		
		
	
		
		
	}
