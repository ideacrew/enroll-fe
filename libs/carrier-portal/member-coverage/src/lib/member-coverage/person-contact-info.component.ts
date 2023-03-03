import { Person, Address } from '@enroll/carrier-portal/types';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  TRANSLOCO_SCOPE,
  Translation,
  TranslocoModule,
} from '@ngneat/transloco';
import { NgFor, NgIf } from '@angular/common';
import { scopeLoader } from '@enroll/shared/i18n';

@Component({
  selector: 'enroll-person-contact-info',
  standalone: true,
  imports: [NgIf, NgFor, TranslocoModule],
  templateUrl: './person-contact-info.component.html',
  styleUrls: ['./member-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'memberCoverage',
        loader: scopeLoader(
          (lang: string, root: string) =>
            import(`./${root}/${lang}.json`) as Promise<Translation>
        ),
      },
    },
  ],
})
export class PersonContactInfoComponent {
  @Input() person!: Person;

  fullAddress(address: Address) {
    let adrString = '';
    if (address) {
      adrString += `${address.address_1},`;

      if (address.address_2) {
        adrString += `${address.address_2},`;
      }

      adrString += `${address.city}, ${address.state} ${address.zipcode}`;
    }
    return adrString;
  }

  hasContactInfo(): boolean {
    return (
      !!this.person.home_address ||
      !!this.person.mailing_address ||
      !!this.person.home_phone ||
      !!this.person.mobile_phone ||
      !!this.person.home_email
    );
  }
}
