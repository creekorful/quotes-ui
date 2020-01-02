import {Component, OnInit} from '@angular/core';
import {QuoteDto, QuotesService} from './quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {

  quotes: QuoteDto[] = [];

  constructor(private _quoteService: QuotesService) {
  }

  ngOnInit() {
    this._quoteService.getQuotes().subscribe(quotes => this.quotes = quotes);
  }
}
