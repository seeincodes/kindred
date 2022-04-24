import React from 'react';
import './App.css';
// third-web wallet connection
import { ConnectMetamaskButtonComponent } from './components/ConnectWallet';
import { useAddress } from "@thirdweb-dev/react";
import Logo from "./assets/kindred_logo_full_white.png";
import { FormControl } from 'react-bootstrap';
import { Form} from 'react-bootstrap';


import { ethers } from 'ethers';
// Gnosis Safe Core SDK 
import EthersAdapter from '@gnosis.pm/safe-ethers-lib';
import SafeServiceClient, { OwnerResponse } from '@gnosis.pm/safe-service-client';
import Safe, { SafeFactory, SafeAccountConfig } from '@gnosis.pm/safe-core-sdk';
import { Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let newSafeAddress = ""

// TODO: Implement Checking if the user already has an account
// const isUserExistingClient = async () => {
//   console.log(address)
//   const safeService = new SafeServiceClient({
//     txServiceUrl: 'https://safe-transaction.rinkeby.gnosis.io',
//     ethAdapter: ethAdapterOwner1
//   })
//   const safes: OwnerResponse = await safeService.getSafesByOwner()

// }

// isUserExistingClient();

const createSafe = async (addresses: any) => {
  const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 })
  //  TODO: should be a check for minimum of 5 benefactors before creation
  const owners = addresses;
  const threshold = 2
  const safeAccountConfig: SafeAccountConfig = {
    owners,
    threshold,
  }

  const safeSdk: Safe = await safeFactory.deploySafe({ safeAccountConfig });

  newSafeAddress = await safeSdk.getAddress()
  console.log(newSafeAddress);

}

const web3Provider = window.ethereum;
const provider = new ethers.providers.Web3Provider(web3Provider);

const owner1 = provider.getSigner(0);
const ethAdapterOwner1 = new EthersAdapter({
  ethers,
  signer: owner1
});

function App() {
  const address = useAddress();

  return (
    <div className="App">
      <header className="App-header">

        <img  style = {{marginBottom: "40px", marginTop: "40px"}}src={Logo} />
        <ConnectMetamaskButtonComponent />

        {address ? (
          <div>
            <p style={{ marginTop: "20px" }}>Take care of your family and friends once you pass.</p>
            <hr></hr>
            <p>Enter a list of 5 beneficiaries: </p>
            <Form style= {{display: "flex", justifyContent: "space-between"}}>
              <Form.Group style ={{margin: "20px"}} className="mb-1" controlId="formBasicEmail">
                <Form.Label>Kin #1</Form.Label>
                <Form.Control type="text" placeholder="Enter wallet address" />
              </Form.Group>
              <Form.Group style ={{margin: "20px"}} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kin #2</Form.Label>
                <Form.Control type="text" placeholder="Enter wallet address" />
              </Form.Group>
              <Form.Group style ={{margin: "20px"}} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kin #3</Form.Label>
                <Form.Control type="text" placeholder="Enter wallet address" />
              </Form.Group>
              <Form.Group style ={{margin: "20px"}} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kin #4</Form.Label>
                <Form.Control type="text" placeholder="Enter wallet address" />
              </Form.Group>
              <Form.Group style ={{margin: "20px"}} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Kin #5</Form.Label>
                <Form.Control type="text" placeholder="Enter wallet address" />
              </Form.Group>
            </Form>
            <p>{newSafeAddress}</p>

            <Button variant="light" onClick={() => createSafe(['0x00f4349CC7fE6DE11bCDd00f0455b16cB35878AA', '0x0f8135a0eAaDa858C44E674E7fD3A4bb1D083157',])}>Create Safe</Button>
            <p></p>
          </div>

        ) : (
          null)}
        <p>
        </p>

      </header>
    </div>
  );
}

export default App;
