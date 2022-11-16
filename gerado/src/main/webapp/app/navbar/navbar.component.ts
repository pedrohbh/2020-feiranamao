import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
	
	<button (click)="logout">logout</button>
	
	`
})
export class navbar implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
	logout() : void 
	{
		//TODO To be implemented
	}
    
}