import {Component,OnInit} from '@angular/core';

import { Property } from '../property';

import { PROPS } from '../mock-property';
import {PropertyService} from '../property.service';


 @Component ({
        selector : 'app-propDashboard',
        templateUrl :'./propDashboard.component.html',
        styleUrls :['./propDashboard.component.css']
})

export class PropDashboardComponent implements OnInit {
    properites =PROPS;
    props : Property[] ;
    i:number=0;

    
    selectedProp :Property;

    constructor( private propservice : PropertyService) {}
    ngOnInit(){
        this.getProperties();
    }

    getProperties() :void{
        this.propservice.getProperties()
        .subscribe(props => this.props = props); 
    }

    delarry :Property[] =[];

    checkbox(prop:Property){
        this.delarry.push(prop);
    }

    deleteAll(){
        for(this.i=0 ; this.i<this.delarry.length; this.i++){
             if(this.properites.find(x => x == this.delarry[this.i])){
                 this.properites.splice(this.properites.indexOf(this.delarry[this.i]),1);
             }
        }
    }
}

