import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Articulos from './components/Articulos';

const categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

function App() {
  //Metodo abrir y cerrar el Dropbox
  const [dropdown, setDropdown]  = useState(false);
  const [articulos, setArticulos] = useState([]);

  // Por defecto, la categoria seleccionada sera el primer valor del arreglo categorias
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0]);

  const abrirCerrarDropDown=()=>{
    setDropdown(!dropdown);
  }

  const consultarAPI = () => {
    const api_key = "23720d3260004391b7a8ec48fadc1afd";
    fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=${categoriaSeleccionada}&apiKey=${api_key}`)
    .then( r => r.json() )
    .then( result => {
      // Validamos que el resultado haya sido valido (OK)
      if( result.status === "ok" ) {
        setArticulos(result.articles);
      }
    });
  }

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  }

  // Esta funcion se iniciara al iniciar el componente con la categoriaSeleccionada por defecto con el primer valor del arreglo
  // y si solo si el estado de categoriaSeleccionada cambia de valor, se volvera a ejecutar
  useEffect(() => {
    consultarAPI();
  }, [categoriaSeleccionada]);

  return (
    <div>
      <br/><br/>

      <header>
        <b>Noticias por categoría</b>
      </header>

      <br/>

      <div className="dropdown">
        <Dropdown isOpen = {dropdown} toggle={abrirCerrarDropDown} direction="down">
          <DropdownToggle caret className="botonDropdown">{ categoriaSeleccionada }</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Seleccione una categoría</DropdownItem>
            <DropdownItem divider></DropdownItem>
            { categorias.map( categoria => {
              return <DropdownItem onClick={() => seleccionarCategoria(categoria)} key={categoria}>{ categoria }</DropdownItem>            
            } ) }
          </DropdownMenu>
        </Dropdown>
      </div>

      <div>
        <Articulos articulos={articulos} />
      </div>

    </div>

  );
}

export default App;
