import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
    return (
      <div>
        <Header />
        <Post 
        author="Caroline Medeiros" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam sapiente reiciendis dolorum voluptatum quibusdam reprehenderit vitae veritatis sunt ad. Reiciendis ipsa, et quo fugiat deleniti dolor voluptate maxime laborum."
         />
        <Post 
        author="Madah Medeiros" 
        content="Estagiária com apenas 6 meses de estudos"
         />
        </div>
    )
}

