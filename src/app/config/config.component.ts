import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
})
export class ConfigComponent {
  public error: any;
  public headers: string[];
  public config: Config;

  constructor(private configService: ConfigService) { }

  public clear(): void {
    this.config = undefined;
    this.headers = undefined;
    this.error = undefined;
  }

  public showConfig(): void {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = { ...data },
        error => this.error = error
      );
  }

  public showConfig_v1(): void {
    this.configService.getConfig_1()
      .subscribe((data: Config) => this.config = {
        corporationsUrl: data['corporationsUrl'],
        textfile: data['textfile']
      });
  }

  public showConfig_v2(): void {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = { ...data });
  }

  public showConfigResponse(): void {
    this.showConfigResponse.getConfigResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => {
          `${key}: ${resp.headers.get(key)}`;
        });
        this.config = { ... resp.body };
      });
  }

  public makeError(): void {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
  }

}