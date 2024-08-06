import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer } from '@angular/platform-browser';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatChipsModule],
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

  

  personalProjectCardsInfo: personalProjectCardsModel[] = [
    {
      title: 'Chat-App',
      details: [
        'Created with Angular for frontend and ASP .Net Web API for backend',
        'Used EF Core as the OR/M and MS SQL Server for Database Management',
        'Implements Real-time chat using SignalR'
      ],
      tags: ['ASP .Net Web API', 'SignalR', 'Angular', 'HTML', 'CSS', 'TypeScript'],
      links: [
        {
          name: 'Frontend',
          link: 'https://github.com/LDraco-Sharif/Chat-App-Frontend'
        },
        {
          name: 'Backend',
          link: 'https://github.com/LDraco-Sharif/Chat-App-Backend'
        }
      ]
    },
    {
      title: 'Bashosthan: An Android App for Hall Seat Allotment System',
      details: [
        'Created a mobile application for hall management using Android Studio',
        'Used MySQL and XAMPP for Database management',
      ],
      tags: ['Java', 'Android Studio']
    },
    {
      title: 'Classification of 5 Stages of Skin Cancer using Machine Learning Algorithms',
      details: [
        'Created a deep learning model using Tensorflow',
        'Used MNIST dataset on different stages of SKin Cancer as training and testing data',
      ],
      tags: ['Python', 'Tensorflow']
    },
    {
      title: 'AskAnything: A Question-Answering Website',
      details: [
        'Collaborated on creating a Question-Answering website, similar to Quora',
        'Implemented with basic HTML, CSS and PHP',
        'Added the functionality of taking tests in the website as well'
      ],
      tags: ['HTML', 'CSS', 'PHP', 'MySQL']
    },
    {
      title: 'Word-Finder (Desktop Application)',
      details: [
        'Collaborated on creating a desktop application to find all possible valid English words based on letters from input',
        'Used an existing SQL dictionary to check for valid English words',
      ],
      tags: ['Java', 'MySQL']
    }
  ]

  constructor(public sanitizer: DomSanitizer) {
    
  }
}

interface personalProjectCardsModel  { 
  title: string, 
  details: string[], 
  tags: string[], 
  links?: {
    name: string,
    link: string
  }[]
}