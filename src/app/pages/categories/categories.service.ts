import { Injectable } from "@angular/core";
import { data } from "../../../productData";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  get productData() {
    return data;
  }
}
