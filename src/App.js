import "./App.css";
import { Helmet } from "react-helmet";
import Uploader from "./components/Uploader";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upload to Amazon S3</title>
        <meta name="description" 
              content="Uploading file from web app" />
      </Helmet>
      <Uploader />
    </div>
  );
}

export default App;
