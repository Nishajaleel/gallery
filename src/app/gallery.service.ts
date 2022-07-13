import {HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  viewGallery=()=>{

    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
