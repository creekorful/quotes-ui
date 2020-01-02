import {Injectable} from '@angular/core';
import {QuotesModule} from './quotes.module';
import {Observable, of} from 'rxjs';

export interface QuoteDto {
  id: number;
  text: string;
}

@Injectable({
  providedIn: QuotesModule
})
export class QuotesService {

  constructor() {
  }

  getQuotes(): Observable<QuoteDto[]> {
    return of([{id: 1, text: 'Test #1'}, {id: 2, text: 'Test #2'}]);
  }
}
