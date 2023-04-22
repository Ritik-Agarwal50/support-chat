import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";
//import { fetchEnsAddress } from "@wagmi/core";
import { Chat } from "@pushprotocol/uiweb";


export default function Home() {
  return (
    <>
      <Chat
        account="0x6Fd256273f1aC1c9a4dd60bfEbd8eE7f83470E53" //user address
        supportAddress="0xa76B88B26Ab5682B8559e7b9689B14Ef602fA08F" //support address
      />
      <main >
        <ConnectButton accountStatus="avatar" />
      </main>
    </>
  );
}
