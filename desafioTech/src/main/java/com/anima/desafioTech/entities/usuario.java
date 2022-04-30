package com.anima.desafioTech.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "clientid")
	private Integer clientId;

	@Column(name = "email", nullable = false, unique = true, length = 30)
	private String email;

	@Column(name = "nome", nullable = false, length = 50)
	private String nome;

	@Column(name = "senha", nullable = false, unique = true, length = 50)
	private String senha;
	
	public Usuario() {
		
	}

	public Usuario(Integer clientId, String email, String nome, String senha) {
		this.clientId = clientId;
		this.email = email;
		this.nome = nome;
		this.senha = senha;
	}

	public Integer getClientId() {
		return clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public int hashCode() {
		return Objects.hash(clientId, email, nome, senha);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		return Objects.equals(clientId, other.clientId) && Objects.equals(email, other.email)
				&& Objects.equals(nome, other.nome) && Objects.equals(senha, other.senha);
	}

	
	
}
