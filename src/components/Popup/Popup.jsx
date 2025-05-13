import classes from "./Popup.module.css";

const Popup = ({ popupVisible, children, setPopupVisible }) => {
  const popupClasses = [classes.popup];

  if (popupVisible) {
    popupClasses.push(classes.active);
  }

  return (
    <div
      className={popupClasses.join(" ")}
      onClick={() => {
        setPopupVisible(false);
      }}
    >
      <div
        className={classes.popupContent}
        onClick={(e) => {e.stopPropagation()}}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
