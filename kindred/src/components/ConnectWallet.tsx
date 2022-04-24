import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { Button } from 'react-bootstrap';



export const ConnectMetamaskButtonComponent = () => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    return (
        <div>
            {address ? (
                <h4>Wallet Connected</h4>
            ) : (
                <Button variant= "light" onClick={connectWithMetamask}>Connect Wallet</Button>
            )}
        </div>
    );
};