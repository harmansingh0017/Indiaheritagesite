import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'Heritagesite',
    templateUrl: './Heritagesite.component.html',
    styleUrls: ['./Heritagesite.component.css']   
})
export class HeritagesiteComponent {
    @Input() data;   
    

   
}