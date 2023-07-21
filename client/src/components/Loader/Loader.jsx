import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.box}>
      <div className={style.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;