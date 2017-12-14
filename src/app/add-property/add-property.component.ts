import {Component,OnInit} from '@angular/core';
import { Property } from '../property';
import {PropertyService} from '../property.service';
import {Location} from '@angular/common';

import { PROPS } from '../mock-property';


@Component ({
    selector : 'app-additems',
    templateUrl :'./add-property.component.html',
    styleUrls :['./add-property.component.css']
})

export class AddPropertyComponent implements OnInit{
    data:object = {};

   constructor(private propservice : PropertyService,private location :Location){}
    ngOnInit(){
    
    }
     addProperty(property :Property){
         this.propservice.addProperty(property);
         this.location.back();
     }  
}