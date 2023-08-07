import "./styles.css";
import Input from "./Input";

export default function App() {
  const showValue = (item) => {
    return <>The value is {item}</>;
  };
  const showValueMul = (item) => {
    return <>The value is {item * 10}</>;
  };
  return (
    <div className="App">
      <Input renderTextBelow={showValue} />
      <br />
      <Input renderTextBelow={showValueMul} />
    </div>
  );
}
