const generateDiffieHellmanQuestion = () => {
    const publicBase = 5; 
    const publicModulus = 23; 
    const alicePrivate = Math.floor(Math.random() * 10) + 1; 

    // Calculating Alice's public key
    const alicePublic = Math.pow(publicBase, alicePrivate) % publicModulus;

    // The question
    const question = `In a Diffie-Hellman key exchange with a public base of ${publicBase} and a public modulus of ${publicModulus}, if Alice's public key is ${alicePublic}, what could be Alice's smallest private key?`;

    // The answer (note: there could be multiple correct answers due to the nature of modular arithmetic)
    const answer = alicePrivate;

    return { question, answer };
};

const DiffieHellmanQuestions = ({ count = 1 }) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
        questions.push(generateDiffieHellmanQuestion());
    }
    return questions;
};

export default DiffieHellmanQuestions;
