# 30sToMars
Projeto de exemplo para pousar sondas em Marte.

## Requisitos
* NodeJS 14.19 ou mais atual (Recomendável instalar usando [NVM](https://github.com/nvm-sh/nvm))

## How to run
Simplesmente execute o seguinte comando:

```
node mars.js < input.txt
```

Se quiser salvar a saída em um arquivo qualquer, execute:
```
node mars.js < input.txt > output.txt
```

## Ressalvas
Durante o processo de desenvolvimento, fiz algumas decisões que estavam em aberto.

### O que acontece se a sonda atingir a borda do planalto?
Me parece um pouco estranho uma sonda de milhões de dolares não conseguir detectar um penhasco, então antes de se mover a sonda verifica se o próximo ponto no planalto está dentro dos limites. Caso não esteja ela não se move e permanece no ponto atual.

### Linguagem

Como não foi especificado a linguagem a ser utilizada, fiz o projeto em javascript por ser a linguagem que eu domino. Como o problema é bem simples, eu achei um pouco desnecessario fazer "coisa demais" então mantive a implementação simples, com apenas a classe da sonda e a logica de processamento no arquivo inicial.

### Tratamento de erros
Como já citei antes devido à simplicidade do problema, não achei interessante tratar todos os casos possíveis de erro, até para não poluir o código. Tratei erros apenas na inicialização da sona (criação do objeto passando os parâmetros), caso sejam passados comandos inválidos (Ex: movimentos diferentes de R, L ou M), o código vai quebrar com uma mensagem de erro sem muito sentido.

### Produção e nuvem
Pela descrição do desafio eu entendi que o interesse está mais focado em testar solução de problemas e raciocínio, então ignorei por completo coisas como conteinerização e nuvem. Isso adiciona a necessidade de precisar instalar no NodeJS mas acredito que esse requisito seja facilmente satisfeito.