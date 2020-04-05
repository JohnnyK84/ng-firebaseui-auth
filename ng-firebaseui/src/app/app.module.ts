import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { SuperSecretComponent } from "./components/super-secret/super-secret.component";
import { AngularFireAuthComponent } from "./components/angular-fire-auth/angular-fire-auth.component";

import { FirebaseuiAngularModule } from "./components/firebaseui-angular/firebaseui-angular.module";
import { NgxAuthModule } from "./components/ngx-auth/ngx-auth.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [AppComponent, SuperSecretComponent, AngularFireAuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxAuthModule,
    FirebaseuiAngularModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
