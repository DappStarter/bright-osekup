require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give nation flush special drift response snow pulp install light army genius'; 
let testAccounts = [
"0x9e724864fee18ce99f98167335c95df7326ab3054e92eb70eca5bd970c2869bd",
"0x4d4139b5373faae14333e91f9fa86adae697fbaff6215033fa2bbac7f94a32b7",
"0x68232b632b1752668e0ce2dc8686257357130e696ba03c5548eedb99160b7226",
"0x7455b43becf898b5ff3261da6b7688fef61b27862ccdc225c758a8870f0eba6c",
"0x69cf980dc6a27a6b825b68b298aa7301acd6d4f257e7cf6f04072a4000343118",
"0xed07ef88949282ff8bc876d6c8fbe06d743f9afd6ab585bb81979889abed8a07",
"0x65a8e021808c4760ebcb56af664fffa42b0ed79ef703d19beee281a7094bcfd6",
"0x42b51c2e967e2307ddbc4299b3f0d86ec990455a6aae09121e842c5e0226b964",
"0x454dafa08487397536ad8e9adae0f4f4761e7bef7899d27af3c5d971a5283416",
"0xe1d0c392a5dfab6524a109eb97f7f49de23671c402e0406170e684de4f3ca1be"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

