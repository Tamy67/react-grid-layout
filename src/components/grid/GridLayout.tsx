import styles from './GridCommonStyles.module.css';
import st from './AutoHighlightGrid.module.css';

type GridProps<T> = {
  data: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
};

function GridLayout<T>({
  data,
  renderItem,
  isLarge,
}: GridProps<T> & { isLarge?: (index: number) => boolean }) {
  return (
    <div className={styles.gridContainer}>
      {data.map((item, idx) => {
        const itemClass = isLarge && isLarge(idx) ? styles.large : st.gridItem;
        return (
          <div
            key={`item-${idx}`}
            className={`${styles.gridItem} ${itemClass}`}
          >
            {renderItem(item, idx)}
          </div>
        );
      })}
    </div>
  );
}

export default GridLayout;
