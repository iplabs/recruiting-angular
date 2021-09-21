import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
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
    public imageService: ImageService,
    private router: Router,
    private zone: NgZone
  ) {}

  // In Stackblitz, dynamic [routerLink]'s seem to cause problems because they run outside the zone.
  // Therefore, please use this method here for the navigation.'
  public goToDetails(id: number) {
    this.zone.run(() => {
      this.router.navigate(['/image/' + id]);
    });
  }

  // TODO implement me
}
