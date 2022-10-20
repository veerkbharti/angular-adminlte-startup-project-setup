import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@/core/guards/auth.guard';
import {NonAuthGuard} from '@/core/guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {LoginComponent} from '@modules/login/login.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {RegisterComponent} from '@modules/register/register.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import {ProfileComponent} from '@pages/profile/profile.component';

const routes: Routes = [
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
