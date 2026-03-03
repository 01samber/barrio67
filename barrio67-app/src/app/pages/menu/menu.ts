import { Component, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { MENU_DATA } from '../../data/menu.data';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {
  protected readonly menuData = MENU_DATA;
  private readonly flippedCards = signal<Set<string>>(new Set());

  protected toggleFlip(category: string, itemName: string): void {
    const key = `${category}|${itemName}`;
    const set = new Set(this.flippedCards());
    if (set.has(key)) {
      set.delete(key);
    } else {
      set.add(key);
    }
    this.flippedCards.set(set);
  }

  protected isFlipped(category: string, itemName: string): boolean {
    return this.flippedCards().has(`${category}|${itemName}`);
  }
}
