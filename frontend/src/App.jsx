import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <div className="bg-primary-900 min-h-screen text-gray-100 font-sans selection:bg-accent-gold selection:text-primary-900">
            <Navbar />
            <main>
                <Hero />
                <FeaturedProperties />
                <AboutUs />
                <ContactUs />
            </main>
        </div>
    );
}

export default App;
