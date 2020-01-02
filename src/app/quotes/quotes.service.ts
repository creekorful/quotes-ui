import {Injectable} from '@angular/core';
import {QuotesModule} from './quotes.module';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface QuoteDto {
  id: string;
  text: string;
  source: string;
}

@Injectable({
  providedIn: QuotesModule
})
export class QuotesService {

  constructor(private _httpClient: HttpClient) {
  }

  getQuotes(): Observable<QuoteDto[]> {
    return this._httpClient.get<QuoteDto[]>(environment.apiUrl + '/quotes');
  }
}
