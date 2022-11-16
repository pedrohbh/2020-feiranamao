import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lojas',
  template: `<ng-container ></ng-container><img src={loja.logo}></img><figure ></figure><h3 id="loja.nome">{{ loja.nome }}</h3>`
})
export class lojas implements OnInit
{this.state = {loja : new Loja();
		constructor() { }

  ngOnInit(): void 
  {
  }
}