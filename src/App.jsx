import Header from "./components/Header";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const user = useSelector(state => state.user);

  return (
    <>
      <Header />

      <main className="main">
        <h1>Энергия будущего</h1>
        <p>Платформа для разработки и управления энергетическими решениями</p>

        <div style={{ marginTop: "40px" }}>
          <h2>Пользователь:</h2>
          <p>Имя: {user.name}</p>
          <p>Роль: {user.role}</p>
          <p>Учёба: {user.university}</p>
        </div>
      </main>
    </>
  );
}

export default App;
