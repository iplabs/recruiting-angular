import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ImageLoader {
  constructor(
    private httpClient: HttpClient
  ) {}

  public async loadImageAsDataURL(url: string): Promise<string> {
    let result: Blob;
    try {
      result = await this.httpClient.get(url, {responseType: "blob"}).toPromise();
      return await this.readBlobAsDataURL(result);
    } catch (error) {
      throw new Error("error");
    }
  }

  public getFileSizeFromDataUrl(dataUrl: string): number {
    const separator = ";base64,";
    const index = dataUrl.indexOf(";base64,");
    if (index === -1) {
      throw new Error("Can't decode data url");
    }
    const data = dataUrl.substr(index + separator.length);
    const decoded = atob(data);
    return decoded.length;
  }

  private readBlobAsDataURL(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let imageData: string;

      reader.addEventListener("load", () => {
        imageData = reader.result as string;
        resolve(imageData);
      }, false);

      reader.addEventListener("error", (error) => {
        reject(error);
      });

      reader.readAsDataURL(blob);
    });
  }
}
