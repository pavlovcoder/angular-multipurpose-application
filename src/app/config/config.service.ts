import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  corporationsUrl: string,
  textfile: string
}

@Injectable()
export class ConfigService {
  public configUrl: string = '../../assets/config.json';

  constructor(private http: HttpClient) { }

  public getConfig(): any {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public getConfig_1(): any {
    return this.http.get(this.configUrl);
  }

  public getConfig_2(): any {
    return this.http.get<Config>(this.configUrl);
  }

  public getConfig_3(): any {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}`,
        `body was ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }

  public makeIntentionalError(): any {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }
  
}
