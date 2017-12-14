import {Injectable} from '@angular/core';
import { PROPS } from './mock-property';
import { Property } from './property';


import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PropertyService {
  private props = PROPS;
    constructor(){}
    getProperties () : Observable <Property[]>{
        return of(PROPS);
    }
    
    getProperty(id:number) :Observable<Property>{
        return of(PROPS.find(prop => prop.id === id));

    }
  
    addProperty (property :Property){
        this.props.push(property);   
     }

    

   
}