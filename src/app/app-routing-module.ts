import{ NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

//aqui ficam as rotas dos nossos componentes
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    //concatenando o array Routes com o TarefaRoutes
     ...TarefaRoutes

]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], //forRoot  inicializa as rotas
    exports: [ RouterModule ] //faz que o modulo de rotas fiquei disponivel para o modulo principal
})
export class AppRoutingModule {}