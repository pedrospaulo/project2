import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { Card1Component } from './components/dashbord/cards/card1/card1.component';
import { Card2Component } from './components/dashbord/cards/card2/card2.component';
import { Card3Component } from './components/dashbord/cards/card3/card3.component';
import { Card4Component } from './components/dashbord/cards/card4/card4.component';
import { Card5Component } from './components/dashbord/cards/card5/card5.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashbordComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
