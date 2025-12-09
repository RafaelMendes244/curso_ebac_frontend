<template>
  <div class="calculator-container">
    <div class="calculator-card">
      <div class="calculator-header">
        <h1> Calculadora Aritmética</h1>
        <p class="subtitle">Cálculos instantâneos com Vue.js</p>
      </div>
      
      <div class="calculator-body">
        <div class="input-group">
          <div class="input-field">
            <label for="num1">🔢 Primeiro Número</label>
            <input
              id="num1"
              v-model.number="num1"
              type="number"
              placeholder="Digite o primeiro número"
              class="input-number"
              @input="calculate"
            />
          </div>
          
          <div class="operation-selector">
            <label for="operation">⚙️ Operação</label>
            <select
              id="operation"
              v-model="operation"
              class="select-operation"
              @change="calculate"
            >
              <option value="add">➕ Adição</option>
              <option value="subtract">➖ Subtração</option>
              <option value="multiply">✖️ Multiplicação</option>
              <option value="divide">➗ Divisão</option>
              <option value="power">⚡ Potência</option>
              <option value="percentage">📊 Porcentagem</option>
            </select>
          </div>
          
          <div class="input-field">
            <label for="num2">🔢 Segundo Número</label>
            <input
              id="num2"
              v-model.number="num2"
              type="number"
              placeholder="Digite o segundo número"
              class="input-number"
              @input="calculate"
            />
          </div>
        </div>
        
        <div class="result-section" :class="resultClass">
          <div class="result-header">
            <span class="result-icon">📐</span>
            <h3>Resultado</h3>
          </div>
          
          <div class="result-display">
            <div class="calculation-preview">
              {{ formatCalculation() }}
            </div>
            
            <div class="result-value">
              <span class="equals">=</span>
              <span class="result">{{ formattedResult }}</span>
            </div>
            
            <div class="operation-explanation">
              {{ getOperationExplanation() }}
            </div>
          </div>
        </div>
        
        <div class="calculator-footer">
          <div class="stats">
            <div class="stat-item">
              <span class="stat-label">Operação:</span>
              <span class="stat-value">{{ getOperationName() }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Status:</span>
              <span class="stat-value status-badge" :class="resultStatus">
                {{ getResultStatus() }}
              </span>
            </div>
          </div>
          
          <div class="instructions">
            <p>💡 <strong>Dica:</strong> Alterar qualquer valor atualiza automaticamente o resultado!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      num1: 0,
      num2: 0,
      operation: 'add',
      result: 0,
      lastOperation: null
    };
  },
  computed: {
    formattedResult() {
      if (isNaN(this.result) || !isFinite(this.result)) {
        return 'Erro';
      }
      
      // Formatar número com máximo de 6 casas decimais
      const num = Number(this.result);
      if (Number.isInteger(num)) {
        return num.toLocaleString();
      }
      return num.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 6
      });
    },
    resultClass() {
      if (isNaN(this.result) || !isFinite(this.result)) {
        return 'result-error';
      }
      if (this.result > 1000) {
        return 'result-large';
      }
      return 'result-normal';
    },
    resultStatus() {
      if (isNaN(this.result) || !isFinite(this.result)) {
        return 'status-error';
      }
      return 'status-success';
    }
  },
  mounted() {
    this.calculate();
  },
  methods: {
    calculate() {
      switch (this.operation) {
        case 'add':
          this.result = this.num1 + this.num2;
          break;
        case 'subtract':
          this.result = this.num1 - this.num2;
          break;
        case 'multiply':
          this.result = this.num1 * this.num2;
          break;
        case 'divide':
          if (this.num2 === 0) {
            this.result = Infinity;
          } else {
            this.result = this.num1 / this.num2;
          }
          break;
        case 'power':
          this.result = Math.pow(this.num1, this.num2);
          break;
        case 'percentage':
          this.result = (this.num1 * this.num2) / 100;
          break;
        default:
          this.result = this.num1 + this.num2;
      }
      this.lastOperation = this.operation;
    },
    formatCalculation() {
      const n1 = this.num1 || 0;
      const n2 = this.num2 || 0;
      const opSymbol = this.getOperationSymbol();
      return `${n1} ${opSymbol} ${n2}`;
    },
    getOperationSymbol() {
      const symbols = {
        add: '+',
        subtract: '-',
        multiply: '×',
        divide: '÷',
        power: '^',
        percentage: '% de'
      };
      return symbols[this.operation] || '+';
    },
    getOperationName() {
      const names = {
        add: 'Adição',
        subtract: 'Subtração',
        multiply: 'Multiplicação',
        divide: 'Divisão',
        power: 'Potência',
        percentage: 'Porcentagem'
      };
      return names[this.operation] || 'Adição';
    },
    getOperationExplanation() {
      const explanations = {
        add: `Soma de ${this.num1} e ${this.num2}`,
        subtract: `Diferença entre ${this.num1} e ${this.num2}`,
        multiply: `Produto de ${this.num1} por ${this.num2}`,
        divide: `Quociente de ${this.num1} dividido por ${this.num2}`,
        power: `${this.num1} elevado à potência ${this.num2}`,
        percentage: `${this.num2}% de ${this.num1}`
      };
      return explanations[this.operation] || '';
    },
    getResultStatus() {
      if (isNaN(this.result) || !isFinite(this.result)) {
        return 'Erro matemático';
      }
      return 'Cálculo válido';
    }
  }
};
</script>

