import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ChartlandComponent } from './chartland.component'

describe('ChartlandComponent', () => {
  let component: ChartlandComponent
  let fixture: ComponentFixture<ChartlandComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartlandComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(ChartlandComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
