import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, Navbar, Footer],
  templateUrl: './reservations.html',
  styleUrl: './reservations.scss'
})
export class ReservationsComponent {
  private fb = inject(FormBuilder);
  private reservationService = inject(ReservationService);

  protected submitted = false;

  protected form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[\d\s\-\+]+$/)]],
    date: ['', Validators.required],
    time: ['', Validators.required],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(20)]],
    notes: ['']
  });


  protected onSubmit(): void {
    if (this.form.invalid) return;
    const value = this.form.getRawValue();
    this.reservationService.addReservation({
      name: value.name!,
      email: value.email!,
      phone: value.phone!,
      date: value.date!,
      time: value.time!,
      guests: value.guests!,
      notes: value.notes || ''
    });
    this.submitted = true;
    this.form.reset({ guests: 2 });
  }
}
