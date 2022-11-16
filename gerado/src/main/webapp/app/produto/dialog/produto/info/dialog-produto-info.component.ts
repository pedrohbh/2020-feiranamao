import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-produto-info',
  template: `<mat-dialog-title ></mat-dialog-title><mat-dialog-content ></mat-dialog-content><li id="data?.gordura">{{ data?.gordura }}</li><li id="data?.proteina">{{ data?.proteina }}</li><li id="data?.descricao">{{ data?.descricao }}</li>`
})
export class dialog-produto-info implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
}