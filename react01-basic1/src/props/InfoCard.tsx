import styles from "./Card.module.css";

// 타입지정(외부에서 사용가능)
export interface Card {
  idx?: number; //? : 있을수도, 없을수도 있음
  title: string;
  content: string;
  author: string;
}

const InfoCard = ({ idx, title, content, author }: Card) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author : {author}</p>
    </div>
  );
};

export default InfoCard;
