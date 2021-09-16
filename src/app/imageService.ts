import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ImageLoader } from './iplabs/imageLoader';

export interface ImageObject {
  htmlImage: HTMLImageElement;
  id: number;
}

@Injectable({ providedIn: 'root' })
export class ImageService {
  private imageObjects: ImageObject[] = [];
  private initialized = false;

  public imagesLoaded$ = new BehaviorSubject<boolean>(false);

  constructor(private imageLoader: ImageLoader) {
    this.init();
  }

  private async init() {
    // TODO implement me
    // With the help of imageLoader.ts, try to load all images from imageData.ts and make them available for the application
  }

  public getImageObject(id: number): ImageObject | null {
    // TODO implement me
  }

  public getImageObjects(): ImageObject[] {
    // TODO implement me
  }

  public removeImageObject(id: number) {
    // TODO implement me
  }

  private createImageObject(imageUrl: string, id: number): Promise<ImageObject> {
    // TODO implement me
  }
}
