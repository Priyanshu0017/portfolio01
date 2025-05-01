import React, { useEffect, useState } from "react";

const TextChanger = () => {
  const texts = [
    "Hello! I am Priyanshu Bodana",
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if(endValue > texts[index].length+10){
        setIsForward(false)
      }
      if(endValue <2.1){
        setIsForward(true)
        setIndex((prev) => prev&texts.length)
      }
    }, 40);

    return ()=>clearInterval(intervalID)
  }, [endValue , isForward , index , texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChanger;
