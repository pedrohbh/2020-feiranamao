package br.com.feiranamao.model;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.hibernate.mapping.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name="USUARIO")
public class Usuario implements UserDetails {

	private static final long serialVersionUID = 1L;

			@Id
		    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_usuario")
			@SequenceGenerator(name="seq_usuario", sequenceName = "seq_usuario", initialValue = 1)
		    private Long id;

			@Column(name = "username")
		    private String login;
		    
		    private String nome;

		    @Column(name = "password")
		    private String senha;

		    private boolean accountNonExpired;

		    private boolean accountNonLocked;

		    private boolean credentialsNonExpired;
		    
		    private boolean enabled;
		    
			/*  
			 @Enumerated(EnumType.STRING)
		    @ElementCollection(fetch = FetchType.EAGER)
		    private List<Role> roles;
			 */
		    public Usuario() {
		        this.accountNonExpired = true;
		        this.accountNonLocked = true;
		        this.credentialsNonExpired = true;
		        this.enabled = true;
		    }

		    @Override
		    public String getUsername() {
		        return login;
		    }
		    
		    @Override
		    public String getPassword() {
		        return senha;
		    }
		    
		    @Override
		    public boolean isAccountNonExpired() {
		        return accountNonExpired;
		    }

		    @Override
		    public boolean isAccountNonLocked() {
		        return accountNonLocked;
		    }

		    @Override
		    public boolean isCredentialsNonExpired() {
		        return credentialsNonExpired;
		    }

		    @Override
		    public boolean isEnabled() {
		        return true;
		    }

			@Override
			public Collection<? extends GrantedAuthority> getAuthorities() {
				// TODO Auto-generated method stub
				return null;
			}

			public Long getId() {
				return id;
			}
			
			public String getLogin() {
				return login;
			}

			public void setLogin(String login) {
				this.login = login;
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
		
}
