import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  template: `<ng-container ></ng-container><table>
				<tr>
					<th>{{ table }}</th>
				</tr>
				<tr>
					<td>{{ table }}</td>
				</tr>
			</table><ng-container ></ng-container><td id="produto.name">{{ produto.name }}</td><td id="produto.quantidade">{{ produto.quantidade }}</td><td id="produto.valorUnitario">{{ produto.valorUnitario }}</td><td id="produto.valorTotal">{{ produto.valorTotal }}</td><ng-template ></ng-template>
   
   <form>
   <input type="textarea" id="descricao" value="descricao" />
	
	
	<button (click)="enviarPedido">enviarPedido</button>
	
	</form>`
})
export class cart implements OnInit
{this.state = {descricao : "";
		produto : new Produto();
		constructor() { }

  ngOnInit(): void 
  {
  }
	enviarPedido(String descricao) : void 
	{
		//TODO To be implemented
	}
    
}