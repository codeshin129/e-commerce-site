import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from '../src/routes/home/home.component.jsx';

const Shop = () => {
  return <h1> shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
