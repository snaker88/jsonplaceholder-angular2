import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs';
import { map } from 'rxjs';

export interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    bs: string
  }
}
export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Comment {
  postId?: number
  id?: number
  name?: string
  email?: string
  body?: string
}


@Injectable({
  providedIn: 'root'
})

export class JsonRequestsService {
  url = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {

  }

  fetchUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users')
    .pipe(delay(300))
 
  }

  getUserById(id: number): Observable<User[]>{
    return this.http.get<User[]>(this.url + 'users')
    .pipe(map(user=>user.filter(user=>user.id===id)), delay(300))
    
  }

  getPostById(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(this.url + 'posts')
    .pipe(map(post=>post.filter(post=>post.userId===id)), delay(300))
    
  }
  getPostByIdPost(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(this.url + 'posts')
    .pipe(map(post=>post.filter(post=>post.id===id)), delay(300))
    
  }

  getCommentById(id: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url + 'comments')
    .pipe(map(post=>post.filter(post=>post.postId===id)), delay(300))
    
  }

  addComment(commetn: Comment[]): Observable<Comment> {
    return this.http.post<Comment>(this.url + 'Comments', commetn)
  }
  
}
