import Header from "./components/header";
import Menu from "./components/menu/menu";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <ListarTarefa />
      <Login />
    </div>
  );
}

export default App;
