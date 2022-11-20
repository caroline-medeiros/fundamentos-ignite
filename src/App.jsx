import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
return (
<div>
  <Header />

  <div className={styles.wrapper}>
    <Sidebar />
    <main>
      <Post author="Caroline Medeiros"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam sapiente reiciendis dolorum voluptatum quibusdam reprehenderit vitae veritatis sunt ad. Reiciendis ipsa, et quo fugiat deleniti dolor voluptate maxime laborum." />
      <Post author="Madah Medeiros" content="Estagiária com apenas 6 meses de estudos" />
    </main>
  </div>
</div>
)
}