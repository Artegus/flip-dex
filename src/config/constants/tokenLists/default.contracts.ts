export const defaultContracts = {
    WETH: {
        name: 'WETH',
        address: '0xd0A1E359811322d97991E03f863a0C30C2cF029C'
    },
    REKT_COIN: {
        name: 'REKT',
        address: '0x439204d72e04e309adbf49410a403f2931a7a157'
    },
    REKT_TRANSACTION_BATCHER: {
        name: 'RektTransactionBatcher',
        address: '0x059bD73c045713A9B33a0735Da04E7E4c6f8d451'
    },
    UNISWAPV2_ROUTER02: {
        name: 'UniswapV2Router02',
        address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    }, 
	UNISWAPV2_PAIR: {
		name: 'UniswapV2Pair',
		address: '0x59f3B7FE07319a8d0B233Ada0E32Ca30B6C21314'
	},
	RANDOMNESS_FULFILLER: {
		name: 'RandomnessFulfiller',
		address: '0x42543C0E9092cf56674ECC50908ff3C4F35E4808'
	}
}

export const REKTCOIN = defaultContracts.REKT_COIN.address;
export const REKT_TX_BATCHER = defaultContracts.REKT_TRANSACTION_BATCHER.address;
export const UNISWAPV2 = defaultContracts.UNISWAPV2_ROUTER02.address;
