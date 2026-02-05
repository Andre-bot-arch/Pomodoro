import styles from './styles.module.css';

export function Footer(){
    return(
        <footer className={styles.footer}>
            <a href="">Entenda como funciona a tecnica pomodoro</a>        
            <a href="">Chronos Pomodoro &copy; 2026 {new Date().getFullYear()}</a>        
        </footer>
    );
}