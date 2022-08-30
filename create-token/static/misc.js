export async function readTextFile(file) {
  return (await makeRequest("GET", file)).statusText;
}

export function number(some_numbers) {
  return web3.utils.toBN(some_numbers);
}

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve({
          status: this.status,
          statusText: xhr.response,
        });
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

function getGasPrice(callback) {
  web3.eth.getGasPrice().then((result) => {
    console.log("gas_price:", result); //gas price in wei
    callback(result);
  });
}

async function getGasLimit(data_size, callback) {
  setValue("deployStatus", "Estimate gas limit...");
  showElement("deployStatus");
  var last_block = await web3.eth.getBlockNumber();

  var total_gas_used = 0;
  var total_size = 0;
  var total_gas_used_per_byte = 0;
  var average_gas_limit = 0;
  var last_num_block = 20;
  console.log(last_block);

  console.log("data_size", data_size);

  for (let i = 0; i < last_num_block; i++) {
    var block = await web3.eth.getBlock(last_block - i);
    var gas_used_per_byte = parseInt(block.gasUsed / block.size);
    console.log("gas_used_per_byte:" + gas_used_per_byte);
    total_gas_used_per_byte += gas_used_per_byte;
  }

  var average_gas_limit = parseInt(
    (data_size * total_gas_used_per_byte) / last_num_block
  );
  console.log("average_gas_limit:" + average_gas_limit);

  callback(average_gas_limit);
  // console.log("average_gas_limit", gas_limit / 5);
  hideElement("deployStatus");
}

function getDataSize(data, argument_array) {
  return parseInt(data.length * 0.5 + argument_array.length * 32);
}

