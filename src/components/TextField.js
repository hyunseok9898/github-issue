import { forwardRef } from "react";
import styles from "./TextField.module.css";
import cx from "clsx";

export default forwardRef(function TextField(
  { type = "input", name, placeholder, onChange, value, error },
  ref,
) {
  return type === "input" ? (
    <input
      value={value}
      onChange={onChange}
      name={name}
      ref={ref}
      className={cx(styles.input, styles.border, {
        [styles.error]: Boolean(error),
      })}
      placeholder={placeholder}
    ></input>
  ) : (
    <textarea
      value={value}
      onChange={onChange}
      name={name}
      ref={ref}
      className={cx(styles.textarea, styles.border, styles.input, {
        [styles.error]: Boolean(error),
      })}
      placeholder={placeholder}
    ></textarea>
  );
});
