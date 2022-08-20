// CREATE AN OFFLINE ACCOUNT
function getAccount() {

  results = 'Roaming approach... '
  document.getElementById('standbyResultField').value = results

  // Create offline
  const my_wallet = xrpl.Wallet.generate()

  document.getElementById('standbyResultField').value = results

  // Getting values
  document.getElementById('walletText').value = my_wallet.address
  document.getElementById('pubKText').value = my_wallet.publicKey
  document.getElementById('privKText').value = my_wallet.privateKey
  document.getElementById('seedText').value = my_wallet.seed
  results += 'account created.'
  document.getElementById('standbyResultField').value = results

  document.getElementById('btAccount').disabled = true
  document.getElementById('btExport').disabled = false

  message()

}


// EXPORT ACCOUNT INFORMATIONS
function exportAccount() {

  // Getting wallet informations with head
  var wallet_informations = [

    [
      "wallet",
      "public_key",
      "private_key",
      "seed"
    ],

    [
      document.getElementById('walletText').value,
      document.getElementById('pubKText').value,
      document.getElementById('privKText').value,
      document.getElementById('seedText').value
    ],
    
  ]

  // Creating cvs file
  let csvContent = "data:text/csv;charset=utf-8,"
    + wallet_informations.map(e => e.join(",")).join("\n");

  // Export csv file
    var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "wallet_informations.csv");
  document.body.appendChild(link); 
  link.click();


}


// ALERT MESSAGE FUNCTION
function message() {

  window.alert('Congratulations! Now... you should better back up your wallet informations by press "Export" button!')

}