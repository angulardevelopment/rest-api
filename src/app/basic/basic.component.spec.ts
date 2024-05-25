import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';

import { BasicComponent } from './basic.component';

fdescribe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicComponent ],
      providers: [ApiService],
      imports: [
        FormsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let service = TestBed.inject(ApiService);
spyOn(service, 'getRequest').and.returnValue(of({}))
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    let service = TestBed.inject(ApiService);
spyOn(service, 'getRequest').and.returnValue(of({}))
component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
