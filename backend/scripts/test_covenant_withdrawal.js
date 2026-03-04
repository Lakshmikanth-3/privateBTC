#!/usr/bin/env node
/**
 * Test Covenant Withdrawal
 */

const { BitcoinCovenantService } = require('../dist/services/BitcoinCovenantService');
const { WithdrawalAuthorizationService } = require('../dist/services/WithdrawalAuthorizationService');

async function test() {
    console.log('🧪 Testing Covenant Withdrawal');
    console.log('═'.repeat(60));
    
    // Check covenant status
    const status = await BitcoinCovenantService.getCovenantStatus();
    console.log('\n📊 Covenant Status:');
    console.log('   Address:', status.address);
    console.log('   Balance:', status.balance, 'sats');
    console.log('   UTXOs:', status.utxoCount);
    
    if (status.balance === 0) {
        console.log('\n⚠️  Covenant not funded. Send BTC to', status.address);
        return;
    }
    
    console.log('\n✅ Covenant funded and ready!');
    console.log('\n📝 To test withdrawal:');
    console.log('   1. Create a withdrawal on Starknet (burn mBTC)');
    console.log('   2. Backend will create authorization');
    console.log('   3. Covenant will automatically validate and send BTC');
}

test().catch(console.error);
