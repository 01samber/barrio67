import { Injectable, signal } from '@angular/core';

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
  createdAt: string;
}

const STORAGE_KEY = 'barrio67_reservations';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private reservationsSignal = signal<Reservation[]>(this.loadFromStorage());

  reservations = this.reservationsSignal.asReadonly();

  addReservation(data: Omit<Reservation, 'id' | 'createdAt'>): void {
    const reservation: Reservation = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    this.reservationsSignal.update(prev => [...prev, reservation]);
    this.saveToStorage();
  }

  private loadFromStorage(): Reservation[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.reservationsSignal()));
  }
}
