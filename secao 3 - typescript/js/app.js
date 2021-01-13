"use strict";
/* Importando e trabalhando com Modulos. */
exports.__esModule = true;
var base_ships_1 = require("./modulos/base-ships");
var starfighters_1 = require("./modulos/starfighters");
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
/* Trabalhando com bibliotecas JS. */
/*
    Utilizando a biblioteca lodash (https://lodash.com/) como exemplo:

    - inicializa npm
    >  npm init -f
    
    - instala a biblioteca (@versao para instalar uma versao especifica)
    > npm install --save lodash@4.14

    - importando as definicoes de tipos da biblioteca
    - * obs: ao utilizar a opcao --save-dev garante que a dependencia seja
    -        utilizada apenas em desenvolvimento, e nao em runtime.
    -        as definicoes de tipos so servem para ambiente do typescript, em
    -        runtime é utiliza javascript (arquivos que foram compilados).
    > npm install --save-dev @types/lodash@4.17

    - verificar atualizacoes no arquivo package.json
    - verificar a nova pasta node_modules criada no diretorio da aplicacao
*/
// Importa e define variavel padrao ('_') na utilizacao do lodash.
var _ = require("lodash");
console.log(_.pad(" Typescript Examples ", 40, "="));
