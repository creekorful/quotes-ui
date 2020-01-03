import {Component, Input} from '@angular/core';
import {QuoteDto} from './quotes.service';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.scss']
})
export class QuoteItemComponent {

  @Input() quote: QuoteDto;

  constructor() {
  }

  get source() {
    return this.quote.source !== '' ? this.quote.source : 'Unknown';
  }
}
