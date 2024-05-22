function session_get() { //세션 읽기
    if (sessionStorage) {
    return sessionStorage.getItem("Session_Storage_pass");
    } else {
    alert("세션 스토리지 지원 x");
    }
    }

    function session_check() { //세션 검사
        if (sessionStorage.getItem("Session_Storage_id")) {
        alert("이미 로그인 되었습니다.");
        location.href='../login/index_login.html'; // 로그인된 페이지로 이동
        }
        }
               function encodeByAES256(key, data){
                    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
                    iv: CryptoJS.enc.Utf8.parse(""),
                    padding: CryptoJS.pad.Pkcs7,
                    mode: CryptoJS.mode.CBC
                    });
                    return cipher.toString();
                    }
                    function decodeByAES256(key, data){
                    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
                    iv: CryptoJS.enc.Utf8.parse(""),
                    padding: CryptoJS.pad.Pkcs7,
                    mode: CryptoJS.mode.CBC
                    });
                    return cipher.toString(CryptoJS.enc.Utf8);
                }

                function encrypt_text(password){
                    const k = "key"; // 클라이언트 키
                    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
                    const b = password;
                    const eb = this.encodeByAES256(rk, b);
                    return eb;
                    console.log(eb);
                    }

                    function decrypt_text(){
                    const k = "key"; // 서버의 키
                    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
                    const eb = session_get();
                    const b = this.decodeByAES256(rk, eb);
                    console.log(b);
                    }

                    function init_logined(){
                        if(sessionStorage){
                        decrypt_text(); // 복호화 함수
                        }
                        else{
                        alert("세션 스토리지 지원 x");
                        }
                        }

                        function session_del() {//세션 삭제
                            if (sessionStorage) {
                            sessionStorage.removeItem("Session_Storage_id");
                            alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
                            } else {
                            alert("세션 스토리지 지원 x");
                            }
                            }

function logout(){
    session_del(); // 세션 삭제
        location.href='../index.html';
     }
            
    document.getElementById("logout_bttt").addEventListener('click', logout);