import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment() {
return (
<div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="" />

    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Mayk Brito</strong>
                    <time title='19 de Novembro as 23:28h' dateTime='2022-11-19 23:28:20'>Cerca de 1h atrás</time>
                </div>

                <button title='Deletar comentário'>
                    <Trash size={24} />
                </button>
            </header>

            <p>Muito bom Diego, parabéns!! 👏👏</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
    </div>
</div>
);
}