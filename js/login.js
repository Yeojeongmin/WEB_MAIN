function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수



function login() {
  let form = document.querySelector("#form_main");
  let id = document.querySelector("#floatingInput");
  let password = document.querySelector("#floatingPassword");
  let check = document.querySelector("#idSaveCheck");

  form.action = "../index_login.html";
  form.method = "get";

  if (check.checked == true) {
    alert("쿠키를 저장합니다.");
    setCookie("id", id.value, 1);
    alert("쿠키 값: " + id.value);
  } else {
    setCookie("id", id.value, 0);
  }

  if (id.value.length === 0 || password.value.length === 0) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
  } else if (!validateEmail(id.value)) {
    alert("유효한 이메일 주소를 입력해주세요.");
  } else if (!validatePassword(password.value)) {
    alert("유효한 패스워드를 입력해주세요.\n(최소 8자 이상, 영문 대/소문자 및 숫자를 포함해야 합니다)");
  } else {
    // 세션 저장 코드를 추가해주세요.
    if (sessionStorage) {
      sessionStorage.setItem("Session_Storage_test", id.value);
    } else {
      alert("로컬 스토리지 지원 x");
    }
    form.submit();
  }
}

// 이메일 형식을 검사하는 정규 표현식
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// 패스워드 형식을 검사하는 정규 표현식
function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordPattern.test(password);
}

function logout() {
  if (confirm('로그아웃 하시겠습니까?: 기존 정보는 삭제합니다.')) {
    document.getElementById("logoutForm").submit(); // 폼 제출
  }
	 
}

function get_id(){
	if(true){
		decrypt_text();
	}
	else{
    var getParameters = function(paramName) {
        var returnValue;
        var url = location.href;
        var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
        for(var i = 0; i < parameters.length; i++) { 
            var varName = parameters[i].split('=')[0];
            if (varName.toUpperCase() == paramName.toUpperCase()) {
                returnValue = parameters[i].split('=')[1];
                return decodeURIComponent(returnValue);
            }
        }
    }
    alert(getParameters('Id') + '님 반갑습니다!');
	}
}

function init() {
  let id = document.querySelector("#floatingInput");
  let check = document.querySelector("#idSaveCheck");
  let get_id = getCookie("id");
  
  if (get_id) { 
    id.value = get_id; 
    check.checked = true; 
  }
	session_del(); // 세션 스토리지 삭제

  session_check();
}


