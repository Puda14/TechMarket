import Slide from "../component/Slide.jsx";
import Sale from "../component/Sale.jsx";
import Navbar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx"
import Content from "../component/Content.jsx";
import Provider from "../store/Provider.jsx";
import Category from "../component/Category.jsx";

function Home() {
    return (
        <Provider>
            <div className={'bg-gray-50 '}>
                <div className={'mx-20 '}>
                    <Navbar/>
                    <Slide/>
                    <Category/>
                    <Sale/>
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </Provider>
    );
}

export default Home;