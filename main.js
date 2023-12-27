// Function to run when the encryption button is clicked
function runEncryption() {
    // Get the plaintext and shift values from the HTML elements
    const plaintext = document.getElementById('plaintext').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = document.getElementById('result');

    // Check if there is text for encryption
    if (plaintext) {
        // Call the encrypt function and display the result
        const ciphertext = encrypt(plaintext, shift);
        result.value = `Encrypted: ${ciphertext}`;
    } else {
        // Display a message if there is no text for encryption
        result.value = 'Please enter text for encryption.';
    }
}

// Function to run when the decryption button is clicked
function runDecryption() {
    // Get the ciphertext and shift values from the HTML elements
    const ciphertext = document.getElementById('plaintext').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = document.getElementById('result');

    // Check if there is text for decryption
    if (ciphertext) {
        // Call the decrypt function and display the result
        const decryptedText = decrypt(ciphertext, shift);
        result.value = `Decrypted: ${decryptedText}`;
    } else {
        // Display a message if there is no text for decryption
        result.value = 'Please enter text for decryption.';
    }
}

// Caesar Cipher Encryption function
function encrypt(plaintext, shift) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            ciphertext += String.fromCharCode(((charCode - 65 + shift) % 26 + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            ciphertext += String.fromCharCode(((charCode - 97 + shift) % 26 + 26) % 26 + 97);
        } else {
            // Non-alphabetic characters
            ciphertext += plaintext[i];
        }
    }
    return ciphertext;
}

// Caesar Cipher Decryption function
function decrypt(ciphertext, shift) {
    return encrypt(ciphertext, 26 - shift);
}
