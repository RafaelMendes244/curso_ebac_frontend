import { useState, useEffect } from "react";
import "./App.css";
import { calculateIMC, getClassification, classifications } from "./utils/imcCalculator";
import { Info, Scale, Heart, TrendingUp } from "lucide-react";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("imcHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!altura || !peso) return;

    const result = calculateIMC(parseFloat(peso), parseFloat(altura));
    const classificationInfo = getClassification(result);

    setImc(result);
    setClassification(classificationInfo);

    // Salvar no histórico
    const newRecord = {
      date: new Date().toLocaleDateString("pt-BR"),
      altura: parseFloat(altura),
      peso: parseFloat(peso),
      imc: result,
      classification: classificationInfo.label
    };

    const updatedHistory = [newRecord, ...history.slice(0, 4)];
    setHistory(updatedHistory);
    localStorage.setItem("imcHistory", JSON.stringify(updatedHistory));
  };

  const handleReset = () => {
    setAltura("");
    setPeso("");
    setImc(null);
    setClassification(null);
  };

  return (
    <div className="app">
      <div className="card">
        <header className="header">
          <div className="header-icon">
            <Scale size={28} />
          </div>
          <h1>Calculadora de IMC</h1>
          <p className="subtitle">
            Descubra seu Índice de Massa Corporal e mantenha-se saudável
          </p>
        </header>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label>
              <span>Altura (cm)</span>
              <div className="input-with-icon">
                <TrendingUp size={20} />
                <input
                  type="number"
                  min="100"
                  max="250"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  placeholder="Ex: 175"
                  required
                />
              </div>
            </label>
          </div>

          <div className="input-group">
            <label>
              <span>Peso (kg)</span>
              <div className="input-with-icon">
                <Scale size={20} />
                <input
                  type="number"
                  min="30"
                  max="300"
                  step="0.1"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  placeholder="Ex: 70.5"
                  required
                />
              </div>
            </label>
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              <Heart size={20} />
              Calcular IMC
            </button>
            {(imc || history.length > 0) && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                Limpar
              </button>
            )}
          </div>
        </form>

        {imc && classification && (
          <div className="result-section">
            <div className="result-card">
              <div className="result-header">
                <h2>Seu Resultado</h2>
                <span className="date">{new Date().toLocaleDateString("pt-BR")}</span>
              </div>

              <div className="imc-display">
                <div className="imc-value">
                  <span className="value">{imc.toFixed(1)}</span>
                  <span className="unit">kg/m²</span>
                </div>
                <div className={`classification-badge ${classification.class}`}>
                  {classification.label}
                </div>
              </div>

              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${Math.min((imc / 40) * 100, 100)}%` }}
                  />
                  <div className="progress-markers">
                    {[18.5, 25, 30, 35, 40].map((marker) => (
                      <div
                        key={marker}
                        className="progress-marker"
                        style={{ left: `${(marker / 40) * 100}%` }}
                      >
                        <span>{marker}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="progress-labels">
                  <span>Abaixo do peso</span>
                  <span>Obesidade</span>
                </div>
              </div>

              <div className="result-info">
                <p>
                  <Info size={16} />
                  <strong>Interpretação:</strong> {classification.description}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="table-section">
          <h3>
            <Info size={20} />
            Tabela de Classificação IMC
          </h3>
          <div className="classification-table">
            {classifications.map((item, index) => (
              <div
                key={index}
                className={`table-row ${classification?.label === item.label ? 'active' : ''}`}
              >
                <div className="table-category">
                  <div className={`indicator ${item.class}`} />
                  <span>{item.label}</span>
                </div>
                <div className="table-range">{item.range}</div>
                <div className="table-status">
                  <span className={`status ${item.class}`}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {history.length > 0 && (
          <div className="history-section">
            <h3>Histórico Recente</h3>
            <div className="history-list">
              {history.map((record, index) => (
                <div key={index} className="history-item">
                  <div className="history-date">{record.date}</div>
                  <div className="history-data">
                    <span>{record.altura}cm</span>
                    <span>{record.peso}kg</span>
                    <span className="history-imc">{record.imc.toFixed(1)}</span>
                  </div>
                  <div className={`history-classification ${record.classification.replace(/\s+/g, '-').toLowerCase()}`}>
                    {record.classification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="footer">
          <p>
            <Info size={14} />
            <strong>Importante:</strong> O IMC é uma referência. Consulte um profissional de saúde.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;