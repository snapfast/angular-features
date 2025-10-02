import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  async getObject<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Failed to fetch: ${resp.status}`);
    }
    return await resp.json();
  }
}