<style scoped>
.calculator-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.calculator-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.calculator-header {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.calculator-header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.subtitle {
  margin: 10px 0 0;
  opacity: 0.9;
  font-size: 1.1rem;
}

.calculator-body {
  padding: 40px;
}

.input-group {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.input-field, .operation-selector {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 10px;
  color: #374151;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-number, .select-operation {
  padding: 16px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: #f9fafb;
}

.input-number:focus, .select-operation:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  background: white;
}

.select-operation {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 20px;
  padding-right: 50px;
  cursor: pointer;
}

.result-section {
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.result-normal {
  border-color: #e2e8f0;
}

.result-large {
  border-color: #10b981;
  background: #f0fdf4;
}

.result-error {
  border-color: #ef4444;
  background: #fef2f2;
}

.result-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.result-icon {
  font-size: 1.5rem;
}

.result-header h3 {
  margin: 0;
  color: #1f2937;
  font-size: 1.3rem;
}

.calculation-preview {
  font-size: 1.4rem;
  color: #6b7280;
  margin-bottom: 15px;
  font-family: 'Courier New', monospace;
  padding: 10px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.result-display {
  text-align: center;
}

.result-value {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.equals {
  font-size: 2.5rem;
  color: #9ca3af;
  font-weight: 300;
}

.result {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1f2937;
  font-family: 'Segoe UI', system-ui;
}

.operation-explanation {
  color: #6b7280;
  font-style: italic;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e5e7eb;
}

.calculator-footer {
  padding-top: 30px;
  border-top: 2px solid #f3f4f6;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #f9fafb;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
}

.stat-label {
  font-weight: 600;
  color: #4b5563;
}

.stat-value {
  font-weight: 700;
  color: #1f2937;
}

.status-badge {
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-success {
  background: #d1fae5;
  color: #065f46;
}

.status-error {
  background: #fee2e2;
  color: #991b1b;
}

.instructions {
  background: #eff6ff;
  padding: 18px;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
}

.instructions p {
  margin: 0;
  color: #1e40af;
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 768px) {
  .input-group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .calculator-header h1 {
    font-size: 2rem;
  }
  
  .calculator-body {
    padding: 25px;
  }
  
  .result {
    font-size: 2.5rem;
  }
  
  .stats {
    grid-template-columns: 1fr;
  }
  
  .calculator-card {
    margin: 10px;
  }
}
</style>