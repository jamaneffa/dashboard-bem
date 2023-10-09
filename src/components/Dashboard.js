import Sidebar from './Sidebar';
import Footer from './Footer';
import Main from './Main';

function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Dashboard;
