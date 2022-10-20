import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '@/core/guards/auth.guard';
import {NonAuthGuard} from '@/core/guards/non-auth.guard';
import {NoFoundPageComponent} from './shared/components/no-found-page/no-found-page.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./frontend/frontend.module').then((m) => m.FrontendModule)
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () =>
            import('./admin/admin.module').then((m) => m.AdminModule)
    },

    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {path: '**', component: NoFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
