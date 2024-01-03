//제출 이벤트를 받는다 (이벤트핸들링)
//제출된 입력 값들을 참조
// 입력 값에 문제가 있는 경우 이를 감지한다.
//가입 환영 인사를 제공한다

const form = document.getElementById("form")

form.addEventListener("submit", function(event){
	event.preventDefault() //기존 기능 차단

	let userId = event.target.id.value
	let userPw1 = event.target.pw1.value
	let userPw2 = event.target.pw2.value
	let userName = event.target.name.value
	let userPhon = event.target.phon.value
	let userPosition = event.target.position.value
	let userGender = event.target.gender.value
	let userEmail = event.target.email.value
	let userIntro = event.target.intro.value
	// 사용자가 입력한 값을 변수에 저장

	if(userId.lengh < 6){ // lengh 문자열 길이
		alert("아이디가 너무 짧습니다. 6자이상 입력해주세요")
		return
	}

	if(userPw1 !== userPw2){
		alert("비밀번호가 잃치하지 않습니다.")
		return
	}

	//가입이 잘 되었다는 환영인사
	document.body.innerHTML = ""
	//body에 있는 html코드를 부른다 
	// = 새로운 html코드를 가져온다. 아무것도 없는걸로
	document.write(`<p>${userId}님 환영합니다.`)
	//write 새로운 문자 추가 


})