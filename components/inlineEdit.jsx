import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useKeyPress from "../hooks/useKeypress";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { addReceiver } from "../store/receiverSlice";
import { wrapper } from "../store/store";

const InlineEdit = ({ text, setText }) => {
  const dispatch = useDispatch();
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const wrapperRef = useRef(null);
  const enter = useKeyPress("Enter");
  const esc = useKeyPress("Escape");
  useEffect(() => {
    if (isInputActive) {
      if (enter) {
        setText(inputValue);
        setIsInputActive(false);
      }
      if (esc) {
        setInputValue(text);
        setIsInputActive(false);
      }
    }
    // if (isInputActive) {
    //   if (enter) {
    //     // props.setText(inputValue);
    //     setIsInputActive(false);
    //   }
    //   if (esc) {
    //     // setInputValue(props.text);
    //     setIsInputActive(false);
    //   }
    // }
  }, [enter, esc]);
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      setText(inputValue);
      setIsInputActive(false);
    }
  });
  return (
    <span ref={wrapperRef}>
      <span
        className="hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-dotted hover:bg-slate-100"
        onClick={() => setIsInputActive(true)}
      >
        {isInputActive ? (
          <input
            autoFocus="true"
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            type="text"
            className="bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
          />
        ) : (
          inputValue
        )}
      </span>
    </span>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  store.dispatch(addReceiver());
});

export default InlineEdit;
