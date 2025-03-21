import { useSpring, animated } from "react-spring";

const HomePage = () => {
  const animeStyle = useSpring({
    from: { color: "blue", opacity: 0.3 , transform: "rotate(20deg)", transform: "scale(1)"},
    to: { color: "red", opacity: 1,transform: "rotate(0deg)" ,  transform: "scale(2)"},
    
    config: {duration:2000},
    loop: true
  });
  return (
    <animated.div style={animeStyle}>
      <h3>Home Page</h3>
    </animated.div>
  );
};

export default HomePage;
