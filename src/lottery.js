import web3 from "web3";

const address = '0x9C569EA0C2b02379739aF03FC61B3cD03641C606';
const abi = [
    {
        constant:true,
        inputs:[],
        name:"manager",
        outputs:[{name:"",type:"address"}],
        payable:false,
        stateMutability:"view",
        type:"function"
    },
    {
        constant:false,
        inputs:[],
        name:"pickWinner",
        outputs:[],
        payable:false,
        stateMutability:"nonpayable",
        type:"function"
    },
    {
        constant:true,
        inputs:[],
        name:"getPlayers",
        outputs:[{name:"",type:"address[]"}],
        payable:false,
        stateMutability:"view",
        type:"function"
    },
    {
        constant:false,
        inputs:[],
        name:"enter",
        outputs:[],
        payable:true,
        stateMutability:"payable",
        type:"function"
    },
    {
        constant:true,
        inputs:[{name:"",type:"uint256"}],
        name:"players",
        outputs:[{name:"",type:"address"}],
        payable:false,
        stateMutability:"view",
        type:"function"
    },
    {
        inputs:[],
        payable:false,
        stateMutability:"nonpayable",
        type:"constructor"
    }
];
export default new web3.eth.Contract(abi, address);

// Creating an instance of Web3
// const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9306d9ea4ff24089aeebede32630171c'));
// // Creating an instance of the contract
// const contract = new web3.eth.Contract(abi, address);
// // Exporting the contract
// export default contract; 

