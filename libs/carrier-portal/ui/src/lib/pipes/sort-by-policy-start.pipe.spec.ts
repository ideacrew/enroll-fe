/* eslint-disable @typescript-eslint/naming-convention */
import { SortByPolicyStartPipe } from './sort-by-policy-start.pipe';

describe('SortByPolicyStartPipe', () => {
  let pipe: SortByPolicyStartPipe;

  beforeEach(() => {
    pipe = new SortByPolicyStartPipe();
  });

  it('sorts policies by coverage start', () => {
    const policy1 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-03-01',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Submitted',
      hbx_assigned_id: 'Policy 1',
    };
    const policy2 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-04-01',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Submitted',
      hbx_assigned_id: 'Policy 2',
    };
    const policies = [policy1, policy2];
    expect(pipe.transform(policies)[0].hbx_assigned_id).toBe('Policy 2');
  });

  it('among policies with the same coverage start, it puts cancels last', () => {
    const policy1 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-03-01',
          coverage_end: '2021-03-01',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Canceled',
      hbx_assigned_id: 'Policy 1',
    };
    const policy2 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-03-01',
          coverage_end: '2021-03-31',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Terminated',
      hbx_assigned_id: 'Policy 2',
    };
    const policies = [policy1, policy2];
    expect(pipe.transform(policies)[0].hbx_assigned_id).toBe('Policy 2');
  });

  it('among policies with the same coverage start, it puts terminations after actives', () => {
    const policy1 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-03-01',
          coverage_end: '2021-03-11',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Terminated',
      hbx_assigned_id: 'Policy 1',
    };
    const policy2 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-03-01',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Submitted',
      hbx_assigned_id: 'Policy 2',
    };
    const policies = [policy1, policy2];
    expect(pipe.transform(policies)[0].hbx_assigned_id).toBe('Policy 2');
  });

  it('among policies with the same coverage start, it puts submitted or active policies first', () => {
    const policy1 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-03-01',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Reinstated',
      hbx_assigned_id: 'Policy 1',
    };
    const policy2 = {
      enrollees: [
        {
          hbx_member_id: '1',
          coverage_start: '2021-03-01',
        },
      ],
      subscriber_hbx_member_id: '1',
      status: 'Submitted',
      hbx_assigned_id: 'Policy 2',
    };
    const policies = [policy1, policy2];
    expect(pipe.transform(policies)[0].hbx_assigned_id).toBe('Policy 2');
  });
});
