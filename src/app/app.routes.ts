import { Routes } from '@angular/router';
import { Start } from './component/start/start';
import { About } from './component/about/about';

const startpage = {
    path :"",
    component: Start,
}

const aboutpage = {
    path :"about",
    component: About,
}

export const routes: Routes = [
    startpage,
    aboutpage
];
