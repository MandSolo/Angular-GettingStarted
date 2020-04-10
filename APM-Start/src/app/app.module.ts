import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListCompnent } from "./products/product-list.component";

@NgModule({
  declarations: [AppComponent, ProductListCompnent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
