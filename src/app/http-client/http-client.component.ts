import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  public config: Config;
  public headers: string[];

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  public showConfigResponse(): void {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        this.config = { ... resp.body };
      });
  }

}
