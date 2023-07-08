import "./button.css"

function ButtonComponent (props) {
    const {label, colorBG}=props
  const styleButton = {
    backgroundColor:colorBG,
  };
  return (
    <div>
      <button className="btn" style={styleButton}>{label} </button>
    </div>
  );
}
export default ButtonComponent;
