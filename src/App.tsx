import "./assets/styles/css/bootstrap-grid.min.css";
import "./assets/styles/sass/index.scss";
import Layout from "./components/Layout/Layout";
import { JobListProvider } from "./context/JobListContext";
import JobList from "./pages/JobList/JobList";

function App() {
  return (
    <JobListProvider>
      <Layout>
        <JobList />
      </Layout>
    </JobListProvider>
  );
}

export default App;
