import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: `
   
   <form>
   <input type="text" id="formLogin.name" value="formLogin.name" /><input type="password" id="formLogin.password" value="formLogin.password" /><p id="account.USERNAMEINCORRET" value="account.USERNAMEINCORRET" />
	
	
	<button (click)="validLogin">validLogin</button>
	
	</form>`
})
export class login implements OnInit
{this.state = {formLogin : new Form();
		constructor() { }

  ngOnInit(): void 
  {
  }
	validLogin() : void 
	{
		//TODO To be implemented
	}
    
}