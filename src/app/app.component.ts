import { Component } from '@angular/core';

export class Me {
  constructor(
    public name: string,
    public pass: string
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Me('为为', '111');
  agian(){
    this.model=new Me('','')
  }
  get diagnostic() { return JSON.stringify(this.model); }
}



