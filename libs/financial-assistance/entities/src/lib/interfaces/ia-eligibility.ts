export const iaEligibility = ['UnDetermined', 'Yes', 'No'] as const;
export type IaEligibilityKind = (typeof iaEligibility)[number];
