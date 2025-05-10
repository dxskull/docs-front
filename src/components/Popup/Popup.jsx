import classes from "./Popup.module.css";

const Popup = () => {
    const popupClasses = [classes.popup]

    popupClasses.push(classes.active)
  return (
    <div className={popupClasses.join(" ")}>
      <div className={classes.popupContent}>Hello world</div>
    </div>
  );
};

export default Popup;
