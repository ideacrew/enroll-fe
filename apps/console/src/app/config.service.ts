import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  baseApiUrl = `https://preprod-console-api.cme.openhbx.org`;

  constructor() {
    const [environmentService, client] = window.location.host.split('.');

    const [environment, service] = environmentService.split('-');

    console.log({ env: environment, service, client });

    // this.baseApiUrl = `https://${env}-${service}-api.${client}.openhbx.org`;
  }
}
