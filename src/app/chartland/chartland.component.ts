import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts'
import { TopBarComponent } from './top-bar/top-bar.component'
import { BottomBarComponent } from './bottom-bar/bottom-bar.component'

@Component({
  selector: 'app-chartland',
  standalone: true,
  imports: [
    RouterOutlet, NgxEchartsDirective, TopBarComponent, BottomBarComponent,
  ],
  templateUrl: './chartland.component.html',
  styleUrl: './chartland.component.css',
  providers: [
    provideEcharts(),
  ],
})
export class ChartlandComponent {

}
