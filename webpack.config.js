//Permite saber donde vamos a trabajar o donde esta ubicado el proyecto
const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//traemos el plugin de html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


//Configuración necesaria para el proyecto
module.exports = {
    entry: './src/index.js',
    //Punto de entrada de la aplicación
    output:{
        path: path.resolve(__dirname, 'dist'),
        //path resolve para ubicar donde estoy y a donde voy a pasar el proyecto terminado
        filename: 'React-Shop/bundle.js',
        // nombre del archivo js resultante
        publicPath:'/React-Shop/'
        //Para react-route-dom
    },
    mode: 'development',
    //Donde vivira el proyecto una vez que este terminado
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
		}
    },
    //extensiones con las que trabajara el proyecto
    module: { // loaders para cada tipo de archivo
        rules: [
            {//primera regla JavaScript
                test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
                exclude: /node_modules/, // siempre excluir node modules
                use: { // indicamos el loader
                    loader: 'babel-loader' // babel
                }
            },
            {//segunda regla HTML
                test: /\.html$/, //que trabaje con html
                use:{//loader
                    loader: 'html-loader',
                }
            },
            {//tercera regla CSS
                test: /\.(css|scss)$/,//identifica los archivos con los que estaremos trabajando
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {//cuarta regla IMAGENES
                test: /\.(png|jpg|svg|jpeg|webp|gif)$/,
	             /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
                 type: 'asset'
            }
        ]
    },
    //reglas o plugins con las que vamos a estar trabajando
    plugins: [ // plugins
        new HtmlWebpackPlugin({// instanciamos el plugin para html
            template: './public/index.html', // archivo raíz a transformar
            filename: './index.html' // el archivo resultante
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
    ],
    devServer:{
        allowedHosts: path.join(__dirname,'dist'),
        // contentBase corresponde a webpack 4
        // ahora en Webpack 5 se usa allowedHosts
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress:true,
        port:3005,
        historyApiFallback:true
    }
}