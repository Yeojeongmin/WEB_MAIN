class SignUp {
  constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdayDate = birthdayDate;
    this.gender = gender;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.classNumber = classNumber;
    this.random = random;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get contactInfo() {
    return `${this.emailAddress} ${this.phoneNumber} ${this.random}`;
  }

  set contactInfo(contactInfo) {
    const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.random = random;
      
  }
}

function join(){ // 회원가입
    let form = document.querySelector("#form_main");
    let f_name = document.querySelector("#firstName");
    let l_name = document.querySelector("#lastName");
    let b_day = document.querySelector("#birthdayDate");
    let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress");
    let p_number = document.querySelector("#phoneNumber");
    let class_check = document.querySelector(".select form-control-lg");
    
    form.action = "../index_join.html";
    form.method = "get";
    
    if(f_name.value.length === 0 || l_name.value.length === 0 || b_day.value.length === 0 || email.value.length === 0 || p_number.value.length === 0){
        alert("회원가입 폼에 모든 정보를 입력해주세요");
    }else{
		session_join_set(); //회원 가입용 세션 생성
        form.submit();
    }
}

function session_join_set() {
  // 세션을 생성하고 필요한 작업을 수행하는 코드를 추가합니다.
  // 예시: 세션 생성 및 필요한 데이터 저장
  sessionStorage.setItem("join_session", "some_data");
}
