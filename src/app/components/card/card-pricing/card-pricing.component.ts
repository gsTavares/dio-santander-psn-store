import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input() type: string = '';
  @Input() price: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
