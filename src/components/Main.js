import Heading from './Heading';
import LastProduct from './LastProduct';
import Categories from './Categories';
import TopData from './TopData'
import AllProducts from './AllProducts';

function Main() {
    return (
        <div id="content">
        <div className="container-fluid">
          <Heading></Heading>
          <TopData></TopData>
          <div className="row">
            <LastProduct></LastProduct>
            <Categories></Categories>
          </div>
          <AllProducts></AllProducts>
        </div>
      </div>
     );
   }
   
export default Main;