import { Routes } from '@angular/router';
import { ProfileCard } from './compponents/profile-card/profile-card';
import { Counter } from './compponents/counter/counter';

export const routes: Routes = [

    { path: 'card-profile', component: ProfileCard },
    { path: 'count', component: Counter },
    
];
