import { Component } from '@angular/core';
import { GALLERY_ITEMS } from '../../data/gallery.data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly galleryItems = GALLERY_ITEMS;
}
