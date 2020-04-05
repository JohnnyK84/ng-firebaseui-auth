import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  links = [
    {
      path: "/angularfire-auth",
      name: "angular-fire Module"
    },
    {
      path: "/ngx-auth",
      name: "ngx-auth Module"
    },
    {
      path: "/firebaseui-angular",
      name: "firebaseUi-Angular Module"
    },
    {
      path: "/secret", //secret link must be authorized
      name: "Secret Link"
    }
  ];

  constructor(public auth: AuthService) {}
}