export async function deployContract(
  token_type,
  token_contract_path,
  argument_array,
  callback,
  library_address,
  verificationCallback
) {
  var abi_raw = await readTextFile(token_contract_path + "abi");
  var abi = JSON.parse(abi_raw);
  console.log(Object.values(abi));

  console.log("web3 object", web3);
  var newContract = new web3.eth.Contract(abi);
  console.log(
    `
        new contract:

        ${newContract}
        `
  );

  var data = await readTextFile(token_contract_path + "data");

  console.log(token_contract_path + "data");
  var data = JSON.parse(data)["object"];

  if (token_type == "rewardtoken") {
    if (typeof library_address !== undefined && library_address != null) {
      library_address = library_address.replace("0x", "");

      data = data.replaceAll(
        "__$1c23150e9628aa0c9b977eaf140b034389$__",
        library_address
      );
      var price = getPrice(token_type);
    } else {
      //deploy library
      var price = "0";
    }
  }
  // //onboard new users with pricing model
  // else if (token_type == "standard") {
  //   var price = getPrice(token_type);
  //   price = parseFloat(price) - 0.01;
  //   price = price.toString();
  // }
  else {
    var price = getPrice(token_type);
  }

  console.log(`
  library_address: ${library_address}

  data: ${data}
  `);

  console.log("argument_array", argument_array);

  if (argument_array != []) {
    //not a library
    var argument_types = await getConstructor(token_contract_path + "abi");

    var encoded_constructor = encodeParameters(argument_types, argument_array);

    console.log("encoded_constructor", encoded_constructor);
  }

  try {
    var bytecodeWithEncodedParameters = newContract
      .deploy({
        data: data,
        arguments: argument_array,
      })
      .encodeABI();

    var gas_limit = await web3.eth.estimateGas({
      data: bytecodeWithEncodedParameters,
      from: selectedAccount,
      value: web3.utils.toHex(web3.utils.toWei(price, "ether")),
    });

    console.log("bytecodeWithEncodedParameters", bytecodeWithEncodedParameters);

    console.log("gaslimit", gas_limit);

    getGasPrice(function (gas_price) {
      newContract
        .deploy({
          data: data,
          arguments: argument_array,
        })
        .send(
          {
            from: selectedAccount,
            gas: gas_limit,
            gasPrice: gas_price, //5 gwei
            value: web3.utils.toWei(price, "ether"),
          },
          function (error, transactionHash) {}
        )
        .once("sending", function (payload) {
          console.log("sending", payload);
        })
        .once("sent", function (payload) {
          console.log("sent", payload);
          setValue("deployStatus", "Deploy contract...");
          showElement("deployStatus");
        })
        .on("error", function (error) {
          callback("error", error);
          hideElement("deployStatus");
        })
        .on("transactionHash", function (transactionHash) {
          callback("transactionHash", transactionHash);
        })
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress); // contains the new contract address
          callback("receipt", receipt);
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          callback("confirmation", confirmationNumber);
        })
        .then(async function (newContractInstance) {
          console.log(newContractInstance.options.address); // instance with the new contract address
          callback("done", newContractInstance.options.address);
          // hideElement("deployStatus");
          setValue("deployStatus", "Verify contract...");

          if (!token_contract_path.includes("/lib.")) {
            await sleep(30);

            var contract_address = newContractInstance.options.address;

            console.log("contract_address", contract_address);
            var source_code = await readTextFile(token_contract_path + "sol");

            if (token_contract_path.includes("standard")) {
              var contract_name = "StandardToken";
            } else if (token_contract_path.includes("safemoon")) {
              var contract_name = "SafeToken";
            } else if (token_contract_path.includes("liquiditygenerator")) {
              var contract_name = "LiquidityGenerator";
            } else if (token_contract_path.includes("reward")) {
              var contract_name = "RewardToken";
              var library_names = ["IterableMapping"];
              var library_addresses = ["0x" + library_address];
            } else if (token_contract_path.includes("smarttax")) {
              var contract_name = "SmartTax";
            } else if (token_contract_path.includes("marketingtax")) {
              var contract_name = "MarketingTax";
            } else if (token_contract_path.includes("promax")) {
              var contract_name = "ProMax";
            } else {
              var contract_name = "StandardToken";
            }

            var compiler_version = await readTextFile(
              token_contract_path + "compiler"
            );
            var encoded_arguments = encoded_constructor;
            verifyContract(
              contract_address,
              source_code,
              contract_name,
              compiler_version,
              encoded_arguments,
              library_names,
              library_addresses,
              verificationCallback
            );
          }
        });
    });
  } catch (error) {
    console.log("try estimate gas limit", error);
    callback("error", error);
  }
}

export function sleep(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
}

export async function createToken(
  token_type,
  argument_array,
  callback,
  library_address,
  verificationCallback
) {
  var token_contract_path = "./static/contracts/" + token_type + "/";

  await deployContract(
    token_type,
    token_contract_path,
    argument_array,
    callback,
    library_address,
    verificationCallback
  );
}

export async function deployLibrary(
  token_type,
  argument_array,
  callback,
  verificationCallback
) {
  var token_contract_path = "./static/contracts/" + token_type + "/lib.";

  await deployContract(
    token_type,
    token_contract_path,
    argument_array,
    callback,
    null,
    verificationCallback
  );
}

export function copyToCliBoard(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  $("#copyTokenAddress").attr("data-bs-original-title", "Copied!");
  $("#copyTokenAddress").attr("title", "Copied!");
  $("#copyTokenAddress").tooltip("show");

  setTimeout(() => {
    $("#copyTokenAddress").tooltip("hide");
    $("#copyTokenAddress").attr("title", "Copy to clipboard");
    $("#copyTokenAddress").attr("data-bs-original-title", "");
  }, 500);
}

export function setValue(class_name, value) {
  $("." + class_name).text(value);
}

export function hideElement(class_name) {
  $("." + class_name).css("display", "none");
}

export function showElement(class_name) {
  $("." + class_name).css("display", "block");
}

