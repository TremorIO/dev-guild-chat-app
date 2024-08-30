import Typewriter from "typewriter-effect";


const Type = () => {
    return (
    <Typewriter options={{
        strings: ["Hello 👋", "Login", "Sign Up", "Have Fun"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
       /> 
    )
}

export default Type;