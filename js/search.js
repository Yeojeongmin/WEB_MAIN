document.getElementById("search_btn").addEventListener('click', search_message);
var search_array = [];

  document.getElementById("search_form").addEventListener('submit', function(event) {
    event.preventDefault();
    search_message();
  });

  function search_message() {
    let search_str = document.querySelector("#search_txt"); // 변수에 저장
    if (search_str.value.length === 0) {
      alert("검색어가 비었습니다. 입력해주세요");
    } else if (no_str(search_str.value)) {
      alert(search_str.value + " 비속어는 적절하지 않습니다.");
    } else {
      alert("검색을 수행합니다!");
      if (search_array.length >= 10) {
        search_array.shift(); // 가장 오래된 검색어 삭제
      }
      search_array.push(search_str.value); // 배열에 검색어 추가
      document.getElementById("search_message").innerHTML = search_array.join(", "); // 값 변환
      let form = document.getElementById("search_form");
      form.action = "https://www.google.co.kr/search?q=" + encodeURIComponent(search_str.value);
      form.target = "_blank";
      form.submit();
    }
  }

  function no_str(str) {
    let badWords = ["18", "ㅅㅂ", "ㅂㅅ"];
    for (let i = 0; i < badWords.length; i++) {
      if (str.includes(badWords[i])) {
        return true;
      }
    }
    return false;
  }