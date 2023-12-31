import React, { useState, useEffect, useRef } from "react";
import "../src/ScreenRecorder.css";
import EmotionAnalysisComponent from "./EmotionAnalysisComponent";

function ScreenRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingCount, setRecordingCount] = useState(1);
  const mediaRecorderRef = useRef(null);
  const mediaChunksRef = useRef([]);
  const [showAnalysis, setShowAnalysis] = useState(false);

  useEffect(() => {
    let interval;

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;
      
            interval = setInterval(() => {
              // Detener la grabación actual
              recorder.stop();
              // Limpiar los chunks para la próxima grabación
              mediaChunksRef.current = [];
              // Iniciar una nueva grabación solo si está grabando
              if (isRecording) {
                recorder.start();
              }
            }, 30000); // 10 seconds interval
      
            recorder.ondataavailable = (e) => {
              if (e.data.size > 0) {
                mediaChunksRef.current.push(e.data);
              }
            };
      
            recorder.onstop = () => {
              const mediaBlob = new Blob(mediaChunksRef.current, { type: "video/mp4" });
      
              // Verificar el tamaño del Blob
              if (mediaBlob.size > 100 * 1024) {
                const url = URL.createObjectURL(mediaBlob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `captura${recordingCount}.mp4`;
                a.click();
                URL.revokeObjectURL(url);
              }
      
              // Limpiar los chunks para la próxima grabación
              mediaChunksRef.current = [];
              setRecordingCount((prevCount) => prevCount + 1);
            };
      
            recorder.start();
      
            return () => {
              clearInterval(interval);
              if (recorder.state !== "inactive") {
                recorder.stop();
              }
              stream.getTracks().forEach((track) => track.stop());
            };
          } catch (error) {
            console.error("Error al acceder a la pantalla o región:", error);
          }
    };

    if (isRecording) {
      startRecording();
    } else {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
    }

    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
    };
  }, [isRecording, recordingCount]);

  const startRecordingHandler = () => {
    setIsRecording(true);
    setShowAnalysis(false);
  };

  const stopRecordingHandler = () => {
    setIsRecording(false);
  };

  const switchToAnalysisHandler = () => {
    setShowAnalysis(true);
  };

  if (showAnalysis) {
    return <EmotionAnalysisComponent />;
  }

  return (
    <div className="ScreenRecorderContainer">
      <h2>Interfaz de Grabación de Pantalla</h2>
      <video className="VideoPreview" id="preview" autoPlay muted></video>
      <div className="ButtonContainer">
        <button
          className="Button"
          id="startRecording"
          onClick={startRecordingHandler}
          disabled={isRecording}
        >
          Iniciar Grabación
        </button>
        <button
          className="Button"
          onClick={stopRecordingHandler}
          disabled={!isRecording}
        >
          Detener Grabación
        </button>
        <button className="Button" onClick={switchToAnalysisHandler}>
          Cambiar a Análisis
        </button>
      </div>
    </div>
  );
}

export default ScreenRecorder;
