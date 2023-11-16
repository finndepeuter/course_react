// import needed for the browserrouter
import { Outlet, Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Home from './components/home';
import Stuff from './components/stuff';
import Contact from './components/contact';
import Class from './components/class';
import Student from './components/student';
import TodoList from './components/todo_list';

function Header() {
  return (
    <div>
      <h1>Simple Single Page Application</h1>
        <ul className="header">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink></li>
          <li><NavLink to="/stuff" className={({ isActive }) => isActive ? "active" : undefined}>Stuff</NavLink></li>
          <li><NavLink to="/class" className={({ isActive }) => isActive ? "active" : undefined}>Class</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined}>Contact</NavLink></li>
          <li><NavLink to="/todo" className={({ isActive }) => isActive ? "active" : undefined}>ToDo</NavLink></li>
        </ul>
    </div>
  );
}

function Main() {
  return (
    <div className="content">
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/stuff'} element={<Stuff/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path={'/class'} element={<Outlet />}>
          <Route index element={<Class />}/>
          <Route path={':id'} element={<Student />}/>
        </Route>
        <Route path={'/todo'} element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;