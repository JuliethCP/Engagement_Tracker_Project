**Integración de MorphCast SDK con React**
En este docuemento, aprenderás a integrar el MorphCast SDK con una aplicación React  El MorphCast SDK te permite incorporar capacidades de inteligencia artificial en tu aplicación para tareas como reconocimiento de objetos y detección facial. Aquí te guiará a través de los pasos para configurar el SDK y mostrarte cómo interactuar con él en una aplicación React.

Paso 1: Ejecutar la Aplicación React
En el directorio del proyecto, ejecuta el siguiente comando para iniciar la aplicación en modo de desarrollo:

Instrucciones de intalación del Proyecto 

## Instalación

1. **Clona este repositorio:**
    ```bash
    git clone https://github.com/JuliethCP/PSO.git
    ```

2. **Ingresa al directorio del proyecto:**
    ```bash
    cd PSO
    ```

3. **Instala las dependencias:**
    ```bash
    npm install
    ```

## Uso

Inicia la aplicación en modo de desarrollo:



```bash
npm start

```
Esto abrirá la aplicación en tu navegador en http://localhost:3000 . La página se recargará automáticamente cuando realice cambios en el código.

Paso 2: Generar una clave de licencia
Primero, genera una clave de licencia para el SDK de MorphCast aquí [Morphhhhcast SDK](https://www.morphcast.com/sdk-licence-request/)  Luego, inserte la clave en la configuración del SDK ubicada en el archivo src/helpers/ai-sdk/loader.js.

Paso 3: Configuración del SDK
Dentro del archivo src/helpers/ai-sdk/loader.js, encontrarás la configuración del MorphCast SDK. Asegúrese de que la clave de licencia se haya insertado correctamente y ajuste cualquier otra configuración según sus necesidades.

Paso 4: Controlar el SDK desde React
Las funciones start()y stop()para controlar el SDK de MorphCast se encuentran en el archivo src/App.js. Estas funciones permiten iniciar y detener el SDK según sea necesario en tu aplicación React.

Paso 5: Listas de componentes para usar
Encuentra componentes listos para usar que están vinculados a módulos específicos del MorphCast SDK en el directorio src/components/.

 Estos componentes facilitan la incorporación de funcionalidades específicas del SDK en tu interfaz de usuario, las cuales se pueden adaptar.

# Características del Proyecto

## Captura de Pantalla y Almacenamiento de Videos

Hemos implementado una funcionalidad de captura de pantalla que permite a los usuarios seleccionar la pantalla o página web deseada durante videollamadas. Esta característica está vinculada a un grabador de pantalla que almacena videos en intervalos regulares de 50 segundos. Los videos generados se guardan localmente en la carpeta de descargas del PC.

## Automatización Parcial del Análisis de Vídeo

Hemos desarrollado un algoritmo para la automatización parcial del análisis de vídeo. Este algoritmo se enfoca en la automatización de la página MorphCast para el análisis de vídeo. El usuario selecciona un video previamente guardado, inicia el algoritmo y este procede a analizar el video, generando resultados que posteriormente se descargan.

## Limitaciones en la Automatización Completa

A pesar de los avances, la propuesta de automatización completa del análisis de vídeo con el algoritmo de la página MorphCast no se ha logrado implementar completamente. Actualmente, la intervención del usuario es necesaria para elegir qué videos se deben analizar cada vez que se inicia el algoritmo de automatización.

## Lectura de datos en formato JSON
*Debes instalar esta libreria*
```bash
npm install react react-dom file-loader
```

Por supuesto, aquí tienes una breve explicación de cómo funciona el componente:

Componente de análisis de emociones
Este componente de React está diseñado para mostrar los resultados del análisis emocional a partir de un archivo JSON. Aquí hay una breve descripción de cómo funciona:

Uso del componente
Integración en la Aplicación:

Este componente se utiliza integrándolo en tu aplicación React. Asegúrese de haber importado el componente en el archivo donde desee utilizarlo.

*Ejemplo de como importarlo*
```bash
import EmotionAnalysisComponent from "./components/EmotionAnalysisComponent ";
```

Visualización de resultados:

El componente proporciona una interfaz sencilla que incluye un botón para cargar archivos. Al hacer clic en este botón, el usuario puede seleccionar un archivo JSON generado por el análisis emocional.

Interpretación de Datos:

El componente lee el archivo JSON cargado y presenta información relevante sobre el análisis emocional. En el ejemplo proporcionado, se extraen y muestran algunos datos clave, como el tiempo de video, el número de caras totales y datos de emociones específicas.

Estructura del Archivo JSON
El componente espera que el archivo JSON tenga una estructura específica, como se muestra a continuación:

```json
{
  "data": {
    "dataAggregated": [
      {
        "video_time": 0,
        "totalFaces": {
          "min": 1,
          "max": 1,
          "samples": 13
        },
        // ... más datos ...
      }
    
   
]
  }
}
```
Asegúrese de que su archivo JSON cumpla con esta estructura para que el componente pueda interpretar los datos correctamente.