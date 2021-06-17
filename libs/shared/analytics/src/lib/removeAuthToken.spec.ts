import { removeAuthToken } from './removeAuthToken';

describe('Removing auth token from url', () => {
  it('should remove a token from a url', () => {
    const path = '/admin/agencies/agency-staff?auth-token=abcd123';
    const newPath = '/admin/agencies/agency-staff';

    expect(removeAuthToken(path)).toEqual(newPath);
  });

  it('should return a url as-is with no token', () => {
    const path = '/admin/agencies/agency-staff';
    const newPath = '/admin/agencies/agency-staff';

    expect(removeAuthToken(path)).toEqual(newPath);
  });
});
