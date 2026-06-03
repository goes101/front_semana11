const express = require('express');
const app = express();
const port = 3000;

// O site busca os dados dos produtos aqui
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Produto 1', price: 100 },
    { id: 2, name: 'Produto 2', price: 150 },
    { id: 3, name: 'Produto 3', price: 200 },
  ];
  res.json(products);
});

// A tela principal do site
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Lojinha de Teste</title></head>
      <body>
        <h1>Lista de Produtos</h1>
        <ul id="products-list"></ul>
        <script>
          // Pega os produtos e coloca na tela
          fetch('/products')
            .then(response => response.json())
            .then(products => {
              const list = document.getElementById('products-list');
              products.forEach(product => {
                const li = document.createElement('li');
                li.innerHTML = product.name + ' - R$ ' + product.price + ' <button class="btn-comprar">Adicionar ao Carrinho</button>';
                list.appendChild(li);
              });
            });
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('✅ Site no ar! O servidor está rodando na porta 3000.');
});
