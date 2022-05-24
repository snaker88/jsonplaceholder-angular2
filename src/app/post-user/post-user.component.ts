import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JsonRequestsService, Comment, Post } from '../json-requests.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})
export class PostUserComponent implements OnInit {

  post: Post[] = []
  comment: Comment[] = []
  newComment: Comment[] = []
  body: string;
  name: string
  postId: number

  constructor(
    public dialog: MatDialog,
    private route : ActivatedRoute,
    private jsonRequestsService: JsonRequestsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
    console.log(params['id'], params['idpost'])
    this.postId = +params['idpost']
    this.fetchPosts(+params['idpost'])
    this.fetchComments(+params['idpost'])
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {postId: this.postId, id: this.comment.length + 1}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (Object.keys(result).length != 0){
        this.comment.push(result)
        this.newComment = result
        this.jsonRequestsService.addComment(this.newComment)
      }
      console.log(this.newComment)
      console.log(this.comment)
      this.newComment = []
     
    });
  }

  fetchPosts(id:number) {
      this.jsonRequestsService.getPostByIdPost(id)
        .subscribe(post => {
          this.post = post
        })
  }

  fetchComments(id:number) {
      this.jsonRequestsService.getCommentById(id)
        .subscribe(comment => {
          this.comment = comment
        })
  
  }

}
