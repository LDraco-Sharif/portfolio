import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { EducationComponent } from "../education/education.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-demo-page',
    standalone: true,
    templateUrl: './demo-page.component.html',
    styleUrl: './demo-page.component.css',
    imports: [
        MatTabsModule,
        MatCardModule,
        EducationComponent,
        ProjectsComponent,
        ExperienceComponent,
        MatIconModule,
        MatButtonModule,
        CommonModule
    ]
})

export class DemoPageComponent {
    readonly socialLinks: {url: string, class: string}[] = [
        {
            url: 'mailto:shariful.islam.msi47@gmail.com',
            class: 'gmail-icon'
        },
        {
            url: 'https://www.linkedin.com/in/md-shariful-islam-00514a244',
            class: 'linkedin-icon'
        },
        {
            url: 'https://github.com/LDraco-Sharif',
            class: 'github-icon'
        },
        {
            url: 'https://www.youtube.com/@sharif47',
            class: 'yt-icon'
        },
    ]
}

