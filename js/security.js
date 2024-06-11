// 암호화 함수
function encodeByAES256(key, data) {
    const rk = key.padEnd(32, " "); // AES256은 key 길이가 32
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(rk), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

// 복호화 함수
function decodeByAES256(key, data) {
    const rk = key.padEnd(32, " "); // AES256은 key 길이가 32
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(rk), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}

function encryptText(key, data) {
    const rk = key.padEnd(32, " "); // AES256은 key 길이가 32
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(rk), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

// 패스워드를 암호화하는 함수
function encryptPassword(password) {
    const encryptionKey = "yourEncryptionKey"; // 암호화에 사용할 키 (적절한 값으로 대체해야 함)
    return encryptText(encryptionKey, password);
}

function decrypt_text(){
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb);
    console.log(b); 
}
