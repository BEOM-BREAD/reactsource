import BackComp from "./BackComp";
import FrontComp from "./FrontComp";

const MyComp = () => {
  const frontData = ["HTML5", "CSS3", "JavaScript", "React"];
  const backData: string[] = ["JAVA", "PYTHON", "ORACLE", "Node.js"];

  return (
    <div>
      {/* 개별 컴포넌트 삽입 */}
      <h2>React - Props</h2>
      <ol>
        <FrontComp frontData={frontData} frTitle={"프론트엔드"} />
        <BackComp backData={backData} baTitle={"백엔드"} />
      </ol>
    </div>
  );
};

export default MyComp;
