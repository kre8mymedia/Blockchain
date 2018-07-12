const sha256 = require('sha256');

function Blockchain () {
    this.chain = []; // Chain is equal to empty array
    this.pendingTransactions = []; // Pending Transcation list equal to empty array

}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) { // Creates New Block on chain
    const newBlock = {
        index: this.chain.length + 1, // What block in chain
        timestamp: Date.now(), // Timestamp of block || Found?
        transactions: this.pendingTransactions, // pendingTransactions in new Block
        nonce: nonce, // random number -- for better encryption?
        hash: hash, // SHA-256 hash of newBlock && includes previous Block hash
        previousBlockHash: previousBlockHash // SHA-256 of previous Block
    };

    this.pendingTransactions = []; // Sets pendingTranscations to empty array when newBlock created
    this.chain.push(newBlock); //Pushs new block to existing chain

    return newBlock; // returns new block
}

Blockchain.prototype.getLastBlock = function() { // *returns* last block from our Blockchain
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient, data) { // Creates new transcation
    const newTransaction = { 
        amount: amount, // amount being sent
        sender: sender, // Who is sending amount
        recipient: recipient // Who is receiving amount

    };

    this.pendingTransactions.push(newTransaction); // pushes newTranscation to pendingTransactions Array

    return this.getLastBlock() ['index'] + 1; // What block able to find newTransaction in, when mined?
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) { // returns blockData into hash string 'H3H2HO3I3OH2'
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString); // turns stringified data into new hash representing newBlock
    return hash; // returns hash
}

module.exports = Blockchain; // Exports Blockchain to external files ex: test.js