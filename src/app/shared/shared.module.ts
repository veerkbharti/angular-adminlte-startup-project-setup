import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoFoundPageComponent} from './components/no-found-page/no-found-page.component';
import {PreloaderComponent} from './components/preloader/preloader.component';

@NgModule({
    declarations: [NoFoundPageComponent, PreloaderComponent],
    imports: [CommonModule],
    exports: [NoFoundPageComponent, PreloaderComponent]
})
export class SharedModule {}
