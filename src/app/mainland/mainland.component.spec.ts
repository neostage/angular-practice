import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainlandComponent } from './mainland.component'

describe('MainlandComponent', () => {
  let component: MainlandComponent
  let fixture: ComponentFixture<MainlandComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainlandComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MainlandComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
