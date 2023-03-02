import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

import { months } from '@enroll/shared/types';
import {
  SlcspEstimate,
  SlcspEstimateService,
} from '@enroll/slcsp-calculator/data-access';
import { HouseholdService } from '@enroll/slcsp-calculator/household-form';
import { HouseholdFormValue } from '@enroll/slcsp-calculator/types';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  householdService = inject(HouseholdService);
  slcspEstimateService = inject(SlcspEstimateService);
  monthList = months;
  canShowErrorMsg$ = new BehaviorSubject(false);
  slcspValues$ = new BehaviorSubject<SlcspEstimate | undefined>(undefined);

  transformedValue: HouseholdFormValue =
    this.householdService.getTransformedValue();

  estimate$: Observable<SlcspEstimate> =
    this.slcspEstimateService.getSlcspEstimate(
      // Usually typecasting isn't great
      this.transformedValue
    );

  @ViewChild('pdfTable', { static: false }) pdfTable:
    | ElementRef<HTMLTableElement>
    | undefined;

  @ViewChild('results', { static: false }) results!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.estimate$.subscribe({
      next: (response) => {
        this.slcspValues$.next(response);
      },
      error: () => this.canShowErrorMsg$.next(true),
    });
  }

  print(): void {
    window.print();
  }

  isNumber(value: number | null | string): boolean {
    return typeof value === 'number';
  }

  isString(value: number | null | string): boolean {
    return typeof value === 'string';
  }

  async saveAsPDF(): Promise<void> {
    const document = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      format: [8.5, 11],
    });

    const table = this.pdfTable?.nativeElement;
    const resultsContainer = this.results.nativeElement;

    if (table !== undefined) {
      console.log('Generating table');
      // await document.html(table);

      console.log(resultsContainer);

      await document.html(resultsContainer, {
        // eslint-disable-next-line unicorn/prevent-abbreviations
        callback: function (doc) {
          doc.save('results.pdf');
        },
        x: 10,
        y: 10,
      });
    }

    // document.save('slcsp-estimate.pdf');
  }

  saveAsAutoTable(): void {
    const document = new jsPDF();

    if (this.pdfTable === undefined) {
      return;
    } else {
      document.text('From HTML with CSS', 14, 22);
      autoTable(document, { html: this.pdfTable.nativeElement });
      document.save('slcsp-estimate.pdf');
    }
  }
}
