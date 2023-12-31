import React, { useState } from 'react';
import ScreenRecorder from './ScreenRecorder.js';

const EmotionAnalysisComponent = () => {
  const [jsonData, setJsonData] = useState(null);
  const [blocksWithLowAttention, setBlocksWithLowAttention] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const parsedData = JSON.parse(e.target.result);
          setJsonData(parsedData);
          analyzeAttention(parsedData.data.dataAggregated);
        } catch (error) {
          console.error('Error parsing JSON file:', error);
        }
      };

      reader.readAsText(file);
    }
  };

  const calculateAverages = (data, blockSize) => {
    const averagedData = [];
  
    for (let i = 0; i < data.length; i += blockSize) {
      const block = data.slice(i, i + blockSize);
  
      if (block.length > 0) {
        const averagedBlock = {
          timeRange: `${i + 1}s - ${(i + block.length)}s`,
          attention: calculateAverage(block, 'attention'),
          emotion_Happy: calculateAverage(block, 'emotion_Happy'),
          emotion_Sad: calculateAverage(block, 'emotion_Sad'),
          emotion_Angry: calculateAverage(block, 'emotion_Angry'),
          emotion_Surprise: calculateAverage(block, 'emotion_Surprise'),
          emotion_Disgust: calculateAverage(block, 'emotion_Disgust'),
          emotion_Fear: calculateAverage(block, 'emotion_Fear'),
          emotion_Neutral: calculateAverage(block, 'emotion_Neutral'),
        };
  
        averagedData.push(averagedBlock);
      }
    }
  
    return averagedData;
  };
  
  const calculateAverage = (block, property) => {
    const sum = block.reduce((acc, val) => acc + (val[property] ? val[property].avg : 0), 0);
    return sum / block.length;
  };
  

  const analyzeAttention = (data) => {
    const lowAttentionBlocks = data.filter((block, index) => block.attention.avg < 0.96);// aqui se cambie al promedio de atencion

    setBlocksWithLowAttention(lowAttentionBlocks);

    // Comprobar si hay 10 o más bloques seguidos con baja atención
    if (lowAttentionBlocks.length >= 10) {
      alert('¡Atención baja en 10 o más bloques seguidos!');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".json" />
      <button className="Button" onClick={ScreenRecorder}>
          Cambiar a App
        </button>
      {jsonData && (
        <div>
          <h2>Resumen del Análisis Emocional - Bloques de 10 Segundos</h2>
          {calculateAverages(jsonData.data.dataAggregated, 10).map((averagedBlock, index) => (
            <div key={index}>
              <h3>Bloque {index + 1}</h3>
              <p>Tiempo de Video: {averagedBlock.timeRange}</p>
              <p>Atención Promedio: {averagedBlock.attention}</p>

              {/* Las 7 emociones principales */}
              <h4>Emociones Principales:</h4>
              <ul>
                <li>Felicidad: {averagedBlock.emotion_Happy}</li>
                <li>Tristeza: {averagedBlock.emotion_Sad}</li>
                <li>Enojo: {averagedBlock.emotion_Angry}</li>
                <li>Sorpresa: {averagedBlock.emotion_Surprise}</li>
                <li>Asco: {averagedBlock.emotion_Disgust}</li>
                <li>Miedo: {averagedBlock.emotion_Fear}</li>
                <li>Neutral: {averagedBlock.emotion_Neutral}</li>
              </ul>
            </div>
          ))}
        </div>
      )}

      {blocksWithLowAttention.length > 0 && (
        <div>
          <h3>Informes de Baja Atención:</h3>
          <ul>
            {blocksWithLowAttention.map((block, index) => (
              <li key={index}>{`Baja atención en el bloque ${index + 1}: ${block.attention.avg}`}</li>
            ))}
          </ul>
         
        </div>
      )}
    </div>

    
  );
  
};

export default EmotionAnalysisComponent;
 