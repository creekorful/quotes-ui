import {Component} from '@angular/core';
import {QuoteDto, QuotesService} from './quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent {

  quotes: QuoteDto[] = [];
  placeholders: QuoteDto[] = [];
  pageSize = 10;
  currentPage = 1;
  loading = false;
  canLoad = true;

  constructor(private _quoteService: QuotesService) {
  }

  loadNext() {
    if (this.loading || !this.canLoad) {
      return;
    }

    this.loading = true;
    this.placeholders = new Array(this.pageSize);
    this._quoteService.getQuotes(this.currentPage, this.pageSize)
      .subscribe(response => {
        this.placeholders = [];
        this.quotes.push(...response.body);
        this.loading = false;

        // determinate if more results are available
        const totalCount = parseInt(response.headers.get('X-Pagination-Count'), 10);
        this.canLoad = (this.currentPage * this.pageSize) < totalCount;
        this.currentPage++;
      });
  }
}
