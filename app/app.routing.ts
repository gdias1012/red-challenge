import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent }      from "./dashboard.component";
import { UserComponent }      from "./user.component";
import { WidgetComponent }      from "./widget.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "widget", component: WidgetComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
