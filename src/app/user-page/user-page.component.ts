import { Component, OnInit } from '@angular/core';
import { User, Post, JsonRequestsService } from '../json-requests.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User[]=[]
  post: Post[]=[]
  paramId: number
  show: boolean = false
  showText = 'Show Posts'

  constructor(
    private jsonRequestsService: JsonRequestsService,
    private route : ActivatedRoute) { }


    ngOnInit(): void { 
      this.route.params.subscribe((params:Params)=>{console.log(params['id'])
      this.fetchUser(+params['id'])
      this.fetchPosts(+params['id'])
      this.paramId = +params['id']
      })
      
    }
    fetchUser(id:number) {
      this.jsonRequestsService.getUserById(id)
        .subscribe(user => {
          this.user = user
        })
  
    }
    fetchPosts(id:number) {
      if (this.show===false){
        this.jsonRequestsService.getPostById(id)
          .subscribe(post => {
            console.log(post)
            this.post = post.slice(0, 4)
          })
      }
    else{
        this.jsonRequestsService.getPostById(id)
        .subscribe(post => {
          console.log(post)
          this.post = post
        })
    }
  }
  showPosts(){
    this.show = !this.show
    this.fetchPosts(this.paramId)
    if(this.show===true){
    this.showText = 'Hide Posts'
    }
    else{
      this.showText = 'Show Posts'
    }
  }

}
