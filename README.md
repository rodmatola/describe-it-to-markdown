# O problema

Eu estava procurando por alguma ferramenta como [FeatureBook](https://www.npmjs.com/package/featurebook) ou [Feature Express](https://www.npmjs.com/package/feature-express) para transformar meus arquivos `.spec` em um relatório que eu poderia compartilhar, sem executar os testes. Infelizmente, não encontrei nada...

Então eu fiz este script `.sh` para fazer isso por mim.

# O que é o script

São uma série de comandos `grep`, `sed` e `awk` para trocar as palavras chave `describe`, `context`, `it` para `Cenário`, `Contexto` e uma lista ordenada, respectivamente.

Por ainda estar em desenvolvimento, é necessário conferir após rodar o script e fazer alterações manuais, se necessário.

# Como rodar

* Coloque o arquivo `tomark.sh` na raiz da pasta Cypress
* de permissão de execução `chmod +x tomark.sh` ou `chmod 777 tomark.sh`, se você não se importar com permissões (pode ser que precise do `sudo`)
* então `./tomark.sh`

Para funcionar, seu cenários devem estar dentro da pasta da estrutura padrão do Cypress `cypress/integration`. Ele irá olhar todos os aquivos dentro dessa pasta e subpastas. Qualquer modificação na sua estrutura, modifique também no `tomark.sh`.

OBS.: a repetição da linha `cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md` é necessária no Mac, pois o `sed -i`, que substitui as mudanças no arquivo de origem, não funciona.

# Exemplos

login.spec.js
```javascript
describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login com sucesso', () => {
    login('standard_user', 'secret_sauce')
    cy.get('#inventory_filter_container')
  })

  it('Login com usuário e/ou senha incorretos', () => {
    login('standard_user', '123456')
    cy.get('.error-button')
  })

})
```

compra.spec.js
```javascript
describe('Comprar', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    login('standard_user', 'secret_sauce')
  })

  it('Fazer uma compra com sucesso', () => {
    AllItens.comprar()
    Informacoes.preencher_infos()
    ResumoCompra.confirmar()
    cy.get('.complete-header')
  })
})
```

cenarios.md
```markdown
integration/cypress_poc/compra.spec.js
# Cenário: 'Comprar'
  1. ## 'Fazer uma compra com sucesso'
integration/cypress_poc/login.spec.js
# Cenário: 'Login'
  1. ## 'Login com sucesso'
  1. ## 'Login com usuário e/ou senha incorretos'
```

No relatório fica

integration/cypress_poc/compra.spec.js
# Cenário: 'Comprar'
  1. ## 'Fazer uma compra com sucesso'
integration/cypress_poc/login.spec.js
# Cenário: 'Login'
  1. ## 'Login com sucesso'
  1. ## 'Login com usuário e/ou senha incorretos'

