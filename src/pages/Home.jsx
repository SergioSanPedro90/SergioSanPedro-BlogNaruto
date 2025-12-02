import styles from "../pages/styles/pages/Home.module.css";
import narutoTeam from '/img/narutoTeam.png';


export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <img 
        src={narutoTeam} alt="naruto"
        className="p-3"
         />
        <p className={styles.subtitle}>Mundo Ninja</p>
        <p className={styles.description}>
          Descubre los secretos del universo ninja mas famoso. Aqui encontraras a todos los ninjas y podras descubrir
           todos sus detalles para conecer bien a tus personajes favoritos.
        </p>
        <button
          className={styles.button}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Menu
        </button>
      </div>
    </div>
  );
};
