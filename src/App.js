
import './App.scss';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import ProductImagesSlider from './component/index';
import {productImages} from "./access/"
function App() {
  return (
    <div className="App" style={{
      height: "100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <div style={{
        width:"300px",
        backgroundColor:"#fff",
        padding:"10px"
      }}>
          <ProductImagesSlider images={productImages}/>
      </div>
  
    </div>
  );
}

export default App;
