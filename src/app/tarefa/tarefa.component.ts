import { Component } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {

  tarefas: Tarefa[] = [
    new Tarefa('Lavar a louça', false),
    new Tarefa('Estudar Angular', true),
    new Tarefa('Fazer compras', false),
    new Tarefa('Passear com o cachorro', true),
    new Tarefa('Cortar a grama', false)
  ];

  alternarConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
