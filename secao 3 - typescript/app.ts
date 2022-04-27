/* Importando e trabalhando com Modulos. */

import { Spacecraft, Containership } from './modulos/base-ships'
import { MilleniumFalcon } from './modulos/starfighters'

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`);


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
import * as _ from 'lodash' 

console.log(_.pad(" Typescript Examples ", 40, "="));
