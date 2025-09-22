import cx from "clsx";
import styles from "./OpenClosedFilter.module.css";

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  // const data = getData();
  // const opendData = data.filter((d) => d.state === 'open');
  // const closedData = data.filter((d) => d.state === 'closed');
  // const openModeDataSize = 1;
  // const closeModeDataSize = 2;
  return (
    <>
      <OpenClosedFilter
        // size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode("open")}
      />
      <OpenClosedFilter
        // size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => onClickMode("closed")}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      onClick={onClick}
      className={cx(styles.textFilter, { [styles.selected]: selected })}
    >
      {size}
      {state}
    </span>
  );
}
