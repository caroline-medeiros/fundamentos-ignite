import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }
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

                <button onClick={handleDeleteComment} title='Deletar comentário'>
                    <Trash size={24} />
                </button>
            </header>

            <p>{content}</p>
        </div>

        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
    </div>
</div>
);
}