export function verifyContract(
  contract_address,
  source_code,
  contract_name,
  compiler_version,
  encoded_arguments,
  library_names,
  library_addresses,
  verificationCallback
) {
  if (library_names == undefined) {
    library_names = [""];
  }

  if (library_addresses == undefined) {
    library_addresses = [""];
  }

  var api_key = getApiKey();

  var api_url = getApiUrl();
  //Submit Source Code for Verification
  $.ajax({
    type: "POST", //Only POST supported
    url: api_url, //Set to the  correct API url for Other Networks
    data: {
      apikey: api_key, //A valid API-Key is required
      module: "contract", //Do not change
      action: "verifysourcecode", //Do not change
      contractaddress: contract_address, //Contract Address starts with 0x...
      sourceCode: source_code, //Contract Source Code (Flattened if necessary)
      codeformat: "solidity-single-file", //solidity-single-file (default) or solidity-standard-json-input (for std-input-json-format support
      contractname: contract_name, //ContractName (if codeformat=solidity-standard-json-input, then enter contractname as ex: erc20.sol:erc20)
      compilerversion: compiler_version, // see https://BscScan.com/solcversions for list of support versions
      optimizationUsed: 1, //0 = No Optimization, 1 = Optimization used (applicable when codeformat=solidity-single-file)
      runs: 200, //set to 200 as default unless otherwise  (applicable when codeformat=solidity-single-file)
      constructorArguements: encoded_arguments, //if applicable
      evmversion: "", //leave blank for compiler default, homestead, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul (applicable when codeformat=solidity-single-file)
      licenseType: 1, //Valid codes 1-12 where 1=No License .. 12=Apache 2.0, see https://BscScan.com/contract-license-types
      libraryname1: library_names[0], //if applicable, a matching pair with libraryaddress1 required
      libraryaddress1: library_addresses[0], //if applicable, a matching pair with libraryname1 required
      libraryname2: "", //if applicable, matching pair required
      libraryaddress2: "", //if applicable, matching pair required
      libraryname3: "", //if applicable, matching pair required
      libraryaddress3: "", //if applicable, matching pair required
      libraryname4: "", //if applicable, matching pair required
      libraryaddress4: "", //if applicable, matching pair required
      libraryname5: "", //if applicable, matching pair required
      libraryaddress5: "", //if applicable, matching pair required
      libraryname6: "", //if applicable, matching pair required
      libraryaddress6: "", //if applicable, matching pair required
      libraryname7: "", //if applicable, matching pair required
      libraryaddress7: "", //if applicable, matching pair required
      libraryname8: "", //if applicable, matching pair required
      libraryaddress8: "", //if applicable, matching pair required
      libraryname9: "", //if applicable, matching pair required
      libraryaddress9: "", //if applicable, matching pair required
      libraryname10: "", //if applicable, matching pair required
      libraryaddress10: "", //if applicable, matching pair required
    },
    success: function (result) {
      console.log(result);
      if (result.status == "1") {
        //1 = submission success, use the guid returned (result.result) to check the status of your submission.
        // Average time of processing is 30-60 seconds
        console.log(result.status + ";" + result.message + ";" + result.result);
        // result.result is the GUID receipt for the submission, you can use this guid for checking the verification status
      } else {
        //0 = error
        console.log(result.status + ";" + result.message + ";" + result.result);
      }
      console.log("status : " + result.status);
      console.log("result : " + result.result);
      if (verificationCallback != null && verificationCallback != undefined) {
        verificationCallback(contract_address, result);
      }
    },
    error: function (result) {
      console.log("error!");
      console.log("Unexpected Error");
      console.log(result);
      if (verificationCallback != null && verificationCallback != undefined) {
        verificationCallback(contract_address, result);
      }
    },
  });
}

function getApiUrl() {
  switch (getNetwork()) {
    case 56:
      return "https://api.bscscan.com/api";
    case 97:
      return "https://api-testnet.bscscan.com/api";
    case 1:
      return "https://api.etherscan.io/api";
    case 250:
      return "https://api.ftmscan.com/api";
    case 25:
      return "https://api.cronoscan.com/api";
    case 137:
      return "https://api.polygonscan.com/api";
    case 43114:
      return "https://api.snowtrace.io/api";
    case 3:
      return "https://api-ropsten.etherscan.io/api";
    default:
      return "https://api.error.com/api"; //error
  }
}

