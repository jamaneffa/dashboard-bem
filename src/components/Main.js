import Heading from './Heading';
import LastProduct from './LastProduct';
import Categories from './Categories';
import TopData from './TopData'
import Footer from './Footer';

function Main() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <Heading />
            <TopData />
            <div className="row">
              <LastProduct />
              <Categories />
            </div>
          </div>
        </div>
        <Footer />
      </div>
     );
   }
   
export default Main;