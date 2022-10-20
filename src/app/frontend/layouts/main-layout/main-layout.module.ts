import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainLayoutRoutingModule} from './main-layout-routing.module';
import {MainLayoutComponent} from './main-layout.component';
import {ComponentsModule} from '@/frontend/components/components.module';
import {PagesModule} from '@/frontend/pages/pages.module';

@NgModule({
    declarations: [MainLayoutComponent],
    imports: [
        CommonModule,
        MainLayoutRoutingModule,
        ComponentsModule,
        PagesModule
    ]
})
export class MainLayoutModule {}
