//const HDWalletProvider = require('truffle-hdwallet-provider');
const ganache = require('ganache-cli'); //temp
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

/*const provider = new HDWalletProvider(
	'tuition either real jewel music village fit jaguar utility shiver crisp famous',
	'https://rinkeby.infura.io/LhkXeDmC4Bo5Qm1AfLrR'
);*/

//const web3 = new Web3(provider);
const web3 = new Web3(ganache.provider()); //temp

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(interface))
							.deploy({data: bytecode})
							.send({from: accounts[0], gas: '1000000'});
	console.log('Contract deployed to', result.options.address);
};
deploy();