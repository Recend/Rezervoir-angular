import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.css']
})
export class RainComponent implements OnInit {
  public talpa: number | null = null;
  public greitis: number | null = null;
  public laikas: number | null = null;
  public rezultatas: number | null = null;


  constructor() {
  }

  ngOnInit(): void {
  }

  public skaiciuoti() {
    if (this.talpa != null && this.laikas != null && this.greitis) {
      this.rezultatas = Number((100 * (this.greitis * this.laikas)) / this.talpa);
    }
  }



}
