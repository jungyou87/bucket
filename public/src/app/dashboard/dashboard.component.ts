import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BucketService } from '../bucket.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _bucketService : BucketService,
    private _router : Router
  ) { }

  user = {
    _id : ''
  }

  otherUsers = []

  bucket = {}

  buckets = []

  ngOnInit() {
    this.user = this._userService.getCurrentUser()
    
    if (this.user == null){
      this._router.navigateByUrl('/login')
    }
    else{
      this._userService.setCurrentUser(this.user)
      this.getBuckets()
      this.getUsers()
      console.log(this.user, 'Logged in ');
    }
  }

  logout(){
    this._userService.logout()
  }

  getBuckets(){
    this._bucketService.index()
    .then(buckets => {
      this.buckets = buckets
    })
    .catch(err => console.log(err))
  }

  getUsers(){
    this._userService.index()
    .then(users => {
      this.otherUsers = []
      = users
      console.log(users)
      
    })
    .catch(err => console.log(err))
  }





}
