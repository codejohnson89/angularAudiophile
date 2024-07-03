import { Injectable } from "@angular/core";
import { data } from "../productData";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  get productData() {
    return data;
  }
}
