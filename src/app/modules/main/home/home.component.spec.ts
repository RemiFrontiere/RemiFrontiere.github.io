import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponentDashboard } from './home.component';

describe('HomeComponentDashboard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeComponentDashboard
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponentDashboard);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RemiFrontiereWebSite'`, () => {
    const fixture = TestBed.createComponent(HomeComponentDashboard);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('RemiFrontiereWebSite');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(HomeComponentDashboard);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to RemiFrontiereWebSite!');
  });
});
