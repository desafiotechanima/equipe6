package com.anima.desafioTech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anima.desafioTech.entities.Usuario;

public interface UsuarioRepository extends JpaRepository <Usuario, Integer> {

}
