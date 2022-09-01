import { environment } from '../environments/environment';

export const sessionRoutes = {
  login: `${environment.baseApiUrl}/sessions`,
  refresh: `${environment.baseApiUrl}/sessions/refresh`,
};

export const peopleRoutes = {
  search: `${environment.baseApiUrl}/transaction_management/people/search`,
  show: (id: string) =>
    `${environment.baseApiUrl}/transaction_management/people/${id}`,
};

export const enrollmentTransactionRoutes = {
  show: (id: string) =>
    `${environment.baseApiUrl}/transaction_management/enrollment_transactions/${id}`,
};
