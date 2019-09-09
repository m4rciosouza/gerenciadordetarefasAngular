import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';

//criando o array de rotas
export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    //rota com dois parâmetros, o path e o component
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
];



