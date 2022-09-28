import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  baseApiUrl = `https://preprod-console-api.cme.openhbx.org`;

  constructor() {
    const [envService, client] = window.location.host.split('.');

    const [env, service] = envService.split('-');

    console.log({ env, service, client });

    // this.baseApiUrl = `https://${env}-${service}-api.${client}.openhbx.org`;
  }
}
