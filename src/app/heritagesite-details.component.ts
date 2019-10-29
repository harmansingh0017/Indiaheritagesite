import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HertiagesiteService} from './Heritagesite.service';
import {HeritagesitesComponent} from'./Heritagesites.component' ;
import {Heritagesites} from './heritagesites';

@Component({
  selector: 'sites',
  templateUrl:'./heritagesite-details.component.html',
  styleUrls:['./heritagesite-details.component.css'],
  providers: [HeritagesitesComponent]
})
export class HeritagesiteDetailsComponent implements OnInit {
  @Input() data;    
  Sites: Heritagesites;
  constructor(private _route: ActivatedRoute , private _heritagesitescomponent: HeritagesitesComponent){}

  ngOnInit(){
    const id =   +this._route.snapshot.params['id'];
   this.Sites = this._heritagesitescomponent.getsites(id);
  }

}
