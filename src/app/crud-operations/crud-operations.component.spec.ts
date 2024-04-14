import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';

import { CrudOperationsComponent } from './crud-operations.component';

fdescribe('CrudOperationsComponent', () => {
  let component: CrudOperationsComponent;
  let fixture: ComponentFixture<CrudOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudOperationsComponent ],
      providers: [ApiService],
      imports: [
        FormsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudOperationsComponent);
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
