import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BasicSimpleComponent } from './basic-simple.component'

describe('BasicSimpleComponent', () => {
  let component: BasicSimpleComponent
  let fixture: ComponentFixture<BasicSimpleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSimpleComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(BasicSimpleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
