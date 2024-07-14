import "./App.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function App() {

  return (
    <>
      <div className="container">
        <DotLottieReact src="/done.lottie" autoplay />
        <h2>Welcome to a Random Site</h2>
        <p>
          This page shows that you've successfully deployed this React Site
        </p>
      </div>
    </>
  );
}

export default App;