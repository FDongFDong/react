import React from 'react';
import { useState, useEffect } from 'react';

const AppFunction = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('useEffect === componentDidMount');
  }, []);
  const clickButton = () => {
    setCount(count + 1);
    setValue(count + 2);
  };

  useEffect(() => {
    console.log('useEffect === componentDidUpdate');
    console.log(`count : ${count} value : ${value}`);
  }, [count, value]); // 2번째 인자로 array를 넣어두면 count, value가 렌더되면 알려준다.
  // count, value 중 하나라도 값이 변하면 해당 useEffect()를 실행시켜준다.
  // count, value가 두개가 바껴도 한번만 실행된다.

  console.log('render');
  return (
    <div>
      <button onClick={clickButton}> 클릭</button>
    </div>
  );
};

export default AppFunction;
