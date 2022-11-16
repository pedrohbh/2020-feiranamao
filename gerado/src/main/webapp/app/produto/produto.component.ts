import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'produto',
  template: `< id="loja.nome">{{ loja.nome }}</><ng-container ></ng-container><ng-container ></ng-container><ng-template ></ng-template><f-produto-item ></f-produto-item>
	
	<button (click)="fecharPedido">fecharPedido</button>
	
	`
})
export class produto implements OnInit
{this.state = {loja : new Loja();
		constructor() { }

  ngOnInit(): void 
  {
  }
	fecharPedido() : void 
	{
		//TODO To be implemented
	}
    
}