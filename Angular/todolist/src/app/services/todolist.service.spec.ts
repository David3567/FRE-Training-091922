// import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TodolistService } from './todolist.service';

describe('TodolistService', () => {
  let service: TodolistService;
  let httpTestingController: HttpTestingController;
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodolistService]
    });

    service = TestBed.inject(TodolistService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getTodos method', () => {
    spyOn(service, 'getTodos').and.returnValue(
      of([{ id: 1, title: 'rsdf', completed: false, userId: 3 }])
    );

    service.getTodos().subscribe(console.log);
    expect(service.getTodos).toHaveBeenCalled();
  });

  it('should send a request by baseUrl', () => {
    service.getTodos().subscribe((data) => console.log('res from backend'));

    const req = httpTestingController.expectOne(baseUrl);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toBe(baseUrl);
  });

  it('should have delete method', () => {
    spyOn(service, 'deleteTodo').and.returnValue(of());

    service.deleteTodo('5').subscribe();
    expect(service.deleteTodo).toHaveBeenCalled();
  });

  it('should send a request by baseUrl', () => {
    service.deleteTodo('4').subscribe((data) => console.log('res from backend'));

    const req = httpTestingController.expectOne(baseUrl + '/4');

    expect(req.request.method).toEqual('DELETE');
    expect(req.request.url).toBe(baseUrl + '/4');
  });
});
