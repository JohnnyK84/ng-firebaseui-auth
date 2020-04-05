import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SuperSecretComponent } from "./components/super-secret/super-secret.component";
import { AuthGuard } from "./services/auth.guard";
import { NgxAuthComponent } from "./components/ngx-auth/ngx-auth.component";
import { AngularFireAuthComponent } from "./components/angular-fire-auth/angular-fire-auth.component";
import { FirebaseuiAngularComponent } from "./components/firebaseui-angular/firebaseui-angular.component";

const routes: Routes = [
  {
    path: "secret",
    component: SuperSecretComponent,
    canActivate: [AuthGuard] //front end guard to protect against unauthorized access
  },
  {
    path: "angularfire-auth",
    component: AngularFireAuthComponent
  },
  {
    path: "ngx-auth",
    component: NgxAuthComponent
  },
  {
    path: "firebaseui-angular",
    component: FirebaseuiAngularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
