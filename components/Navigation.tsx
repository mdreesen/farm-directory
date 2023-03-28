import styles from '../styles/Navigation.module.css';

export function Navigation() {
  return (
    <div className={styles['container']}>
      <a href='/'>Home</a>
      <a href='/farmers'>Farmers</a>
    </div>
  );
}
