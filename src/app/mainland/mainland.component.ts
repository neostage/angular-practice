import { Component } from '@angular/core'
import { BottomBarComponent } from './bottom-bar/bottom-bar.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-mainland',
  standalone: true,
  imports: [
    RouterOutlet,
    TopBarComponent,
    BottomBarComponent,
  ],
  templateUrl: './mainland.component.html',
  styleUrl: './mainland.component.css',
})
export class MainlandComponent {

}
