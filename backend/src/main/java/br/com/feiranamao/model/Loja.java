package br.com.feiranamao.model;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="LOJA")
public class Loja implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
		@Id 
		@NotNull
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;
		
		@NotNull
		private String nome;
		
		private String logo;
		
//		@JsonIgnore
//		@JsonBackReference
		@OneToOne(fetch = FetchType.LAZY, optional = false)
	    @JoinColumn(nullable = false, name="usuario_id", referencedColumnName="id")
		private Usuario usuario;
		
		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}
 
//		public Usuario getUsuario() {
//			return usuario;
//		}

		public void setUsuario(Usuario usuario) {
			this.usuario = usuario;
		}

		public String getLogo() {
			return logo;
		}

		public void setLogo(String logo) {
			this.logo = logo;
		}
	
}
