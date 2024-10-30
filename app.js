// alert("test");
// 1. 첫번째 버튼을 클릭하면 alert 메세지 '클릭됨!' 을 화면에 출력
// 2. 모든 클래스 drum 이 있는 버튼들은 클릭하면 '클릭됨!'을 화면에 출력

// const but1 = document.querySelector(".set");

// but1.addEventListener("click", () => {
//   alert("클릭됨!");
// });

const btns = document.querySelectorAll("button.drum"); // 7개 버튼 컬렉션

// btns[0].addEventListener("click", () => {
//   alert("클릭됨!");
// });
// btns[1].addEventListener("click", () => {
//   alert("클릭됨!");
// });
// btns[2].addEventListener("click", () => {
//   alert("클릭됨!");
// });
// btns[3].addEventListener("click", () => {
//   alert("클릭됨!");
// });
// btns[4].addEventListener("click", () => {
//   alert("클릭됨!");
// });
// btns[5].addEventListener("click", () => {
//   alert("클릭됨!");
// }); ... 너무 많아짐 버튼이 많을수록
// 반복문 사용 , 모든 버튼이벤트
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
  // console.log(e.target); // 내가 선택한 버튼
  //     e.target.style.color = "white";
  //     //var audio = new Audio("sounds/snare.mp3");
  //     //audio.play();
  //     //내가 선택한 드럼 소리가 나게한다. if else 문 사용
  //     let text = console.log(e.target.textContent);
  //     if (text == "w") {
  //       var audio = new Audio("sounds/tom-1.mp3");
  //       audio.play();
  //     } else if
  //   });
}

//키보드 이벤트
document.addEventListener("keydown", handleKeyboard);

function handleKeyboard(e) {
  //   let text = e.key;
  //   drumsound(text);

  drumsound(e.key);
  animation(e.key);
  //   if (text == "w") {
  //     var audio = new Audio("sounds/tom-1.mp3");
  //     audio.play();
  //   } else if (text == "a") {
  //     var audio = new Audio("sounds/tom-2.mp3");
  //     audio.play();
  //   } else if (text == "s") {
  //     var audio = new Audio("sounds/tom-3.mp3");
  //     audio.play();
  //   } else if (text == "d") {
  //     var audio = new Audio("sounds/tom-4.mp3");
  //     audio.play();
  //   } else if (text == "j") {
  //     var audio = new Audio("sounds/snare.mp3");
  //     audio.play();
  //   } else if (text == "j") {
  //     var audio = new Audio("sounds/crash.mp3");
  //     audio.play();
  //   } else if (text == "l") {
  //     var audio = new Audio("sounds/kick-bass.mp3");
  //     audio.play();
  //   }
}

function handleClick(e) {
  // console.log(e.target); // 내가 선택한 버튼
  //   e.target.style.color = "white";
  //var audio = new Audio("sounds/snare.mp3");
  //audio.play();
  //내가 선택한 드럼 소리가 나게한다. if else 문 사용
  //   let text = console.log(e.target.textContent);
  //   drumsound(text);
  drumsound(e.target.textContent);
  animation(e.target.textContent);
  //   if (text == "w") {
  //     var audio = new Audio("sounds/tom-1.mp3");
  //     audio.play();
  //   } else if (text == "a") {
  //     var audio = new Audio("sounds/tom-2.mp3");
  //     audio.play();
  //   } else if (text == "s") {
  //     var audio = new Audio("sounds/tom-3.mp3");
  //     audio.play();
  //   } else if (text == "d") {
  //     var audio = new Audio("sounds/tom-4.mp3");
  //     audio.play();
  //   } else if (text == "j") {
  //     var audio = new Audio("sounds/snare.mp3");
  //     audio.play();
  //   } else if (text == "j") {
  //     var audio = new Audio("sounds/crash.mp3");
  //     audio.play();
  //   } else if (text == "l") {
  //     var audio = new Audio("sounds/kick-bass.mp3");
  //     audio.play();
  //   }
}

function drumsound(text) {
  if (text == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (text == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (text == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (text == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (text == "j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (text == "j") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (text == "l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

function animation(key) {
  const btn = document.querySelector("." + key);
  btn.classList.add("pressed"); // 클래스 추가
  //   setTimeout(함수, 시간); 밀리세컨
  setTimeout(() => {
    btn.classList.remove("pressed"); // 0.2초 뒤에 제거
  }, 200);
}
