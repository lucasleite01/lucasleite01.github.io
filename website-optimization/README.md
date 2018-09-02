# Apresentação

Este arquivo README descreve as alterações feitas nos arquivos para alcançar as especificações do projeto Website Optimization.
As modificações citadas a seguir podem ser verificadas a partir de comentários presentes nos arquivos.
O processo de minificação de arquivos otimização de imagens foi feito através do site https://developers.google.com/speed/pagespeed/insights

# Index.html

1. Coloquei os arquivos em um servidor web;
2. Analisei o site através do PageSpeed Insights;
3. Minifiquei as imagens que estavam atrapallhando bloqueando o CRP;
4. Fiz trechos JavaScript que atrapalhavam na renderização serem executados assincronamente;
5. Apliquei media queries a arquivos css para que sejam baixados apenas quando necessários;
6. Minifiquei arquivos css e JavaScript.

# views/js/main.js

1. Fiz alterações na função changePizzaSizes para que a mudança no tamanho das pizzas sejam feitas com tempo inferior a 5 ms;
2. Fiz alterações na função anônima que responde ao evento DOMContentLoaded para que a página rode a 60 fps.

# pizza.html

1. Otimizei imagem views/images/pizza.png;
2. Otimizei imagem views/images/pizzeria.jpg;
3. Minifiquei arquivos css e JavaScript.
