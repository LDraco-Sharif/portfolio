import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoPageComponent } from "./components/demo-page/demo-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DemoPageComponent]
})
export class AppComponent {
  title = 'portfolio';
}
