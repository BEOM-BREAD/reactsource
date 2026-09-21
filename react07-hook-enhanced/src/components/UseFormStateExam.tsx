import { useState } from "react";
import { useFormStatus } from "react-dom";

async function submutForm(formData:FormData):Promise<string> {
  return await new Promise((resolve) => setTimeout(() => {resolve(`${formData.get('name')} 님의 요청이 완료되었습니다.`)}, 1000)
)};

const SubmutButton = () => {
  const [pending, data, method, action] = useFormStatus();

  return (
    <button type="submit" className="border p-2 bg-amber-300" disabled={pending}>
      {pending ? "제출중...", "로그인"}
    </button>
  );
};

const UseFormStateExam = () => {

  const [message, setMessage] = useState<string|null>("")

  const handleSubmit = async (formData: FormData) => {
    const result = await submutForm(formData);
    setMessage(result)
  }

  return (
    <div>
      <h2 className="tetx-3xl">UseActionState 사용하기</h2>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="">아이디</label>
          <input type="text" name="userid" placeholder="아이디" className="border p-2" />
        </div>
        <SubmutButton />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UseFormStateExam;
