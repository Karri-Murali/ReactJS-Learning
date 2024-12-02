
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
      </main>
      <Examples />
    </>
  );
}

export default App;
