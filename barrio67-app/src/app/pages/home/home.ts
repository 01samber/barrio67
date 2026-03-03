import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Experience } from '../../components/experience/experience';
import { Gallery } from '../../components/gallery/gallery';
import { Visit } from '../../components/visit/visit';
import { Social } from '../../components/social/social';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, About, Experience, Gallery, Visit, Social, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