export function getScanUrl() {
  switch (getNetwork()) {
    case 56:
      return "https://bscscan.com/token/token_address#balances";
    case 97:
      return "https://testnet.bscscan.com/token/token_address#balances";
    case 1:
      return "https://etherscan.io/token/token_address#balances";
    case 250:
      return "https://ftmscan.com/token/token_address#balances";
    case 25:
      return "https://cronoscan.com/token/token_address#balances";
    case 137:
      return "https://polygonscan.com/token/token_address#balances";
    case 43114:
      return "https://snowtrace.io/token/token_address#balances";
    case 3:
      return "https://ropsten.etherscan.io/token/token_address#balances";
    default:
      return "https://error.com/token/token_address#balances"; //error
  }
}

export function getApiKey() {
  switch (getNetwork()) {
    case 56:
    case 97:
      return "M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS";
    case 1:
    case 3:
      return "VRZFIF86GSTY9TDHPCQ7BS42TEI8BN1N5B";
    case 250:
      return "EZGY4849U5XYQJX951P8UPZJSS7EI65XDU";
    case 25:
      return "766DTFB4CU8EF1P311MQ75QIAZSKFD5MA1";
    case 137:
      return "BI9Z3US9AAMSGYUH3H2BN1MTG9RM4XPIY2";
    case 43114:
      return "RR53SMQDSYM72529D24X997HT8PT6DPKWR";
    default:
      return "errorKey"; //error
  }
}

export function checkVerifyStatus(guid) {
  var api_key = getApiKey();
  var api_url = getApiUrl();

  //Check Source Code Verification Status
  $.ajax({
    type: "GET",
    url: api_url,
    data: {
      apikey: api_key,
      guid: guid, //Replace with your Source Code GUID receipt above
      module: "contract",
      action: "checkverifystatus",
    },
    success: function (result) {
      console.log("status : " + result.status); //0=Error, 1=Pass
      console.log("message : " + result.message); //OK, NOTOK
      console.log("result : " + result.result); //result explanation
      // $("#guidstatus").html(">> " + result.result);
    },
    error: function (result) {
      alert("error");
    },
  });
}

export function encodeParameters(types_array, values_array) {
  // ["string","uint256"],["hi","123"]

  console.log("types_array", types_array);

  console.log("values_array", values_array);

  return web3.eth.abi
    .encodeParameters(types_array, values_array)
    .replace("0x", "");
}

export async function getConstructor(abi_path) {
  var abi = JSON.parse(await readTextFile(abi_path));

  console.log(abi);

  for (let i = 0; i < abi.length; i++) {
    var type = abi[i]["type"];
    console.log(type);
    if (type == "constructor") {
      var constructor_abi = abi[i];
      break;
    }
  }

  var inputs = constructor_abi["inputs"];
  var argument_types = [];
  for (let i = 0; i < inputs.length; i++) {
    var argument_type = inputs[i]["internalType"];

    //for struct only
    if (argument_type.includes("struct")) {
      var struct_body_raw = inputs[i]["components"];
      var struct_body = {};
      for (let j = 0; j < struct_body_raw.length; j++) {
        var name = struct_body_raw[j].name;
        var type = struct_body_raw[j].type;
        struct_body[name] = type;
      }
      argument_type = { argument_type: struct_body };
    }

    argument_types.push(argument_type);
  }
  console.log(argument_types);
  return argument_types;
}

export function getNetwork() {
  return parseInt($(".network").val());
}

export function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

function setTokenInfo(token_name, token_price) {
  $("#modalLabel").text(token_name);
  $("#modalBody").text(token_price);
}

export function showPriceDialog(token_name, token_price) {
  setTokenInfo(token_name, token_price);
  $("#tokenIntroDialog").modal("show");
}

