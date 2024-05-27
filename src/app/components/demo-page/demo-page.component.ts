import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { EducationComponent } from "../education/education.component";
@Component({
    selector: 'app-demo-page',
    standalone: true,
    templateUrl: './demo-page.component.html',
    styleUrl: './demo-page.component.css',
    imports: [
        MatTabsModule,
        EducationComponent
    ]
})
export class DemoPageComponent {

}
