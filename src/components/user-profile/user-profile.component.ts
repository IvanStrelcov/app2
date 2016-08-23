import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';

// import template from './user-profile.html';
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.html',
})
export class UserProfileComponent implements OnInit{
  @Input()
  user: User;
  sub: any;
  remove: any;
  constructor(private UserProfileService: UserProfileService,
              private route: ActivatedRoute,
              private router: Router){}
  ngOnInit(){
    console.log(this.route);
    this.getUser();
    console.log(this.sub);
  }

  ngOnDestroy(){
    if (this.sub) this.sub.unsubscribe();
    if(this.remove) this.remove.unsubscribe();
  }

  getUser(){
    this.sub = this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.UserProfileService
          .getUser(id)
          .subscribe(user => {
            this.user = user;
            console.log(this.user);
          });
        });
  }

  onRemove(){
    this.remove = this.UserProfileService.removeUser(this.user.id).subscribe(res => {
      this.router.navigate(['/users']);
    })
  }
};
