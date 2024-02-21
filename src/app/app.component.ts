import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoBComponent } from "./empleado-b/empleado-b.component";
import { EmpleadoCComponent } from "./empleado-c/empleado-c.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, EmpleadosComponent, EmpleadoBComponent, EmpleadoCComponent]
})
export class AppComponent {
  title = 'Conceptos';
}
