import App from "./app.js";
const apl = App.app // Acessa  'this.app' do App() 
apl.listen(3000, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
//  "type":"module",   precisa ser usado no pack.json