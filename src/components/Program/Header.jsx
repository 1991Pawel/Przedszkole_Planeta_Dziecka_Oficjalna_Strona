import Navbar from "../ForAllPages/Navbar";
import styles from "../../style";

const Header = () => {
  return (
    <section className="bg-program bg-cover px-[40px] sm:px-[72px]">
      <Navbar />
      <div className="text-center text-white">
        <h1 className={`${styles.s54} pt-[151px]`}>Program</h1>
        <h4 className={`${styles.n25} mt-[94px]`}>
          Nasza doświadczona kadra i dostosowany do wieku program nauczania
          zapewniają Twojemu dziecku wyjątkowe doświadczenie edukacyjne w każdym
          roku.
        </h4>
        <h4 className={`${styles.n25} mt-[50px] pb-[239px]`}>
          Pomiędzy Twoim dzieckiem a nauczycielem i ich nowymi przyjaciółmi
          nawiążą się silne relacje.
        </h4>
      </div>
    </section>
  );
};

export default Header;
