import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginatedData, IPagination } from 'src/app/core/models/pagination';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TrayService {
  private apiUrl: string = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getDataTray(
    url: string,
    pagination: IPagination,
    filters?: any
  ): Observable<IPaginatedData> {
    let finalUrl: string;
    finalUrl = `${this.apiUrl}${url}?page=${pagination.page}&limit=${pagination.limit}`;
    for (const key in filters) {
      if (filters[key]) {
        finalUrl += `&filter.${key}=${filters[key]}`;
      }
    }
    // console.log(finalUrl);
    return this._http.get<IPaginatedData>(finalUrl);
  }
}
