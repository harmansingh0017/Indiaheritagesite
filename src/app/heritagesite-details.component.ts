import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HertiagesiteService} from './Heritagesite.service';
import {HeritagesitesComponent} from'./Heritagesites.component' ;
import {sites} from './sites';

@Component({
  selector: 'sites',
  templateUrl:'./heritagesite-details.component.html',
  styleUrls:['./heritagesite-details.component.css'],
  providers: [HeritagesitesComponent]
})
export class HeritagesiteDetailsComponent implements OnInit {

  Sites: sites;
  constructor(private _route: ActivatedRoute , private _heritagesitescomponent: HeritagesitesComponent){}

  ngOnInit(){
    const id =   +this._route.snapshot.params['id'];
   this.Sites = this._heritagesitescomponent.getsites(id);
  }

}
