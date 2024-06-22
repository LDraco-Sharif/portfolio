import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { EducationComponent } from "../education/education.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from '../skills/skills.component';
import { MatCardModule } from '@angular/material/card';
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
        SkillsComponent
    ]
})
export class DemoPageComponent {
    state = "open";
    changeState(): void {
        (this.state == "closed") ? this.state = "open" : this.state = "closed";
      }
}
