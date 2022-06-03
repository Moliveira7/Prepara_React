// /* Importar o "path" através do require que é entendido 
//    pelo node, onde o "webpack.config.js" roda */
// const path = require('path');

// // Agora vamos importar 
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// // Exportar um objeto de configurações
// module.exports = {
//      mode: 'development',
//     // O "entry" fala qual é o arquivo principal(inicial) da nossa aplicação
//     // "__dirname" pega o diretorio onde esta o arquivo "webpack.config.js"
//     // dirname= nome do diretório
//     /* detalhe que no lugar da " / " coloca a " , " e colocará a barra correta 
//        de acordo com o sistema operacional */

//     entry: path.resolve(__dirname, 'src', 'index.jsx'),
    
//     // Arquivo de saida, que será o "bundle.js"
//     output: {
//         // Aqui não vou passar o nome do arquivo de destino, pois 
//         // será declarado em "filename"
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'    
//     },
//     // Instrução chamada "resolve"
//     resolve: {
//         // Pode ler arquivos do tipo: js(que é javaScript) e jsx(especifico para o React)
//         extensions: ['.js', '.jsx'],
//     },
//     //Propriedade plugins
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'public', 'index.html')
//         })

//     ],
       



//     // Como a aplicação vai se comportar quando for importado cada tipo de arquivo
//     module: {
//         // Definir um Array de regras
//         // Contendo um objeto de cada tipo de arquivo
//         rules: [
//             {
//                 // Recebe uma expressão regular para saber se é javaScript
//                 // O arquivo deve terminar "$" com "\.jsx" 
      
//                 // Obs. a "\" pois o "." dentro de uma expressão significa qualquer caracter
//                 test: /\.jsx$/, 
//                 // Exluir todos os arquivos dentro da pasta "node_modules"
//                 // Para que não seja lida no browser ainda, pois essa conversão é
//                 //  responsabilidade da biblioteca que eu estou utilizando
//                exclude: /node_modules/,
//                 // Dependência, onde esse fará a integração entre o "babel" e "webpack" 
//                 use: 'babel-loader',
//             }
//         ],

//     }

// };




// Codigo abaixo copiado do GitHub do Wesley 




const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Se a variavel criada for diferente de "production" significa que 
// estou no ambiente de desenvolvimento
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    // O modulo deve ser development se não deve ser production
    mode: isDevelopment ? 'development' : 'production',
    
    // Se estou em abiente de desenvolvimento vou usar o "eval-source-map"
    // se não vou usar o "source-map"
    devtool: isDevelopment ? 'eval-source-map': 'source-map',
    
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public')
        },
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/, // verificar se terminar com .jsx
                exclude: /node_modules/,
                use: 'babel-loader', // integração do babel com webpack
                
            },
            {
                // Criando uma regra para arquivos do tipo CSS
                test: /\.scss$/, 
                exclude: /node_modules/,
                // primeiro o uso do style-loader e depois css-loader 
                use: ['style-loader', 'css-loader', 'sass-loader'],
                
            }
        ],
    }
};
