import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import {MatSidenavModule} from '@angular/material/sidenav'




@NgModule({
    declarations: [
        DefaultComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule,
        MatSidenavModule,
     


    ]
})
export class DefaultsModule { }
