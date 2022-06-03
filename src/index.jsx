
// importando uma função chamada "render" dentro do
// pacote react- dom
import{ render} from "react-dom";
// Importar a função chamada "App"
import { App } from './App';

// executando a função render, contendo 2 parâmetros
// O 1º parâmetro é o que, que eu quero renderizar( oq será exibido em tela)
// e o 2º parâmetro é dentro de qual elemento eu quero renderizar essa informação 
// Essa função vai colocar um H1 dentro da viv "root"
render(<App />, document.getElementById('root'))





/*const user = {
    name: 'Mike',
  }
  console.log(user.address?.street) */