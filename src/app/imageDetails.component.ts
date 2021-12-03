import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from './imageService';

@Component({
  selector: 'image-details',
  template: `
    <div>
      <button>back to overview</button>
      <button>delete image</button>
    </div>
    <div class="details">
      <p>original width: [width]</p>
      <p>original height: [height]</p>
      <p>file size: [fileSize in MB]</p>
    </div>
    <div>
      <label>Change picture preview size:</label><br />
      <input type="range"/>
    </div>
    <p *ngIf="!image">loading...</p>
    <img *ngIf="image" />
  `
})
export class ImageDetailsComponent {
  // TODO correct typing and initialization
  private id!: any;
  // TODO correct typing and initialization
  public image!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) {}

  // TODO implement me

}
