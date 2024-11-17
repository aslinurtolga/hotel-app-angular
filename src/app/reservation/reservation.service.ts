import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  // CRUD
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // read
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  // create
  addReservations(reservation: Reservation): void {
    this.reservations.push(reservation);
  }
  // update
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
  }
  // update
  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(
      (res) => res.id === updatedReservation.id
    );
    this.reservations[index] = updatedReservation;
  }
}
