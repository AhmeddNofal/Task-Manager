import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task-App';
  showAddTask: boolean;
  subscription: Subscription;
  
  // any service created must be passed through the constructor in order to be used
  constructor( private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  // the function is called when our custom btnClick event is fired
  toggle() {
    this.uiService.toggleAdd();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
