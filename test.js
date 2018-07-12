const Blockchain = require('./blockchain'); // Pulls in Blockchain.js

const bitcoin = new Blockchain(); // new Blockchain called Bitcoin

/* bitcoin.createNewBlock(2018,'ADAAOFDA39932', 'DAF3HI3OD333HU8');
bitcoin.createNewTransaction(3, 'JOSHODHF3388773J39J', 'RYANNOI3993J9939KK939');
bitcoin.createNewBlock(16548,'33NKDSOFNDNO3I83KI3N', '3NINOAISNF3IONON3NNEANNE');
bitcoin.createNewTransaction(3, 'JOSHODHF3388773J39J', 'RYANNOI3993J9939KK939');
bitcoin.createNewTransaction(35, 'ALANOD3O3NOOFN3NI3J39J', 'LEXIASDF3HH83H8FH92H929F92');
bitcoin.createNewTransaction(10, 'FREDODHF33NO3N3ONJ39J', 'TIMMYNOI3993JON3O39KK939');
bitcoin.createNewBlock(6519,'33NKDSOFNDNO3I83KI3N', '3NINOAISNF3IONON3NNEANNE'); */

// console.log(bitcoin.chain[2]); // Transactions occurred: Block2 && Added to chain: Block3 <-Retrieves
// console.log(bitcoin);

const previousBlockhash = 'H23HO2IHHF3H3H32H3IUH2HOF2';
const currentBlockData = [
    {
        amount: 10,
        sender: 'HO2H3HO2HOF3MDSOMOIAAADAMOI',
        recipient: 'H3O2H2H98FH28H23H9H329HF9'
    },
    {
        amount: 3,
        sender: 'HO32IO2H3F8H3923FH8',
        recipient: 'HO2H3O8F3JOSE 2H832HF923232'
    },
    {
        amount: 320,
        sender: 'PMDSAPMPAPERYANWWIOMPMPMWIO',
        recipient: 'ADSFAMO3MI2832093203'
    }
];

const nonce = 1910;

console.log(bitcoin.hashBlock(previousBlockhash, currentBlockData, nonce));