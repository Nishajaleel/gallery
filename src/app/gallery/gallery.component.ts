import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private api:GalleryService) { 
    api.viewGallery().subscribe(
      (response)=>{this.data=response}
    )
  }

  ngOnInit(): void {
  }
data:any=[]

}
