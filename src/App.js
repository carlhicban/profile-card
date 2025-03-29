import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="logo512.png" alt="Carl" />;
}

function Intro() {
  return (
    <div>
      <h1>React Project</h1>
      <p>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill />
    </div>
  );
}

function Skill() {
  return <div className="skill">React</div>;
}

export default App;
