import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { UserComponent } from "./user.component";
import { WidgetComponent } from "./widget.component";
import { routing } from "./app.routing";
import { FormatBoolean } from "./format-boolean.pipe";
import { ModalModule } from "ng2-modal";
import { HttpModule, JsonpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule, FormsModule, routing, ModalModule, HttpModule, JsonpModule],
    declarations: [
        AppComponent, DashboardComponent, UserComponent,
        WidgetComponent, FormatBoolean
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