$("#btnDialog").on("click", function () {
  setTokenInfo("Meme Coin", "5");
  $("#tokenIntroDialog").modal("show");
});

$("#closeDialog").on("click", function () {
  $("#tokenIntroDialog").modal("hide");
});

$("#contactDev").on("click", function () {
  $("#tokenIntroDialog").modal("hide");
  window.open("https://t.me/MoonDeploy", "_blank");
});

export function getRouter() {
  if (getNetwork() == 97) {
    //testnet bsc
    return "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
  } else {
    return $(".router").val();
  }
}

export function getPrice(tokenType) {
  var priceList = {
    1: {
      standard: 0.01,
      safemoon: 0.02,
      liquiditygenerator: 0.02,
      frictionlessyield: 0.02,
      marketingtax: 0.03,
      smarttax: 0.03,
      rewardtoken: 0.03,
      rewardtoken2: 0.03,
      promax: 0.05,
      customizedToken: 0.3,
    },

    1: {
      standard: 0.01,
      safemoon: 0.02,
      liquiditygenerator: 0.02,
      frictionlessyield: 0.02,
      marketingtax: 0.03,
      smarttax: 0.03,
      rewardtoken: 0.03,
      rewardtoken2: 0.03,
      promax: 0.05,
      customizedToken: 0.3,
    },

    25: {
      standard: 100,
      safemoon: 100,
      liquiditygenerator: 100,
      frictionlessyield: 100,
      marketingtax: 100,
      smarttax: 100,
      rewardtoken: 100,
      rewardtoken2: 100,
      promax: 200,
      customizedToken: 1000,
    },

    56: {
      standard: 0.1,
      safemoon: 0.15,
      liquiditygenerator: 0.15,
      frictionlessyield: 0.15,
      marketingtax: 0.2,
      smarttax: 0.2,
      rewardtoken: 0.2,
      rewardtoken2: 0.5,
      promax: 0.39,
      customizedToken: 2,
    },
    97: {
      standard: 0.1,
      safemoon: 0.15,
      liquiditygenerator: 0.15,
      frictionlessyield: 0.15,
      marketingtax: 0.2,
      smarttax: 0.2,
      rewardtoken: 0.2,
      rewardtoken2: 0.5,
      promax: 0.39,
      customizedToken: 2,
    },

    137: {
      standard: 30,
      safemoon: 30,
      liquiditygenerator: 30,
      frictionlessyield: 30,
      marketingtax: 30,
      smarttax: 30,
      rewardtoken: 30,
      rewardtoken2: 30,
      promax: 60,
      customizedToken: 300,
    },

    250: {
      standard: 30,
      safemoon: 30,
      liquiditygenerator: 30,
      frictionlessyield: 30,
      marketingtax: 30,
      smarttax: 30,
      rewardtoken: 30,
      rewardtoken2: 30,
      promax: 60,
      customizedToken: 300,
    },

    43114: {
      standard: 1,
      safemoon: 1,
      liquiditygenerator: 1,
      frictionlessyield: 1,
      marketingtax: 1,
      smarttax: 1,
      rewardtoken: 1,
      rewardtoken2: 1,
      promax: 2,
      customizedToken: 10,
    },
  };

  return priceList[getNetwork()][tokenType].toString();
}

export function getPriceUnit() {
  if (getNetwork() == 56 || getNetwork() == 97) {
    return "BNB";
  }

  if (getNetwork() == 1 || getNetwork() == 3) {
    return "ETH";
  }

  if (getNetwork() == 137) {
    return "MATIC";
  }

  if (getNetwork() == 43114) {
    return "AVAX";
  }

  if (getNetwork() == 250) {
    return "FTM";
  }

  if (getNetwork() == 25) {
    return "CRO";
  }
}

export function isSupportedNetwork() {
  var supportedNetworks = [0, 1, 56, 137, 250, 25, 43114];
  // var supportedNetworks = [0, 1, 56, 137, 250, 25, 43114, 97]; //testnet
  return supportedNetworks.includes(parseInt(currentNetworkId));
}
