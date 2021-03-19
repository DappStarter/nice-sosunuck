require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'hover enrich sun foot dad rifle stick solid gloom flower army genius'; 
let testAccounts = [
"0x67c48461351c876514cf950970dbe3d7cc66812b27aeecd3d86d828eecad8101",
"0x12f66c814727101fc70e88525bdce835dfda527988aeb5f2731f11f64df8d2ad",
"0x31dee196872c24604d6505d499bcda3e5b376cf8f90e0c3e4a9a3b1b3ecfd4cc",
"0xa1c19550daa4c46e3691bb509bd07c7d7008cd85ed27994ea8a958f3134fbe9d",
"0xe3a07bedb9503513985f85a8fb6f80f9f8668fd2d37cac1cab078c040a855ccc",
"0x1a826c0f5f0d809d443ce0d622322aafdf558a7989f42abfc5fd676b6f44cb90",
"0xdb1bc18f8a74c85fa097c86c81b658882a2ae06963ea6c660067988e7ea581ce",
"0xddfe9af5dd20ad5f442a68cbcdc0238822b57b756fa7120fb3a729f7911402c3",
"0x1e18c3f0ee9b7c0c8e226e32a2fa1e038d423ae9ced6899beacaf7783a0f52a5",
"0xd901fa9e53f3911385ec348570b74d99c1cd367655fc1ec0bc6062c45799be64"
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

