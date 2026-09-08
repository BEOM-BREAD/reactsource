import InfoCard from "./InfoCard";

const Card = () => {
  const cards = [
    {
      title: "Props in React",
      content: "Props pass data from one component to another.",
      author: "Alice",
    },
    {
      title: "React Compositio",
      content: "Props pass data from one component to another.",
      author: "Charlie",
    },
  ];

  return (
    <div>
      <InfoCard />
      <InfoCard />
    </div>
  );
};

export default Card;
