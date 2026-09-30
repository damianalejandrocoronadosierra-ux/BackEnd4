# Reflexión — EC1 F1 A2
**Nombre:** [Tu Nombre Completo]  
**Grupo:** [Tu Grupo]  

## 1. Función de Node.js
Node.js actúa como el entorno de ejecución de JavaScript en el lado del servidor, permitiendo procesar y ejecutar el código del backend fuera del navegador web.

## 2. Aportes de TypeScript
TypeScript añade un sistema de tipado estático sobre JavaScript. Nos ayuda a detectar errores tipográficos, inconsistencias en estructuras de datos (como propiedades faltantes) o pasajes de tipos incorrectos en tiempo de compilación, antes de que el código se ejecute en producción.

## 3. Separación por capas (models, data, services, utils)
Permite aplicar el principio de separación de responsabilidades. `models` define la forma de los datos; `data` los almacena; `services` aplica la lógica de negocio y reglas del dominio; y `utils` provee funciones reutilizables genéricas. Esto facilita el mantenimiento, la escalabilidad y las pruebas.

## 4. Diferencia entre función síncrona y async
Una función síncrona bloquea el hilo de ejecución hasta que completa su tarea. Una función `async` devuelve una promesa y permite pausar su propia ejecución internamente usando `await` sin bloquear la aplicación mientras espera operaciones asíncronas (como leer archivos o consultar bases de datos).

## 5. Por qué `findTaskById` devuelve `Task | undefined`
Devuelve un tipo de unión (`Task | undefined`) porque es posible que la búsqueda por ID no encuentre ninguna coincidencia dentro del arreglo. TypeScript nos fuerza a evaluar el caso donde el objeto es `undefined` para evitar errores en tiempo de ejecución.

## 6. Ventaja de leer APP_NAME desde `process.env`
Permite desacoplar la configuración externa del código fuente. Esto posibilita cambiar el comportamiento de la aplicación en distintos entornos (desarrollo, pruebas, producción) sin modificar ni volver a compilar el código.

## 7. Diferencia entre `pnpm start` y la secuencia `pnpm build` + `pnpm serve`
`pnpm start` utiliza `tsx` para interpretar y ejecutar directamente los archivos de TypeScript en tiempo de desarrollo. La secuencia `pnpm build` + `pnpm serve` primero transpila con `tsc` todo el código TypeScript a JavaScript en el directorio `dist` y posteriormente ejecuta ese JavaScript nativo usando Node.js directamente, simulando un entorno de producción.

## 8. Partes reutilizables para la API con Express
Toda la lógica de negocio construida en `task.service.ts`, las interfaces de `task.ts`, las funciones auxiliares de `utils` y la lista de almacenamiento en `tasks.ts` se reutilizarán directamente. Únicamente se reemplazarán el punto de entrada `index.ts` y sus salidas por consola por controladores y rutas HTTP de Express.