export const classifications = [
    {
        label: "Magreza",
        range: "Abaixo de 18.5",
        status: "Atenção",
        class: "underweight",
        color: "#3b82f6",
        description: "Abaixo do peso ideal. Procure orientação nutricional."
    },
    {
        label: "Normal",
        range: "18.5 - 24.9",
        status: "Ideal",
        class: "normal",
        color: "#10b981",
        description: "Peso dentro da faixa saudável. Continue assim!"
    },
    {
        label: "Sobrepeso",
        range: "25 - 29.9",
        status: "Alerta",
        class: "overweight",
        color: "#f59e0b",
        description: "Acima do peso ideal. Considere ajustes na dieta e exercícios."
    },
    {
        label: "Obesidade Grau I",
        range: "30 - 34.9",
        status: "Risco",
        class: "obesity1",
        color: "#ef4444",
        description: "Risco moderado à saúde. Procure acompanhamento médico."
    },
    {
        label: "Obesidade Grau II",
        range: "35 - 39.9",
        status: "Alto Risco",
        class: "obesity2",
        color: "#dc2626",
        description: "Risco elevado à saúde. Busque orientação médica urgente."
    },
    {
        label: "Obesidade Grau III",
        range: "40 ou mais",
        status: "Muito Alto",
        class: "obesity3",
        color: "#991b1b",
        description: "Risco muito elevado. Necessário acompanhamento médico imediato."
    }
];

export const calculateIMC = (peso, altura) => {
    const alturaMetros = altura / 100;
    return peso / (alturaMetros * alturaMetros);
};

export const getClassification = (imc) => {
    if (imc < 18.5) return classifications[0];
    if (imc < 25) return classifications[1];
    if (imc < 30) return classifications[2];
    if (imc < 35) return classifications[3];
    if (imc < 40) return classifications[4];
    return classifications[5];
};