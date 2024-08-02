
var register  = document.querySelector('.register')
let container = document.querySelector('#container') 

function registrar() {
    let leyoutRegistrar = ''

    leyoutRegistrar = `
    <link rel="stylesheet" href="./assets/styles/styleRegistrar.css">

        <div class="container">
        <div class="box_register">
            <form>
                <div class="headerBox">
                    <h1>Register</h1>
                </div>
                <div class="primeiro">
                    <label for="nome">Full Name
                        <input type="text"  id="nomeUser" placeholder="">
                    </label>
                    <label for="nascimento"> Date Of Birth
                        <input type="date"  id="nascUser">
                    </label>
                </div>
                <div class="segundo">
                    <label for="emailUser"> E-mail
                        <input type="email" id="EmailUser" placeholder="SeuEmail@Exemple.com">
                    </label>
                </div>
                <div class="terceiro">
                    <label for="senha">Password
                        <input type="password" id="senhaUser" placeholder="password">
                    </label>
                    <label for="confirmação"> Confirmation
                        <input type="password" id="senhaUser" placeholder="Confirm">
                    </label>
                </div>
                <div class="quarto">
                <label for="telefone">First Phone
                    <input type="tel"  id="fone1" placeholder="(00)90000-0000">
                </label>
                <label for="telefone">Second Phone
                    <input type="tel"  id="fone2" placeholder="(00)90000-0000">
                </label>
                </div>
                <div class="quinto">
                    <label for="rg">RG
                        <input type="number"  id="rg"
                        placeholder="12.345.678-90">
                    </label>
                    <label for="cpf">CPF
                        <input type="number" id="cpf" placeholder="123.456.789.01">
                    </label>
                </div>
                <div class="sexto">
                    <input    
                    id="btnCadastrar"
                    type="button" value="REGISTER">
                </div>
            </form>
        </div>
    </div>
    `
    container.innerHTML = leyoutRegistrar
}