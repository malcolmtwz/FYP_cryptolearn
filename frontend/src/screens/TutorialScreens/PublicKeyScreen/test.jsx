// import React, { useState, useEffect } from "react";
// // import "./PublicKeyScreen.css";
// import { SvgIcon, Typography, Divider, Box, Button } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import Person3Icon from '@mui/icons-material/Person3';
// import KeyIcon from '@mui/icons-material/Key';
// import LockOpenIcon from '@mui/icons-material/LockOpen';


// import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
// import Background from "../../components/Background/Background";



// function PublicKeyScreen() {

//     return(
//         <Background>

//             <h2 className = "title"> Public Key Encryption</h2>
//             <h3>Creating a Shared Secret for Encryption</h3>
//             <p>Let's see how Alice and Bob can generate a shared secret key, without revealing their private keys</p>

//             <hr className="border-line"/>

//             <p> Let's use an example to understand this concept!</p>

//             <p> Lets say that Alice and Bob wants to send each other encrypted messages </p>

//             <Box display="flex" justifyContent="space-around" alignItems="center" my={3}>
//                 <Box textAlign="center">
//                     <PersonIcon fontSize="large" color="primary" sx={{ fontSize: 64 }} />
//                     <Typography>Bob</Typography>
//                     <KeyIcon fontSize="large" color="primary" sx={{ fontSize: 48 }} />
//                     <Typography>Private Key: b = 15</Typography>
//                     <Typography>Public Key: B = g<sup>b</sup> mod p</Typography>
//                 </Box>

//                 <Box sx={{ borderLeft: 2, borderColor: 'divider', height: 200, mx: 3 }} />

//                 <Box textAlign="center">
//                     <LockOpenIcon fontSize="large" color="action" sx={{ fontSize: 64 }} />
//                     <Typography>Shared Parameters</Typography>
//                     <Typography>Prime Number: p = 23</Typography>
//                     <Typography>Base: g = 5</Typography>
//                 </Box>

//                 <Box sx={{ borderLeft: 2, borderColor: 'divider', height: 200, mx: 3 }} />

//                 <Box textAlign="center">
//                     <PersonIcon fontSize="large" color="secondary" sx={{ fontSize: 64 }} />
//                     <Typography>Alice</Typography>
//                     <KeyIcon fontSize="large" color="secondary" sx={{ fontSize: 48 }} />
//                     <Typography>Private Key: a = 6</Typography>
//                     <Typography>Public Key: A = g<sup>a</sup> mod p</Typography>
//                 </Box>
//             </Box>
            
//             <div className="center-items">
//                 <p>Here's how it works:</p>
//                 <ol>
//                     <li>Alice and Bob agree on a public base number and a public modulus.</li>
//                     <li>Alice and Bob each choose a private key.</li>
//                     <li>They exchange the result of raising the base number to the power of their private key, modulo the public modulus.</li>
//                     <li>They each raise the received number to the power of their own private key, modulo the public modulus.</li>
//                     <li>Now, Alice and Bob have the same shared secret, without directly sending their private keys!</li>
//                 </ol>
//             </div>

//             <p>Now Alice and Bob can send encrypted messages between each other using the shared secret key without ever having to share the key itself!</p>

//             <hr className="border-line"/>

//             <h3> Try it below! </h3>

//             <NavigationButton to="/diffie-hellman-simulation" />

            
//             <hr className="border-line"/>

//         </Background>
//     );

    
// }

// export default PublicKeyScreen;
