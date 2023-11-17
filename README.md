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