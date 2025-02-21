import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { ApiUserService } from '../api-user.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-detail-user',
  imports: [NgStyle],
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.css'
})
export class DetailUserComponent {
  data: User = new User();
  id: number = -1;
  constructor(private _api: ApiUserService, private _activatedRoute: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(this.id).subscribe((ans: any) => {
      this.data = ans;
    })
  }
  backToList() {
    this._router.navigate(['mockapi'])
  }
  deleteUser(id: number) {
    if(confirm("Are you sure??")){
      this._api.delete(id).subscribe((ans) => {
        // this._api.getAll().subscribe((ans: any) => {
        //   this.data = ans;
        // })
        this.backToList();
      })
    }
  }
  updateNavigateUser(id: number) {
    this._router.navigate(['userapiform', id])
  }

}
