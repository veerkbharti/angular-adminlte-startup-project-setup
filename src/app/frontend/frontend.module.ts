import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    FrontendComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ComponentsModule,
    PagesModule
  ]
})
export class FrontendModule { }
