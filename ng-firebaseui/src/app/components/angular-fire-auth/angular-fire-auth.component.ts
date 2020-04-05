import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-angular-fire-auth",
  templateUrl: "./angular-fire-auth.component.html",
  styleUrls: ["./angular-fire-auth.component.css"]
})
export class AngularFireAuthComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
