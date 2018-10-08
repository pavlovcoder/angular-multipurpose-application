import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./http-client.component.css']
})

export class HttpClientComponent implements OnInit {
  public config: Config;
  public headers: string[];
  public error: any;

  constructor(private configService: ConfigService) {
  }

  public clear(): void {
    this.config = undefined;
    this.error = false;
    this.headers = undefined;
  }

  public showConfig(): void {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data },
        error => this.error = error
      );
  }

  public showConfigResponse(): void {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        this.config = { ... resp.body };
      });
  }

  public makeError(): void {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
    console.log(this.error);
  }

  ngOnInit() {
  }

  /*
  public showConfigResponse(): void {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        this.config = { ... resp.body };
      });
  }
  */
}
