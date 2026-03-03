import { Injectable, signal } from '@angular/core';

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const STORAGE_KEY = 'barrio67_reviews';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private reviewsSignal = signal<Review[]>(this.loadFromStorage());

  reviews = this.reviewsSignal.asReadonly();

  addReview(name: string, rating: number, comment: string): void {
    const review: Review = {
      id: crypto.randomUUID(),
      name,
      rating,
      comment,
      date: new Date().toISOString()
    };
    this.reviewsSignal.update(prev => [review, ...prev]);
    this.saveToStorage();
  }

  private loadFromStorage(): Review[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : this.getDefaultReviews();
    } catch {
      return this.getDefaultReviews();
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.reviewsSignal()));
  }

  private getDefaultReviews(): Review[] {
    return [
      { id: '1', name: 'Sarah M.', rating: 5, comment: 'Amazing atmosphere and the best cocktails in Batroun! Will definitely come back.', date: '2025-02-28T19:00:00.000Z' },
      { id: '2', name: 'Karim L.', rating: 5, comment: 'Cozy vibes, great food, and the live music was fantastic. Perfect for a night out.', date: '2025-02-25T21:30:00.000Z' },
      { id: '3', name: 'Layla H.', rating: 5, comment: 'Found this hidden gem in the Old Souk. Look for the green doors — you won\'t regret it!', date: '2025-02-20T20:15:00.000Z' }
    ];
  }
}
