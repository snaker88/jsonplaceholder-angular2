import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { PostUserComponent } from './post-user/post-user.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path: 'users/:id', component: UserPageComponent },
  {path: '', component: ListOfUsersComponent},
  {path:'users/:id/:idpost', component: PostUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
