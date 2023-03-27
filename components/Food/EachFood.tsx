import { createStyles, Text, Group } from '@mantine/core';
import { useFormatDate } from 'hooks/useFormatDate';
import styles from '../../styles/Card.module.css';
const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function EachFood({ food, title, phone, email }: any) {
  const { classes } = useStyles();

  const { postedAt, body, user: farmerUser } = food;

  const date = useFormatDate(postedAt);

  return (
    <div className={styles['cardContainer']}>
      <Group noWrap>
        {/* <Avatar src={avatar} size={94} radius="md" /> */}
        <div>
          <Text fz='xs' tt='uppercase' fw={700} c='dimmed'>
            {title}
          </Text>

          <Text fz='lg' fw={500} className={classes.name}>
            {farmerUser?.name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            {/* <IconAt stroke={1.5} size="1rem" className={classes.icon} /> */}
            <Text fz='xs' c='dimmed'>
              {/* {new Date(postedAt).toLocaleString()} */}
              {date}
            </Text>
            <Text fz='xs' c='dimmed'>
              {body}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={3}>
            {/* <IconAt stroke={1.5} size="1rem" className={classes.icon} /> */}
            <Text fz='xs' c='dimmed'>
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            {/* <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} /> */}
            <Text fz='xs' c='dimmed'>
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
