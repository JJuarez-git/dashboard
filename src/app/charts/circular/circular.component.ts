import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circular-progress',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  strokeOffset: number;
  @Input() valuePct: number;

  constructor() { }

  ngOnInit(): void {
    this.printPercentage();
  }

  printPercentage() {
    if(this.valuePct < 0) this.valuePct = 0;
    if(this.valuePct > 100) this.valuePct = 100;

    let c = Math.PI*(90*2);
    let pct = ((100 - this.valuePct) / 100) * c;
    this.strokeOffset = pct;
  }

}
