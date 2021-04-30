import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";



function App() {
    return (
        <>
            <Particles
            className="particles-canvas"
                params={{
                    particles:{
                        number:{
                            value:4,
                            density:{
                                enable: true,
                                value_area: 90
                            }
                        },
                        shape:{
                            type:"square",
                            stroke:{
                                width: 6,
                                color: "#54DB06"
                            }
                        }
                    }
                }}
            />
            <Navbar />
            <Header />
        </>
    );
}

export default App;