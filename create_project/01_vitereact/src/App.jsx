import Rohan from "./rohan";
function App() { 
  const username = "chai aur code"// we can use the declared variable  in JSX by using curly braces {}
  return (
    <>
    <Rohan/>
    <h3>we are using fragment to prevent erros by {username}</h3>
    {/* username here is the evaluated expression , we cant run js code within the syntax*/}
    <p>test para</p>
    </>
  );
}

export default App
// return only takes  one element. So, we need to wrap everything inside a div or any other html tag, usally react fragments are used 

// component should always have a Capitalized name for naming convention