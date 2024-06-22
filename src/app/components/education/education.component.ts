import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educationCardsInfo:{title: string, content: string}[] = [
{
  title: 'Chittagong University of Engineering and Technology (CUET)',
  content: 'Bachelor of Science | February 2017-2022'
},
{
  title: 'Notre Dame College',
  content: 'HSC | 2016'
},
{
  title: 'Mirpur Bangla School and College',
  content: 'SSC | 2014'
},
  ];
}
