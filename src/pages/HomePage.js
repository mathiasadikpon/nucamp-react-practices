import { useSpring } from "react-spring";


const HomePage = () =>{
    const animeStyle = useSpring({
        from:{x:0},
        to:{x:100},
        config:{duration: Infinity}
    })
    return( <h3>Home Page</h3>)
};

export default HomePage;