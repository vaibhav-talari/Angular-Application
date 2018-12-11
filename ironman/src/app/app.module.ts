import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/shared/header/header.component';
import { FooterComponent } from './comps/shared/footer/footer.component';
import { IndexComponent } from './comps/shared/index/index.component';
import { NavgComponent } from './comps/shared/navg/navg.component';
import { ProflComponent } from './comps/shared/profl/profl.component';
import { ProjectComponent } from './comps/shared/project/project.component';
import { ExpsComponent } from './comps/shared/exps/exps.component';
import { PersnlComponent } from './comps/shared/persnl/persnl.component';
import { ContmeComponent } from './comps/shared/contme/contme.component';
import { DispcontmeComponent } from './comps/shared/contme/dispcontme/dispcontme.component';
import { SgdcontmeComponent } from './comps/shared/contme/sgdcontme/sgdcontme.component';

const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: IndexComponent },
  { path:'1',component:NavgComponent},
  { path:'2',component:ProflComponent},
  { path:'3',component:ProjectComponent},
  { path:'4',component:ExpsComponent},
  { path:'5',component:PersnlComponent},
  { path:'6',component:ContmeComponent},
  {path:'7',component:DispcontmeComponent},
  {path:'7/:id',component:SgdcontmeComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    NavgComponent,
    ProflComponent,
    ProjectComponent,
    ExpsComponent,
    PersnlComponent,
    ContmeComponent,
    DispcontmeComponent,
    SgdcontmeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
