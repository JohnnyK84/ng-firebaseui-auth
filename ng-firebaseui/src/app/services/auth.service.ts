import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/user.model"; // optional

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<User>; //database record

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    // ***SIGNIN WITH EMAIL***
    let email = "bobsemail@mailinator.com";
    let password = "Password.1";
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    console.log(credential);
    return this.updateUserData(credential.user);
    /* ***SIGN IN WITH GOOGLE***
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
    */

    /* ***SIGNIN WITH FACEBOOK***
    const provider = new auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
    */
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    // set is distructive, use merge: true to only update changed properties, not erase/replace
    return userRef.set(data, { merge: true });
  }
  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }
}
