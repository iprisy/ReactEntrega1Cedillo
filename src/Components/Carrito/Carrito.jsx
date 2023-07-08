

function Carrito (props) {
    const {rutaImagen, numeroItems, colorBG}=props
  const styleButton = {
    backgroundColor:colorBG,
    
  };
  return (
    <div>
        <button style={styleButton}><img src={rutaImagen} width="20" alt="Carrito" />{numeroItems}</button>
    </div>
  );
}
export default Carrito;