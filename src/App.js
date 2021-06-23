import logo from './logo.svg';
import './App.css';
import DeomoComponen from './Component/DeomoComponen';
import BaiTapComponent from './BaiTapComponent/BaiTapComponent';
import BaiTapLayoutBoostrap from './BaiTapLayoutBoostrap/BaiTapLayoutBoostrap';
import Databinding from './Databinding/Databinding';
import DatabindingF from './Databinding/DatabindingF';
function App() {//component gốc của ứng dụng
  return (
    <div className="App">
        {/* <BaiTapComponent/> */}
        <BaiTapLayoutBoostrap/>
        {/* <Databinding/> */}
        {/* <DatabindingF/> */}
    </div>
  );
}

export default App;
