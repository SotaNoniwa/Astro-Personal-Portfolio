import { useState } from "react";

const Button = () => {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum((prev) => prev + 1);
  };

  return <button onClick={handleClick}>Button {num}</button>;
};

export default Button;
