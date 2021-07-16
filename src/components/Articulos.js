import Articulo from "./Articulo";

const Articulos = ({ articulos }) => {
    return (
        <div className="row">
            { articulos.map((articulo, index) => {
                return (
                    
                    <div key={index} className="col-md-4">
                        <br/><br/>
                        <Articulo {...articulo} />
                    </div>
                )
            }) }
        </div>
    )
}

export default Articulos;