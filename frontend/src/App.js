import WalletConnect from "./components/WalletConnect";
import StakeForm from "./components/StakeForm";

function App() {
    return (
        <div>
            <h1>Full Stack Staking DApp</h1>

            <WalletConnect />
            <StakeForm />
        </div>
    );
}

export default App;