# https://github.com/yeojm2282@gmail.com/WEB_20221076
![image](https://user-images.githubusercontent.com/128564782/226795094-f77ea0e6-39d8-445b-9f2f-5ac3295823a8.png)
## 2023년 3월 22일 깃허브 테스트 완료

미디어소프트웨어학과 20221076학번 여정민 보고서 리포트

<메인 화면>
처음에는 어떤 것부터 수정하거나 제작할지 고민하다가 배경을 넣어보면 좋겠다는 생각이 들었고, 
배경을 어떻게 넣으면 좋을지 고민하다가 아래 코드를 이용해서 넣을 수 있었습니다.
 <style>
		  body{
			  background-image: url("img/nuri_ground00.png");
			  background-repeat: no-repeat;
			  background-size: cover;
		  }
            </style>
저 배경은, 우리집 반려견 누리를 모티브로 인스타툰을 제작했었던 것이 기억에 남아서 웹 페이지의 주제를 "인스타 툰 홍보"라고 잡고,
양 쪽에 반려견 누리를 넣었습니다.

그리고 구글 로고 대신, 마우스 호버를 이용하여 누리 사진과 누리 캐릭터를 번갈아가면서 보여주어 홍보효과를 주었습니다.

검색 버튼 대신에 구글 사이트에서 영감을 받아, 돋보기 아이콘을 널어서 세련되었음을 보여주었습니다.
  <!--<button class="btn btn-success" type="submit" id="search_btn" style="background-color: transparent; border: none;">
    <i class="fas fa-search" style="color: #D2B48C;"></i>
  </button>-->
  그리고 수업 시간에 배운 내용을 수정하여 비속어 필터링 기능을 이용해서 비속어 3개를 사용하게 될 경우, 검색이 안 되도록 제한하였으며,
  검색어가 10개가 넘어가게 될 경우, 제일 예전 검색어가 지워지도록 설정했습니다.
   <!--let search_str = document.querySelector("#search_txt"); // 변수에 저장
    if (search_str.value.length === 0) {
      alert("검색어가 비었습니다. 입력해주세요");
    } else if (no_str(search_str.value)) {
      alert(search_str.value + " 비속어는 적절하지 않습니다.");
    } else {
      alert("검색을 수행합니다!");
      if (search_array.length >= 10) {
        search_array.shift(); // 가장 오래된 검색어 삭제 -->
		
표에는, 누리의 정보 및 좋아하는 것과 싫어하는 것을 담아서 누리 와 누리캐릭터에 대한 궁금증을 해결하였으며,  
아래 Footer에는 인스타 주소 링크를 걸어서 사람들이 들어오도록 제작했습니다.

그리고 오른 쪽 프로필을 누를때, 로그인을 하지 않으면 들어가지 못하도록 제작하여서
사람들의 로그인을 유도하였습니다.
  <li class="nav-item">
  <a class="nav-link" href="#" onclick="alert('로그인을 먼저 해주세요 : 로그인 해주시면 입장 가능합니다.');">Profile</a>
</li>

<회원 가입창>
배경은 여태까지 그렸던 인스타툰을 양 끝에 배치하면서, 귀여운 그림체를 보면서 캐릭터의 매력에 더 빠졌으면 하는 바람으로 인스타 툰에 대해 호기심을 갖도록 하였고,
가운데에는 가장 중심 캐릭터를 크게 배치하여서 캐릭터의 특징을 잘 나타냈습니다.
그리고 우리 나라의 고유 한복을 입은 캐릭터 모습을 보여주어서 다른 캐릭터와의 차별성을 보여주었습니다.

'회원가입' 텍스트를 가운데에 배치하고, 볼드까지 추가해서 회원가입창 임을 강조하였습니다.

회원 가입창 버튼의 색은 기본 버튼색과 배경이 조화롭게 잘 어울려서 버튼색은 기본으로 지정했습니다.

<로그인 화면>
로그인을 하기 전, 세션을 삭제하면서 초기화하게됩니다.
아이디 창과 비밀번호 기본 창이 너무 크다는 느낌이 들어서, 크기를 줄였지만, 다른 버튼과 입력창의 크기는 같도록하여 조화를 이루었습니다.

그리고 아이디 기억 체크박스를 체크하게되면, 로그아웃을 하게 되더라도 아이디는 남아있어서 비밀번호만 치면 바로 로그인을 할 수 있습니다.
<div class="row">
  <div class="col-md-6 offset-md-3">
    <div class="form-floating">
      <input type="email" class="form-control rounded border-0" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">이메일 주소 입력</label>

배경은, 메인 화면과 통일성을 주어서 우리 사이트의 로그인 창 입니다. 라는 것을 알게되었습니다.
그리고 로그인 하게 되면, 쿠키값을 저장하면서 로그인 된 창으로 들어오게됩니다.

로그인 배경은, 회원가입 창에서 본 것 처럼, 인스타 툰 몇개를 배경에 배치하여 읽어보고 싶지만 작은 글씨로 인해 읽기 힘들어하는 사람들을 위해서
<hr>을 이용해 선을 긋고,
"누리에 대한 정보를 얻고싶으면, 아래 인스타 링크로 들어오라는 말로 현혹시키도록 배치하였습니다.

그리고 로그인 전에는 못 들어갔던 프로필을, 지금은 들어갈 수 있게 되었습니다.

<프로필>
프로필 메뉴 창의 배경은 캐릭터 얼굴만 여러개 배치하여, 캐릭터의 모습을 더 강조하였고, 맨 오른쪽 끝에 홈버튼을 누르게 되면,
로그인 되었던 이전 페이지로 돌아가게됩니다.
<!--<button class="btn btn-sm" type="submit" onclick="location.href='https://g--jrcmf.run.goorm.site/index_login.html?'" 
style="background-color: #964B00; color: #fff;">HOME</button>-->

그리고 위에서부터 살펴보면, 왼쪽에는 누리 사진과 간단한 정보를 기입하였습니다.
그리고 아래 Follow 버튼을 누를경우, 인스타 페이지로 이동하게 되며, Message 버튼을 클릭할 경우,
DM으로 들어가도록 제작했습니다.
 <!--<button class="btn btn-sm" type="submit" onclick="location.href='https://www.instagram.com/?hl=ko'" 
		style="background-color: #964B00; color: #fff;">Folow</button>
			  <button class="btn btn-sm" type="submit" onclick="location.href=' https://www.instagram.com/direct/inbox/?hl=ko'" 
		style="background-color: #964B00; color: #fff;">Message</button>
			  <br>-->
기본 정보 아래에는, 진돗개에 대한 다양한 정보를 파악해볼 수 있도록 위키피디아부터 나무위키, 유튜브의 진돗개와 관련된 링크를 걸어놓았습니다.
그리고 인스타그램 QR 코드 배치하여서, 휴대폰을 갖다대면 바로 인스타로 들어갈 수 있도록 만들었습니다.

오른쪽에는 누리 영상이 없어서 유튜브에 있는 누리와 가장 비슷한 강아지의 영상을 맨 위에 배치하였고,
아래에는 누리와 관련된 정보와 인스타 계정을 보여주어서 홍보효과를 높였습니다.

