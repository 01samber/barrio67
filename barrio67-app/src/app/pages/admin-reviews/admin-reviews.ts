import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ReviewService } from '../../services/review.service';

// Change this in admin-reviews.ts to your preferred admin PIN
const ADMIN_PIN = 'barrio67';

@Component({
  selector: 'app-admin-reviews',
  standalone: true,
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './admin-reviews.html',
  styleUrl: './admin-reviews.scss'
})
export class AdminReviewsComponent {
  protected reviewService = inject(ReviewService);
  protected authenticated = signal(false);
  protected pin = signal('');
  protected error = signal('');

  protected checkAuth(): void {
    if (this.pin() === ADMIN_PIN) {
      this.authenticated.set(true);
      this.error.set('');
    } else {
      this.error.set('Incorrect PIN. Please try again.');
    }
  }

  protected formatDate(iso: string): string {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
