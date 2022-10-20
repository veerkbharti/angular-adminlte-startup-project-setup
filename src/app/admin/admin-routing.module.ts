import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@/core/guards/auth.guard';
import {AuthComponent} from '@modules/auth/auth.component';
import {MainComponent} from '@modules/main/main.component';
import {AdminComponent} from './admin.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import {ProfileComponent} from '@pages/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'blank',
        component: BlankComponent
    },
    {
        path: 'sub-menu-1',
        component: SubMenuComponent
    },
    {
        path: 'sub-menu-2',
        component: BlankComponent
    }
    // {
    //     path: '',
    //     loadChildren: () =>
    //         import('./../modules/main/main.module').then((m) => m.MainModule)
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
