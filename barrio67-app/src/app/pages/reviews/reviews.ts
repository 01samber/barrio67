import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReactiveFormsModule, Navbar, Footer],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class ReviewsComponent {
  private fb = inject(FormBuilder);

  protected form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    comment: ['', [Validators.required, Validators.minLength(10)]]
  });

  protected reviewService = inject(ReviewService);

  protected onSubmit(): void {
    if (this.form.invalid) return;
    const { name, rating, comment } = this.form.getRawValue()!;
    this.reviewService.addReview(name!, rating!, comment!);
    this.form.reset({ rating: 5 });
  }
}
