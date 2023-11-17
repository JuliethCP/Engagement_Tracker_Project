## **Algoritmo para la captura de pantalla en React**
En este documento, se explicará cómo implementar una funcionalidad de captura de pantalla en una aplicación React. Esta funcionalidad está vinculada a un grabador de pantalla que almacena videos en intervalos regulares de 50 segundos. Los videos generados se guardan localmente en la carpeta de descargas del PC. El propósito de esta funcionalidad es grabar la pantalla de reuniones virtuales para posteriormente con otro algoritmo, analizar el comportamiento de los participantes en la reunión.

## Instalación

1. **Clona este repositorio:**
    ```bash
    git clone https://github.com/JuliethCP/Engagement_Tracker_Project.git
    ```

2. **Instala las dependencias:**
    ```bash
    npm install
    ```

## Uso

1. **Inicia la aplicación en modo de desarrollo:**

```bash
npm start

```
Esto abrirá la aplicación en tu navegador en http://localhost:3000 . La página se recargará automáticamente cuando se realicen cambios en el código.

2. **Pulsar el botón Iniciar Grabación y seleciona la pestaña o ventana a capturar:**

imagenes

3. **Parar la grabación:**
Para parar la grabación, basta con tocar el botón de dejar de compartir o recargar la página.

imagenes

3. **Elementos a tener en cuenta:**
Como la aplicación está constantemente grabando la pantalla, es importante tener en cuenta que el rendimiento de la aplicación se puede ver afectado. Por lo tanto, se recomienda no tener demasiadas pestañas abiertas en el navegador y no tener demasiadas aplicaciones abiertas en el PC.
Pero lo más importante es que al estar grabando los videos repetidas veces, varias veces se abrirán ventanas de selección de qué pantalla capturar, pero solo hay que ignorarlas y seguir grabando. En cualquier caso, si se ocupa detener la grabación nada más se recarga la página como se mencionó anteriormente.

## Implementación del algoritmo para el reconocimiento de emociones

Ir al siguiente repositorio para continuar con las instrcciones:

https://github.com/JuliethCP/puppeteer.git

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
