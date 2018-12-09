import { Component } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  providers: [ DownloaderService ]
})

export class DownloaderComponent {
  public contents: string = undefined;
  constructor(private downloaderService: DownloaderService) { }

  public clear(): void {
    this.contents = undefined;
  }

  public download(): void {
    this.downloaderService.getTextFile('assets/textfile.txt')
      .subscribe(results => this.contents = results);
  }
}