interface PersonSearchRequest {
  q: string;
  p?: number;
  per_page?: number;
}

interface PersonSearchResponse {
  people: Array<PersonSearchResult>;
  page: number;
  total: number;
  per_page: number;
}

interface PersonSearchResult {
  id: string;
  full_name: string;
  hbx_member_ids: Array<string>;
  policy_count: number;
}