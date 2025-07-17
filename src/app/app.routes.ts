import { Routes } from '@angular/router';
import { ProfileCard } from './compponents/profile-card/profile-card';
import { Counter } from './compponents/counter/counter';
import { TodoList } from './compponents/todo-list/todo-list';
import { StopWatch } from './compponents/stop-watch/stop-watch';

export const routes: Routes = [

    { path: 'card-profile', component: ProfileCard },
    { path: 'count', component: Counter },
    { path: 'to-do-list', component: TodoList },
    { path: 'stop-watch', component: StopWatch }
    
];
