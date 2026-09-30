/*import {
  createTask,
  completeTask,
  listTasks,
  deleteTask,
  listPendingTasks
} from './services/task.service.js';
import { delay } from './utils/delay.js';
import { getAppName } from './utils/env.js';

const showTasks = (taskList = listTasks()): void => {
  const rows = taskList.map((task) => ({
    id: task.id,
    title: task.title,
    status: task.status,
    createdAt: task.createdAt.toLocaleString()
  }));
  console.table(rows);
};

const main = async (): Promise<void> => {
  console.log(`\n${getAppName()}`);
  console.log('Iniciando aplicación...');
  await delay(300);

  console.log('\nTareas iniciales:');
  showTasks();

  // Creación y finalización de tareas
  const newTask = createTask('Construir mi primer servicio');
  console.log(`\nTarea creada con id ${newTask.id}.`);
  completeTask(newTask.id);
  console.log(`Tarea ${newTask.id} completada.`);

  console.log('\nEstado de las tareas:');
  showTasks();

  // Demostración del Desafío: Listar Pendientes
  console.log('\nTareas Pendientes únicamente (Desafío):');
  showTasks(listPendingTasks());

  // Demostración del Desafío: Eliminar Tarea
  console.log('\nEliminando la tarea 1 (Desafío)...');
  const removed = deleteTask(1);
  console.log(`Tarea con id ${removed.id} ("${removed.title}") fue eliminada con éxito.`);

  console.log('\nEstado final tras eliminación:');
  showTasks();

  // Captura de errores esperados
  console.log('\nProbando manejo de errores esperados:');
  
  // Completar tarea inexistente
  try {
    completeTask(999);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error desconocido.';
    console.error(`[Error controlado]: ${message}`);
  }

  // Eliminar tarea inexistente (Desafío)
  try {
    deleteTask(888);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error desconocido.';
    console.error(`[Error controlado Desafío]: ${message}`);
  }
};

main().catch((error: unknown) => {
  console.error('Error no controlado:', error);
  process.exitCode = 1;
});*/