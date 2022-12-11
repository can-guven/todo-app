import "./assets/styles/css/bootstrap-grid.min.css";
import "./assets/styles/sass/index.scss";
import Layout from "./components/Layout/Layout";
import JobList from "./pages/JobList/JobList";

function App() {
  return (
    <Layout>
      <JobList />
    </Layout>
  );
}

export default App;
