import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DemoPipe } from "./demo";
import { DemoPipe1 } from "./demo-pipe1";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DemoPipe, DemoPipe1],
  bootstrap: [AppComponent]
})
export class AppModule {}
