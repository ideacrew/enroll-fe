/* eslint-disable @typescript-eslint/naming-convention */
import { Pipe, PipeTransform } from '@angular/core';
import { DateString } from '@enroll/carrier-portal/types';

export type SortableEnrollee = {
  coverage_start: DateString;
  coverage_end?: DateString;
  hbx_member_id: string;
};

export type SortablePolicy = {
  subscriber_hbx_member_id: string;
  enrollees: SortableEnrollee[];
  status: string;
};

@Pipe({
  name: 'sortByPolicyStart',
  standalone: true,
})
export class SortByPolicyStartPipe implements PipeTransform {
  transform<T extends SortablePolicy>(policies: T[]): T[] {
    return [...policies].sort((a, b) => {
      const startDateA = this.policyStartDate(a);
      const startDateB = this.policyStartDate(b);

      // If they start on different dates, just sort by coverage start
      if (startDateA !== startDateB) {
        return startDateA <= startDateB ? 1 : -1;
      }

      // If only one of them is canceled, it comes last
      if (this.isCanceled(a) && !this.isCanceled(b)) {
        return 1;
      } else if (!this.isCanceled(a) && this.isCanceled(b)) {
        return -1;
      }

      // If only one of them is terminated, it comes last
      if (this.isTerminated(a) && !this.isTerminated(b)) {
        return 1;
      } else if (!this.isTerminated(a) && this.isTerminated(b)) {
        return -1;
      }

      // If the statuses are the same, do nothing
      if (a.status === b.status) {
        return 0;
      }

      // Otherwise, prefer based on certain statuses like 'submitted'
      if (this.isSubmitted(a)) {
        return -1;
      } else if (this.isSubmitted(b)) {
        return 1;
      }
      return 0;
    });
  }

  isSubmitted(policy: SortablePolicy): boolean {
    return policy.status.toLowerCase() === 'submitted';
  }

  isTerminated(policy: SortablePolicy): boolean {
    const subscriber = policy.enrollees.find(
      (a) => a.hbx_member_id === policy.subscriber_hbx_member_id
    );
    if (subscriber) {
      const cEnd = subscriber.coverage_end;
      if (cEnd) {
        return true;
      }
    }
    return false;
  }

  isCanceled(policy: SortablePolicy): boolean {
    const subscriber = policy.enrollees.find(
      (a) => a.hbx_member_id === policy.subscriber_hbx_member_id
    );
    if (subscriber) {
      const cEnd = subscriber.coverage_end;
      if (cEnd) {
        return cEnd <= subscriber.coverage_start;
      }
    }
    return false;
  }

  policyStartDate(policy: SortablePolicy): string {
    const enrollees = policy.enrollees;
    return enrollees
      .map((a) => a.coverage_start)
      .sort()
      .reverse()[0];
  }
}
