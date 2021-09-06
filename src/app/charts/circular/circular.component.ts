import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circular-progress',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  strokeDasharray: number;
  strokeOffset: number;
  @Input() valuePct: number;
  @Input() height: number = 200;
  xy: number;
  radius: number;

  constructor() { }

  ngOnInit(): void {
    this.printPercentage();
  }

  printPercentage() {
    this.xy = this.height / 2;
    this.radius = this.xy - 10;

    if(this.valuePct < 0) this.valuePct = 0;
    if(this.valuePct > 100) this.valuePct = 100;

    this.strokeDasharray = Math.PI*(this.radius*2);
    let pct = ((100 - this.valuePct) / 100) * this.strokeDasharray;
    this.strokeOffset = pct;
  }

}
