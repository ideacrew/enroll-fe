/* eslint-disable @typescript-eslint/naming-convention */
export interface Email {
  kind: EmailKind;
  address: string;
  start_on?: string;
  end_on?: string;
}

export const emailKind = ['home', 'work'] as const;
export type EmailKind = (typeof emailKind)[number];
