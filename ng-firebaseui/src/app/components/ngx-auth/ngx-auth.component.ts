import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-ngx-auth",
  templateUrl: "./ngx-auth.component.html",
  styleUrls: ["./ngx-auth.component.css"]
})
export class NgxAuthComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  printUser(event) {
    console.log(event);
  }
}
