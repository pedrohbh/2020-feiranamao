import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart-item',
  template: `<td id="produto.name">{{ produto.name }}</td><td id="produto.valorUnitario">{{ produto.valorUnitario }}</td><td id="produto.valorTotal">{{ produto.valorTotal }}</td><td id="produto.quantidade">{{ produto.quantidade }}</td>`
})
export class cart-item implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
}