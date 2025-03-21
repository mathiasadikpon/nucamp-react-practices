import { useSpring, animated } from "react-spring";


const HomePage = () =>{
    const animeStyle = useSpring({
        from:{x:0},
        to:{x:100},
        config:{duration: Infinity}
    })
    return(<animated.div><h3>Home Page</h3></animated.div> )
};

export default HomePage;