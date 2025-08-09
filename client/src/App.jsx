import { useRef } from "react";
import UrlForm from "./components/UrlForm";
import AdminPanel from "./components/AdminPanel";

function App() {
  const adminRef = useRef();

  const handleUrlGenerated = () => {
    if (adminRef.current && adminRef.current.refreshData) {
      adminRef.current.refreshData();
    }
  };

  return (
    <div>
      <UrlForm onUrlGenerated={handleUrlGenerated} />
      <div className="mt-10">
        <AdminPanel ref={adminRef} />
      </div>
    </div>
  );
}

export default App;
