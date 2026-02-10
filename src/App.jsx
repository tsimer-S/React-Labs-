import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnergyData, selectProject } from "./store/energySlice";
import Header from "./components/Header";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { projects, news, selectedProject, loading } = useSelector(
    state => state.energy
  );

  useEffect(() => {
    dispatch(fetchEnergyData());
  }, [dispatch]);

  if (loading) {
    return <h2 className="loading">Загрузка данных...</h2>;
  }

  return (
    <>
      <Header />

      <main className="main">
        {/* CONTENT 1 — LIST */}
        <section>
          <h2>Энергетические проекты</h2>
          <ul className="list">
            {projects.map(project => (
              <li
                key={project.id}
                onClick={() => dispatch(selectProject(project))}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </section>

        {/* DETAIL */}
        {selectedProject && (
          <section className="detail">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <strong>Мощность: {selectedProject.capacity}</strong>
          </section>
        )}

        {/* CONTENT 2 — NEWS */}
        <section>
          <h2>Новости энергетики</h2>
          {news.map(item => (
            <div key={item.id} className="news">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
