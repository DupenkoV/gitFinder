import styles from './UserStat.module.scss';

interface UserStatProps {}

export const UserStat = ({}: UserStatProps) => (
  <div className={styles.UserStat} data-testid="UserStat">
    UserStat Component
  </div>
);
