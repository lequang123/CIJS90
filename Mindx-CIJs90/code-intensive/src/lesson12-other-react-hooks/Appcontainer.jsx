import { useState, useMemo, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([1, 2, 3]);
  const [visible, setVisible] = useState(true);

  const doubleItems = items.map((item) => item * 2);

  // useRef // access element
  // memo  // mem component
  // useMemo // mem result
  // useCallback // mem function

  const memoizedDoubleItems = useMemo(() => {
    return items.map((item) => item * 2); // 4 /5
  }, [items]);

  const changeVisible = () => {
    setVisible(!visible);
  };
  const addValue = () => {
    setItems([...items, 1]);
  };

  useEffect(() => {
    console.log("doubleItems changed");
  }, [doubleItems]);

  useEffect(() => {
    console.log("memoizedDoubleItems changed");
  }, [memoizedDoubleItems]);

  return (
    <div>
      <button onClick={changeVisible}>Change visible</button>
      <button onClick={addValue}>Add value</button>
      {visible && (
        <div>
          <p>{items}</p>
          <p>{doubleItems}</p>
          <p>{memoizedDoubleItems}</p>
        </div>
      )}
    </div>
  );
}