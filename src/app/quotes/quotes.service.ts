import {Injectable} from '@angular/core';
import {QuotesModule} from './quotes.module';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
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

  getQuotes(paginationPage: number, paginationSize: number): Observable<HttpResponse<QuoteDto[]>> {
    return this._httpClient.get<QuoteDto[]>(environment.apiUrl + '/quotes' +
      '?pagination-page=' + paginationPage +
      '&pagination-size=' + paginationSize, {observe: 'response'});
  }
}
