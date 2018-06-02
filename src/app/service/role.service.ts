import { AppUser } from './../models/app-user';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private db: AngularFireDatabase) {

  }
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name:  user.displayName,
      email: user.email
    });
  }

  get(uid: string) {
    return this.db.object('/users/' + uid);
  }
}