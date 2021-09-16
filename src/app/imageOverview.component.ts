import { Component } from '@angular/core';
import { ImageService } from './imageService';

@Component({
  selector: 'image-overview-component',
  template: `
    <h1>Image Overview</h1>
    <p>Click on an image for details</p>
    <div class="imagesContainer">
      <p *ngIf="images.length === 0">loading...</p>
      <div class="images"></div>
    </div>
  `
})
export class ImageOverviewComponent {
  public thumbnailSize = 100;
  // TODO correct typing
  public images: any[] = [];

  constructor(
    public imageService: ImageService
  ) {}

  // TODO implement me
}
