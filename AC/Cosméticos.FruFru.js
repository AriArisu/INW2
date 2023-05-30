let estoque = 10
class cosméticos {
    constructor(preço,Id,descrição,Ativo,estoque,vencido,Tipo){
        this.preço = preço,
        this.Id = Id,
        this.descrição = descrição,
        this.Ativo = Ativo,
        this.estoque=estoque,
        this.vencido = vencido,
        this.Tipo=Tipo
    }
    Ativar(){
        this.Ativo = true
    }
    Desativar(){
        this.Ativo = false
    }

    vencido(){
        this.vencido = true
    }
    Valido(){
        this.vencido = false
    }

  retirarEstoque(retirado){
    if(this.Ativo=true){
    this.estoque-= retirado
    if(retirado<0){
        console.log("Vc retirou os produtos")
    }
}
    if(retirado>10)
        console.log("Você não pode retirar mais do que 10 produtos")
    }


incluirEstoque(incluir){
    if(this.Ativo=true){
        this,estoque+= incluir
        if(incluir<0){
            console.log("Agora vc possui mais produtos no estoque")
        } 
    }
}

Ativar(prduto){
    if( this.Ativo = true)
    
}
}

const leia = cosméticos("prompt-sync")()
let op=""
let opcao = ""

do{
    console.log("")
    console.log("Bem vindo as lojas FruFru")
    console.log("Os Frufrus do seu dia ")
    console.log("")
    console.log("1 - cadastrar produto")
    console.log("2 - InserirEstoque")
    console.log("3 - retirarEstoque")
    console.log("4 - SAIR")
    opcao = leia("Digite o número da sua opção : ")
    if (opcao==1)
    let p1 = new cosméticos(10.25,12314241,"base Matte tom D2"true,10,true,"peles Morenas")
    console.log("Digite suas informações")
    p1.Ativar()
        console.log("Seu produto foi cadastrado")