const startDB = require('./mongodb');
class Loaders{
   start(){
      //chama as funções de inicialização
      startDB();
   }
}
module.exports = new Loaders();
