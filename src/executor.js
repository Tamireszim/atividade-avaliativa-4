import leia from 'readline-sync'
import { question01 } from './question01.js';
import { question02 } from './question02.js';
import { question03 } from './question03.js';
import { question04 } from './question04.js';
import { question05 } from './question05.js';

var opcao = leia.keyInSelect(["question01", "question02", "question03", "question04" , "question05"]) + 1;

switch(opcao){
    case 1: 
    question01();
        break;
    case 2: 
    question02();
        break;
    case 3: 
    question03();
        break;
    case 4: 
    question04();
        break;
    case 5: 
    question05();
        break;
}