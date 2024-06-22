import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectCardsInfo: { title: string, src: string }[] = [
    {
      title: 'My attempt at a Shooting Game',
      src: 'https://www.youtube.com/embed/qzdVKQVFARI',
    },
    {
      title: 'My attempt at a Dark Souls-like Boss Fight',
      src: 'https://www.youtube.com/embed/E4roHcAexVs',
    },
    {
      title: 'Multiplayer Racing Game',
      src: 'https://www.youtube.com/embed/BKo-x25Qi4Q',
    }
  ]

  constructor(public sanitizer: DomSanitizer) {
    
  }
}
