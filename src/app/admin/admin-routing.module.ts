import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@guards/auth.guard';
import {AuthComponent} from '@modules/auth/auth.component';
import {MainComponent} from '@modules/main/main.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainComponent,
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        loadChildren: () =>
            import('./../modules/main/main.module').then((m) => m.MainModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
