import { Component, Input, OnInit } from '@angular/core';
import { ImageList } from '../../models/imageList';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {

  @Input() imageList: ImageList [];
  constructor() { }

  ngOnInit(): void {
  }

}
