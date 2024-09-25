import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']  // Corrected here
})
export class CardComponent {
  @Input() data: any;
}
