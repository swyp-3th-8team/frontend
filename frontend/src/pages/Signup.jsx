import Button from "../components/Button";
import TextInput from "../components/TextInput";
import styles from "./Signup.module.scss";

export default function Signup() {
const [username, setUsername] = useState()
  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <TextInput
        value={username}
          label="아이디를 입력해주세요"
          placeholder="6자 이상 입력해주세요."
        />
        <div className={styles.overlap}>
          <div>중복확인 메세지</div>
          <button>중복 확인하기</button>
        </div>
      </div>
      <div className={styles.makePw}>
        <TextInput
          label="비밀번호를 입력해주세요"
          placeholder="영문, 숫자, 특수문자로 8자 이상 입력해주세요."
        />
        <TextInput
          label="비밀번호를 다시 한 번 확인해주세요"
          placeholder="비밀번호를 다시 입력해주세요."
        />
      </div>
      <Button finishButton="회원가입 완료" />
    </div>
  );
}
 const commentWrite = function() {
    // 'duplicate'라는 id를 가진 버튼 클릭 시 실행.
            // json 형식으로 데이터 set
            var params = {
                      "username": $("#username").val()
            }

            // ajax 통신
            $.ajax({
                type : "GET",            // HTTP method type(GET, POST) 형식이다.
                url : "/member/duplicate",      // 컨트롤러에서 대기중인 URL 주소이다.
                data : params,            // Json 형식의 데이터이다.
                success : function(res){ // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
                    // 응답코드 > 0000
                   // alert(res)
                    if(res == true){
                    alert('중복된 아이디 입니다.')
                    }else{
                    alert('사용 가능한 아이디 입니다.')
                    }
            }

})
}