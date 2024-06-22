import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: {position: string, duration: string, work: string[]}[] = [
    {
      position: 'Software Engineer II (Enosis Solutions)',
      duration: 'Dec 2023 - Present',
      work: [
        'Currently working on a task tracker related applicatiion using ASP.Net Web API and Angular',
        'Worked on rewrite of an existing desktop application to web application using ASP.Net Web API and Angular'
      ] 
    },
    {
      position: 'Software Engineer I (Enosis Solutions)',
      duration: 'Dec 2022 - Dec 2023',
      work: [
        'Improved security of multiple client projects by fixing around 50% of vulnerabilities'
      ] 
    },
    {
      position: 'Game Developer (Arcade Studios BD)',
      duration: 'Oct 2020 - Oct 2021',
      work: [
        'Worked for Arcade'
      ] 
    }
  ];
}
