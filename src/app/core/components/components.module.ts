import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsIntroComponent } from './dashboard/cards-intro/cards-intro.component';
import { BarChartComponent } from './dashboard/card-graths/bar-chart/bar-chart.component';
import { LineChartComponent } from './dashboard/card-graths/line-chart/line-chart.component';
import { TableDataComponent } from './dashboard/table-data/table-data.component';
import { CardGrathsComponent } from './dashboard/card-graths/card-graths.component';
import {CdkTableModule} from '@angular/cdk/table';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    CardsIntroComponent,
    BarChartComponent,
    LineChartComponent,
    TableDataComponent,
    CardGrathsComponent,
    EcomerceComponent,





  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    CdkTableModule,
    RouterModule,



  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,

  ]
})
export class ComponentsModule { }
