class User {
    Codigo: number
    Nome: string
    Fantasia: string
    Documento: string
    Endereco: string
    password: string

    constructor() {
        this.Codigo = 0
        this.Nome = ''
        this.Fantasia = ''
        this.Documento = ''
        this.Endereco = ''
        this.password = ''
    }
}

export{User}

//  create table User(Codigo INT PRIMARY KEY AUTO_INCREMENT, Nome VARCHAR(100) NOT NULL, Fantasia VARCHAR(100) NOT NULL, Documento VARCHAR(40) NOT NULL, Endereco VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL);