import { createStyles, Group, Text } from '@mantine/core';
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

<<<<<<< HEAD:components/Farmers/EachFarmer.js
export default function EachFarmer({ farmer }) {
  const { classes } = useStyles();

  // Logging the Farmer User information
  // console.log(farmer)

  const { product, product_feed, postedAt, user: farmerUser } = farmer;
=======
export function EachFood({ food, title, phone, email }: any) {
  const { classes } = useStyles();

  const { postedAt, body, user: farmerUser } = food;

  const date = useFormatDate(postedAt);
>>>>>>> mm/dev:components/Farmers/EachFood.tsx

  return (
    <div className={styles['cardContainer']}>
      <Group noWrap>
        <div>
<<<<<<< HEAD:components/Farmers/EachFarmer.js
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
=======
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
>>>>>>> mm/dev:components/Farmers/EachFood.tsx
            </Text>
          </Group>


          <Group noWrap spacing={10} mt={3}>
            {/* <IconAt stroke={1.5} size="1rem" className={classes.icon} /> */}
<<<<<<< HEAD:components/Farmers/EachFarmer.js
            <Text fz="xs" c="dimmed">
              {new Date(postedAt).toLocaleString()}
=======
            <Text fz='xs' c='dimmed'>
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            {/* <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} /> */}
            <Text fz='xs' c='dimmed'>
              {phone}
>>>>>>> mm/dev:components/Farmers/EachFood.tsx
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
