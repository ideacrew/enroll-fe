import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: string;
  refreshToken!: string;

  constructor(private http: HttpClient) {}
}
