class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    descricaoBase() {
        return `${this.nome} — R$ ${this.preco.toFixed(2)}`;
    }
}

class ProdutoFisico extends Produto {
    constructor(nome, preco, peso, estoque) {
        super(nome, preco);
        this.peso = peso;
        this.estoque = estoque;
    }

    detalhes() {
        return `
📦 PRODUTO FÍSICO
Nome: ${this.nome}
Preço: R$ ${this.preco.toFixed(2)}
Peso: ${this.peso} g
Estoque disponível: ${this.estoque} unidades
--------------------------------------------------------
`;
    }
}

class ProdutoDigital extends Produto {
    constructor(nome, preco, tamanhoMB, chaveAtivacao) {
        super(nome, preco);
        this.tamanhoMB = tamanhoMB;
        this.chaveAtivacao = chaveAtivacao;
    }

    detalhes() {
        return `
💾 PRODUTO DIGITAL
Nome: ${this.nome}
Preço: R$ ${this.preco.toFixed(2)}
Tamanho do download: ${this.tamanhoMB} MB
Chave de ativação: ${this.chaveAtivacao}
--------------------------------------------------------
`;
    }
}

class ProdutoColecionavel extends Produto {
    constructor(nome, preco, edicao, numeroSerie) {
        super(nome, preco);
        this.edicao = edicao;
        this.numeroSerie = numeroSerie;
    }

    detalhes() {
        return `
🧩 PRODUTO COLECIONÁVEL
Nome: ${this.nome}
Preço: R$ ${this.preco.toFixed(2)}
Edição: ${this.edicao}
Número de Série: #${this.numeroSerie}
--------------------------------------------------------
`;
    }
}

const actionFigure = new ProdutoFisico("Action Figure - Naruto", 249.90, 350, 12);
const gameDigital = new ProdutoDigital("The Witcher 3 - Edição GOTY", 79.90, 35000, "GOTY-8821-ABX1");
const espadaColecionador = new ProdutoColecionavel("Espada do Link - Zelda", 1299.90, "Edição Limitada 2025", 117);

console.log("\n=========== 🛒 CATÁLOGO PREMIUM — LOJA GEEK ===========\n");

function mostrar(produto) {
    console.log(produto.detalhes());
}

// Exibindo todos
mostrar(actionFigure);
mostrar(gameDigital);
mostrar(espadaColecionador);
