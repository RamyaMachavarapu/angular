import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {PropertyDetailsComponent} from './property-details/property-details.component';
import {PropDashboardComponent} from './propDashboard/propDashboard.component';
import {AddPropertyComponent} from './add-property/add-property.component';

const routes :Routes =[
    {path : '',redirectTo:'/details',pathMatch:'full'},
    {path :'details',component :PropDashboardComponent},
    {path : 'view/:id',component :PropertyDetailsComponent },
    {path:"add",  component:AddPropertyComponent }
    
]

@NgModule ({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
 export class AppRoutingModule {}