import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JsonFileLoaderService {
  constructor(private http: HttpClient) {}

  public loadJson(filePath: string): Observable<any> {
    return this.http.get(filePath);
  }
}
