class Product {
    Codigo: number
    Descricao: string
    CdgDeBarras: string
    VlrDeVenda: number
    PesoBruto: number
    PesoLqd: number

    constructor() {
        this.Codigo = 0
        this.Descricao = ''
        this.CdgDeBarras = ''
        this.VlrDeVenda = 0
        this.PesoBruto = 0
        this.PesoLqd = 0
    }
}

//  create table Product(codigo INT PRIMARY KEY AUTO_INCREMENT, descricao VARCHAR(250) NOT NULL, cdgdebarras VARCHAR(90) NOT NULL, vlrdevenda DECIMAL NOT NULL, pesobruto DECIMAL NOT NULL, pesolqd DECIMAL NOT NULL)

export{Product}