import { Component, OnInit } from '@angular/core';
import { User, JsonRequestsService } from '../json-requests.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  users: User[]=[]
  loading = false

  constructor(private jsonRequestsService: JsonRequestsService) { }

  ngOnInit(): void { 
    this.fetchUsers()

  }
  fetchUsers() {
    this.loading = true
    this.jsonRequestsService.fetchUser()
      .subscribe(users => {
        this.users = users
        this.loading = false
      })
      

  }

}
