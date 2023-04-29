import React from 'react';
import styles from './UserCard.module.scss';
import { UserStat } from 'components/UserStat';
import { LocalGitHubUser } from 'types/user';

interface UserCardProps extends LocalGitHubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
