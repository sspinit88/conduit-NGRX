import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() {
  }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  }

  get(key: string): any {
    try {
      if (key != null) {
        const res: string | null = localStorage.getItem(key);

        if (res != null) {
          JSON.parse(res);
        }

        return res
      }
    } catch (e) {
      console.error('Error getting data from localStorage:', e);
      return null;
    }
  }
}
