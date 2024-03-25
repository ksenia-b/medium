import styles from './modules/Eggs.module.css';

function App() {
    return (
        <>
            <div className={styles.bg}>
                <div className={styles.loader}>
                    <div className={styles.egg}></div>
                    <div className={`${styles.egg} ${styles.egg1}`}></div>
                    <div className={`${styles.egg} ${styles.egg2}`}></div>
                    <div className={`${styles.egg} ${styles.egg3}`}></div>
                </div>
                <h1>Happy Easter!</h1>
                <h2>2024</h2>
            </div>
        </>
    )
}

export default App
