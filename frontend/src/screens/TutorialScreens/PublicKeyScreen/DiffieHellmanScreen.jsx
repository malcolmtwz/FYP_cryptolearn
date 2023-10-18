import React from "react";
import { SvgIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import Background from "../../components/Background/Background";

function DiffieHellmanScreen() {
    return (
        <Background>
            <h2 className="title">Diffie-Hellman Key Exchange</h2>
            <h3>Creating a Shared Secret for Encryption</h3>
            <p>Let's see how Alice and Bob can generate a shared secret key, without revealing their private keys</p>

            <div className="center-items-horizontally">
                <div className="center-items">
                    <SvgIcon component={PersonIcon} fontSize="large" color="primary" style={{ fontSize: 64 }} />
                    <p>Alice</p>
                    <SvgIcon component={KeyIcon} fontSize="large" color="primary" style={{ fontSize: 48 }} />
                    <p>Private Key: 6</p>
                </div>

                <div className="center-items">
                    <SvgIcon component={LockOpenIcon} fontSize="large" color="action" style={{ fontSize: 64 }} />
                    <p>Shared Key</p>
                </div>

                <div className="center-items">
                    <SvgIcon component={PersonIcon} fontSize="large" color="secondary" style={{ fontSize: 64 }} />
                    <p>Bob</p>
                    <SvgIcon component={KeyIcon} fontSize="large" color="secondary" style={{ fontSize: 48 }} />
                    <p>Private Key: 15</p>
                </div>
            </div>

            <p>Here's how it works:</p>
            <ol>
                <li><b>Choose Common Numbers:</b> Alice and Bob agree on a public base number \(g = 3\) and a public modulus \(p = 17\).</li>
                <li><b>Select Private Keys:</b> Alice chooses a private key \(a = 6\) and Bob chooses \(b = 15\). These numbers are kept secret.</li>
                <li><b>Compute Public Keys:</b> Alice computes \(A = g^a \mod p = 3^6 \mod 17 = 15\) and Bob computes \(B = g^b \mod p = 3^{15} \mod 17 = 6\) and they swap these computed numbers.</li>
                <li><b>Compute Shared Secret:</b> Alice computes \(s = B^a \mod p = 6^6 \mod 17 = 9\) and Bob computes \(s = A^b \mod p = 15^{15} \mod 17 = 9\). Now, they both have the shared secret 9.</li>
                <li><b>Encrypt Message:</b> Using the shared secret, Alice and Bob can now communicate securely. For simplicity, let's say they use the shared secret as a simple shift cipher key to encrypt and decrypt messages. Alice wants to send "hello" which encrypts to "lipps" with a shift of 9.</li>
            </ol>

            <p>Now Alice and Bob can send encrypted messages between each other using the shared secret key without ever having to share the key itself!</p>

            <p>Click below to try a simulated key exchange and message encryption!</p>
            <NavigationButton to="/diffie-hellman-simulation" />

            <hr className="border-line"/>
        </Background>
    );
}

export default DiffieHellmanScreen;
