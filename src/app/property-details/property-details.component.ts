import {Component, OnInit,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Property} from '../property';
import {PropertyService} from '../property.service';
import {Location} from '@angular/common';
 
@Component({
    selector:'app-property-details',
    templateUrl :'./property-details.component.html',
    styleUrls :['./property-details.component.css']
})

export class PropertyDetailsComponent implements OnInit{
    @Input () prop : Property;
    constructor(
        private propService :PropertyService,
        private route : ActivatedRoute,
        private location :Location){}

    ngOnInit(): void{
        this.getProperty();
    }
   
    getProperty(): void{
        const id =+this.route.snapshot.paramMap.get('id');
        this.propService.getProperty(id).subscribe(prop => this.prop = prop);
    }

    back(): void{
        this.location.back();
    }

}