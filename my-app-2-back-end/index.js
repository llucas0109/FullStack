
import App from "./Src/app.js";

//const { App } = require('./Src/app.js'); 
const AppInstanciado = App ;
const apl = AppInstanciado.app // Pega 'this.app' do App() 
console.log('index1');
apl.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});

//  "type":"module",   precisa ser usado no pack.json