import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent {
  Property: any = {
    "ID": 1,
    "Name": "Test 1",
    "Type": "Test 2",
    "Price": 999999
  }
}
