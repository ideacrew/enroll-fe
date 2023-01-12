export const gender = ['male', 'female'] as const;

export type GenderKind = (typeof gender)[number];
