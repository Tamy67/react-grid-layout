import styles from './GridCommonStyles.module.css';
import st from './AutoHighlightGrid.module.css';

type GridProps<T> = {
  data: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  title?: string;
  description?: string;
  isLarge?: (index: number) => boolean;
};

function GridLayout<T>({
  data,
  title,
  description,
  renderItem,
  isLarge,
}: GridProps<T>) {
  return (
    <>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <div className={styles.gridContainer}>
        {data.map((item, idx) => {
          const itemClass =
            isLarge && isLarge(idx) ? styles.large : st.gridItem;
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
    </>
  );
}

export default GridLayout;
