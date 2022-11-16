import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-produto',
  template: `<table>
				<tr>
					<th>{{ table }}</th>
				</tr>
				<tr>
					<td>{{ table }}</td>
				</tr>
			</table><td id="produto.id">{{ produto.id }}</td><td id="produto.name">{{ produto.name }}</td><td id="produto.preco">{{ produto.preco }}</td>
   
   <form>
   <input type="text" id="produto.nome" value="produto.nome" /><div id="nome.invalid" value="nome.invalid" /><div id="produto.url" value="produto.url" /><img src={produto.url} value="produto.url" /><input type="text" id="produto.url" value="produto.url" /><div id="url.invalid" value="url.invalid" /><input type="textarea" id="produto.descricao" value="produto.descricao" /><div id="descricao.invalid" value="descricao.invalid" /><input type="select" id="produto.categoria" value="produto.categoria" /><input type="number" id="produto.estoque" value="produto.estoque" /><div id="estoque.invalid" value="estoque.invalid" /><input type="number" id="produto.custo" value="produto.custo" /><div id="custo.invalid" value="custo.invalid" /><input type="number" id="produto.preco" value="produto.preco" /><div id="preco.invalid" value="preco.invalid" />
	
	
	<button (click)="save">save</button>
	
	<button (click)="cleanForm">cleanForm</button>
	
	</form>`
})
export class admin-produto implements OnInit
{this.state = {produto : new Produto();
		constructor() { }

  ngOnInit(): void 
  {
  }
	edit(Produto produto) : void 
	{
		//TODO To be implemented
	}
    
	delete(Produto produto) : void 
	{
		//TODO To be implemented
	}
    
	save() : void 
	{
		//TODO To be implemented
	}
    
	cleanForm(Object form) : void 
	{
		//TODO To be implemented
	}
    
}