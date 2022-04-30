package com.anima.desafioTech.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.anima.desafioTech.entities.Usuario;
import com.anima.desafioTech.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository repository;

	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		List <Usuario> result = repository.findAll();
		return result;
	}
	

	@Transactional(readOnly = true)
	public Usuario create(Usuario cliente) {
		return repository.save(cliente);
	}
}
