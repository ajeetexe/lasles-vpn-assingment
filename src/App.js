import './App.css';
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';
import GlobalNewtwork from './components/GlobalNetwork';
import Header from './components/Header';
import Info1 from './components/Info1';
import Info2 from './components/Info2';
import OurPlan from './components/OurPlan';
import SubscribeNow from './components/SubscribeNow';

function App() {
  return (
    <div className="container">
      <Header/>
      <Info1/>
      <Info2/>
      <OurPlan/>
      <GlobalNewtwork/>
      <CustomerReview/>
      <SubscribeNow/>
      <Footer/>
    </div>
  );
}

export default App;
