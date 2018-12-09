import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  public getTextFile(filename: string): any {
    return this.http.get(filename, { responseType: 'text' })
      .pipe(
        tap(
          data => this.log(filename, data),
          error => this.logError(filename, error)
        )
      );
  }

  private log(filename: string, data: string): void {
    const message = `DownloaderService downloaded "${filename}" and got "${data}".`;
    this.messageService.add(message);
  }

  private logError(filename: string, error: any): void {
    const message = `DowloaderService downloaded "${filename}"; got error "${error.message}".`;
    console.error(message);
    this.messageService.add(message);
  }
}
