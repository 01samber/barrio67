import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-preview.html',
  styleUrl: './menu-preview.scss',
})
export class MenuPreview {}
