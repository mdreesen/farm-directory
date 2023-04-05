import React from 'react';
import { createStyles, Group, Text } from '@mantine/core';
import { useFormatDate } from 'hooks/useFormatDate';
import styles from '/styles/Card.module.css';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function EachFarmer({ farmer }: { farmer: any }) {
  const { classes } = useStyles();

  const { postedAt, user: farmerUser, product } = farmer;

  const date = useFormatDate(postedAt);

  const farmerProduct = product.map(product => (
    <Text className={styles['farmerUser_container']} fz='xs' key={product.farm_name}>
      <span>{product?.product_name}</span>
      <span>{product?.product_feed}</span>
      <span>{product?.product_description}</span>
      <span>{product?.available ? 'Available' : 'Not Available'}</span>
    </Text>
  ))

  return (
    <Group className={styles['cardContainer']} noWrap>
      <div>
        <Text fz="lg" fw={500} tt="uppercase" c="dimmed">
          {farmerUser?.farm_name}
        </Text>

        <Text fz="md" fw={400} className={classes.name}>
          <span>{`${farmerUser?.first_name} ${farmerUser?.last_name}`}</span>
        </Text>

        <Group noWrap spacing={10} mt={3}>
          <Text fz="xs" c="dimmed">
            <span>{`${farmerUser?.address_road} `}</span>
            <span>{`${farmerUser?.address_city + ','} ${farmerUser?.address_state} `}</span>
            <span>{`${farmerUser?.address_zip}`}</span>
          </Text>
        </Group>

        <Group noWrap spacing={10} mt={3}>
          <Text className={styles['farmer_info']} fz="xs" c="dimmed">
            <span>{farmerUser?.email && `Email: ${farmerUser?.email}`}</span>
            <span>{farmerUser?.phone && `Phone: ${farmerUser?.phone}`}</span>
          </Text>
        </Group>

        <Group noWrap spacing={10} mt={5}>
          <Text fz="xs" c="dimmed">
            {date}
          </Text>
        </Group>
      </div>
      {farmerProduct}
    </Group>
  );
}
