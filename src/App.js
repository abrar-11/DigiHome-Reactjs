import React from "react";
import {
    Header,
    HeroSection,
    AboutUs,
    Clients,
    Testimonials,
    Faqs,
    Subscribe,
    Footer,
} from "./components/index";

const App = () => {
    return (
        <>
            <div className="heroMainContainer ">
                <div className="container">
                    <Header />
                    <HeroSection />
                </div>
            </div>

            <div className="container">
                <AboutUs />
                <Clients />
                <div id="Testinomaials" className="main_wrappers">
                    <Testimonials />
                </div>
                <Faqs />

                <Subscribe />
                <Footer />
            </div>

            <div className="copywright text_center text_light">
                Copyright © 2021 all rights reserved DigiHome
            </div>
        </>
    );
};

export default App;
