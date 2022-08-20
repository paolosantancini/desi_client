// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************   

function getNet() {
  let net = "wss://s.altnet.rippletest.net:51233"
  return net
} // End of getNet()

// *******************************************************
// ************* Get Account *****************************
// *******************************************************

async function getAccount() {
  let net = getNet()

  const client = new xrpl.Client(net)
  results = 'Connecting to ' + net + '....'
  document.getElementById('standbyResultField').value = results

  await client.connect()

  results += '\nConnected, funding wallet.'

  document.getElementById('standbyResultField').value = results

  // -----------------------------------Create and fund a test account wallet
  const my_wallet = (await client.fundWallet()).wallet

  results += '\nGot a wallet.'

  document.getElementById('standbyResultField').value = results

  // -----------------------------------Get the current balance.
  const my_balance = (await client.getXrpBalance(my_wallet.address))

  document.getElementById('walletText').value = my_wallet.address
  document.getElementById('pubKText').value = my_wallet.publicKey
  document.getElementById('privKText').value = my_wallet.privateKey
  document.getElementById('seedText').value = my_wallet.seed
  results += '\nwallet account created.'
  document.getElementById('standbyResultField').value = results

  // --------------- Capture the seeds for both accounts for ease of reload.
  
  client.disconnect()
} // End of getAccount()