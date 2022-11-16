import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-loja',
  template: `
   
   <form>
   <input type="text" id="loja.nome" value="loja.nome" /><div id="nome.invalid" value="nome.invalid" /><div id="loja.logo" value="loja.logo" /><img src={loja.logo} value="loja.logo" /><input type="text" id="loja.logo" value="loja.logo" /><div id="logo.invalid" value="logo.invalid" />
	
	
	<button (click)="save">save</button>
	
	<button (click)="editImg">editImg</button>
	
	</form>`
})
export class admin-loja implements OnInit
{this.state = {loja : new Loja();
		constructor() { }

  ngOnInit(): void 
  {
  }
	save() : void 
	{
		//TODO To be implemented
	}
    
	editImg() : void 
	{
		//TODO To be implemented
	}
    
}