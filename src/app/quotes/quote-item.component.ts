import {Component, Input, OnInit} from '@angular/core';
import {QuoteDto} from './quotes.service';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.scss']
})
export class QuoteItemComponent implements OnInit {

  @Input() quote: QuoteDto;

  constructor() {
  }

  ngOnInit() {
    if (this.quote === undefined) {
      this.quote = {
        id: '',
        text: '',
        source: ''
      };
    }
  }

  get source() {
    return this.quote.source !== '' ? this.quote.source : 'Unknown';
  }
}
