import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }

  // return an observable of type task
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  removeTask(task: Task): Observable<Task> {
    let reqUrl: string = `${this.url}/${task.id}`;
    return this.http.delete<Task>(reqUrl); 
  }

  updateTask(task: Task): Observable<Task> {
    let reqUrl: string = `${this.url}/${task.id}`;
    return this.http.put<Task>(reqUrl, task, httpOptions);
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.url, task, httpOptions);
  }

}
