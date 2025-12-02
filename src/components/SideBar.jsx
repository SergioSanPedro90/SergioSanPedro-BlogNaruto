import { Link } from "react-router-dom";
import styles from "../pages/styles/components/SideBar.module.css";
import logoNaruto from "/img/logoNaruto.png"
import pngwing from "/img/pngwing.com.png"

export const SideBar = () => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${styles.narutoSidebar}`}
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        
        <div className={`offcanvas-header ${styles.sidebarHeader}`}>
          <div className="offcanvas-title" id="offcanvasExampleLabel">
            <img
              className="w-100 ms-1"
              src={logoNaruto}
              alt="naruto"
            />
          </div>
          <button
            type="button"
            className={`btn-close ${styles.closeButton}`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            ❌
          </button>
        </div>

        <div className={`offcanvas-body ${styles.sidebarBody}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link
                to="/characters-list"
                className={styles.menuLink}
                onClick={() => setTimeout(() => window.location.reload(), 100)}
              >
                <span className="me-2">📜</span>
                Lista personajes
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link
                to="/akatsuki-list"
                className={styles.menuLink}
                onClick={() => setTimeout(() => window.location.reload(), 100)}
              >
                <span className="me-2">⚡</span>
                Personajes Akatsuki
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link
                to="/tailed-beasts"
                className={styles.menuLink}
                onClick={() => setTimeout(() => window.location.reload(), 100)}
              >
                <span className="me-2">🦊</span>
                Lista de Bestias
              </Link>
            </li>

            <li
              className={styles.menuItem}
              onClick={() => setTimeout(() => window.location.reload(), 100)}
            >
              <Link to="/" className={styles.menuLink}>
                <span className="me-2">🏠</span>
                Inicio
              </Link>
            </li>
          </ul>
          <img className="ms-5" src={pngwing} alt="" />
        </div>
      </div>
    </>
  );
};
