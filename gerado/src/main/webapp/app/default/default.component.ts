import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'default',
  template: `<f-navbar ></f-navbar><router-outlet ></router-outlet>`
})
export class default implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
}