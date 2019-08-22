import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  user:any;
  constructor(private route: ActivatedRoute,
              private router: Router) {

                this.route.queryParams.subscribe(params => {
                  this.user = params;
                  
                });

              }
  
  redirectToContacts(){
    this.router.navigate(['contacts'], {queryParams :this.user});
  }
  redirectToProjects(){
    this.router.navigate(['projects'], {queryParams :this.user});
  }
  redirectToCalendar(){
    this.router.navigate(['calendar'], {queryParams :this.user});
  }
  redirectToGeo(){
    this.router.navigate(['geo'], {queryParams :this.user});
  }
  ngOnInit() {
  }

}
