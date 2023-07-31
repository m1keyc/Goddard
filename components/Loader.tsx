import styles from "@styles/Loader.module.css";
import Image from "next/image";


const Loader = () => {
  return (
    <div className={styles.onemain}>
    <p className={styles.iten}>
      <Image width={450} height={200} src="/loader.svg" />
    </p>
    </div>
  );
};

export default Loader;
