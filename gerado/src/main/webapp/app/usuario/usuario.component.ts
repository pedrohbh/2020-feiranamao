import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuario',
  template: `<table>
				<tr>
					<th>{{ table }}</th>
				</tr>
				<tr>
					<td>{{ table }}</td>
				</tr>
			</table><td id="usuario.id">{{ usuario.id }}</td><td id="usuario.login">{{ usuario.login }}</td><td id="usuario.nome">{{ usuario.nome }}</td><span id="usuario.dono">{{ usuario.dono }}</span>
   
   <form>
   <input type="text" id="usuario.login" value="usuario.login" /><input type="text" id="usuario.nome" value="usuario.nome" /><input type="password" id="usuario.senha" value="usuario.senha" /><input type="checkbox" id="usuario.dono" value="usuario.dono" /><div id="login.invalid" value="login.invalid" /><div id="nome.invalid" value="nome.invalid" /><div id="senha.invalid" value="senha.invalid" />
	
	
	<button (click)="saveUsuario">saveUsuario</button>
	
	<button (click)="cleanForm">cleanForm</button>
	
	</form>`
})
export class usuario implements OnInit
{this.state = {usuario : new Usuario();
		form : new Form();
		constructor() { }

  ngOnInit(): void 
  {
  }
	editUsuario(Usuario usuario) : void 
	{
		//TODO To be implemented
	}
    
	deleteUsuario(Usuario usuario) : void 
	{
		//TODO To be implemented
	}
    
	saveUsuario(Form form) : void 
	{
		//TODO To be implemented
	}
    
	cleanForm(Form form) : void 
	{
		//TODO To be implemented
	}
    
}