import './App.css'
import Carrousel from './components/Carrousel';
function App() {

  const enlaceAImagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  const images = [
    enlaceAImagen + '25.png',
    enlaceAImagen + '150.png',
    enlaceAImagen + '6.png',
    enlaceAImagen + '235.png',
    enlaceAImagen + '444.png',
    enlaceAImagen + '434.png'
    
  ];

  return (
    <div>
      <h1>Carrousel de Pokemones</h1>
      <Carrousel images={images} />
    </div>
  );
}

export default App
