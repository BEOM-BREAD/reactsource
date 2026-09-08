const BackComp = ({ backData, baTitle }: { backData: string[]; baTitle: string }) => {
  const liRows = [];
  for (let i = 0; i < backData.length; i++) {
    // 리액트가 리스트를 렌더링 할 때 각 항목을 고유하게 식별할 수 있도록
    // key 속성 지정
    liRows.push(<li key={i}>{backData[i]}</li>);
  }

  return (
    <div>
      <li>{baTitle}</li>
      <ul>{liRows}</ul>
    </div>
  );
};

export default BackComp;
