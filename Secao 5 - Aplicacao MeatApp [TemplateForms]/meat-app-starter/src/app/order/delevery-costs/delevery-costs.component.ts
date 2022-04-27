import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-delevery-costs',
  templateUrl: './delevery-costs.component.html'
})
export class DeleveryCostsComponent implements OnInit {
  @Input() delivery: number;
  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }
}
