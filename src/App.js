import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Header from "./Header.js";
import Issue from "./pages/Issue";
import CreateIssue from "./pages/CreateIssue";
import Projects from "./pages/Projects";
import PullsRequest from "./pages/PullsRequest";
import Code from "./pages/Code";
import Security from "./pages/Security";
import Actions from "./pages/Actions";
import { QueryClient, QueryClientProvider } from "react-query";

// hook 사용시 주의사항
// 1. 최상위에서 호출되어야 한다
// 2. 오직 React함수에서만 hook을 호출해야 한다.

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullsRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
