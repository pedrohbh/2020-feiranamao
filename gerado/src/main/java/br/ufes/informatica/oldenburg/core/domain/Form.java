package br.ufes.informatica.oldenburg.core.domain;

import java.util.*;
import java.math.*;
import javax.persistence.*;
import javax.validation.constraints.*;
import br.ufes.inf.nemo.jbutler.ejb.persistence.PersistentObjectSupport;

/** TODO: generated by FrameWeb. Should be documented. */
@Entity
public class Form extends PersistentObjectSupport implements Comparable<Form> {
	/** Serialization id. */
	private static final long serialVersionUID = 1L;



	/** TODO: generated by FrameWeb. Should be documented. false */
	@NotNull  
	private String name;

	/** TODO: generated by FrameWeb. Should be documented. false */
	@NotNull  
	private String password;







	/** Getter for name. */
	public String getName() {
		return name;
	}
	
	/** Setter for name. */
	public void setName(String name) {
		this.name = name;
	}

	/** Getter for password. */
	public String getPassword() {
		return password;
	}
	
	/** Setter for password. */
	public void setPassword(String password) {
		this.password = password;
	}








	/** @see java.lang.Comparable#compareTo(java.lang.Object) */
	@Override
	public int compareTo(Form o) {
		// FIXME: auto-generated method stub		
		return super.compareTo(o);
	}
}