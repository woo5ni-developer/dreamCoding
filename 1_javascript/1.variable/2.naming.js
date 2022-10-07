//변수 이름짓기
/**
  저장된 값을 잘 나타낼 수 있는 의미 있는!! 이름(구체적일 수록 좋다)
  변수 이름에는 예약어는 사용할 수 없다.(ex. if, for, this, while 등등)

  변수 규칙!
  * 라틴문자(0-9, a-z, A-Z), _
  * 대소문자를 구분함
  * 추천 camelCase ex)likeThis
  * 한국어 x
  * 숫자로 시작 x
  * 특수문자 x (_ , $ 예외)
 */
  let apple;
  let redApple;


  //나쁜예제
  let number = 20;//너무 추상적
  let audio1; //숫자로 구분하는 변수(좀 더 구체적으로 하는게 좋음)
  let audio2;

  //좋은예제
  let myAge = 20;

  //꿀팁! - 위치를 일정하게 작성하기
  let audioBackground;
  let audioWind;