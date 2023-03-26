import { createStyles, Avatar, Text, Group } from '@mantine/core';
// import { IconPhoneCall, IconAt } from '@tabler/icons-react';

import styles from '../../styles/Card.module.css'

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function EachFood({ food }) {
  const { classes } = useStyles();

  const { postedAt, user: farmerUser } = food;

  console.log("farmerUser", farmerUser)

  return (
    <div className={styles['cardContainer']}>
      <Group noWrap>
        <div>
          {/* Title Of Each Farm */}
          <Text fz="lg" fw={500} className={classes.name}>
            {farmerUser?.farm_name}
          </Text>

          {/* Farm Information */}
          <Group noWrap spacing={10} mt={3}>
            <Text className={styles['farmerUser_container']} fz="xs" c="dimmed">
              <span>{farmerUser?.name}</span>
              <span>{farmerUser?.Farm_location}</span>
              <span>{farmerUser?.phone}</span>
              <span>{farmerUser?.email}</span>
            </Text>
          </Group>


          <Group noWrap spacing={10} mt={3}>
            {/* <IconAt stroke={1.5} size="1rem" className={classes.icon} /> */}
            <Text fz="xs" c="dimmed">
              {new Date(postedAt).toLocaleString()}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}