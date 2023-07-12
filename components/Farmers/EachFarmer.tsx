import React from 'react';
import { createStyles, Group, Text } from '@mantine/core';
import { useFormatDate } from 'hooks/useFormatDate';
import styles from '/styles/Card.module.css';
import { Product } from '../../types/mongo.types'

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

  console.log(product)

  // For the key, need to change index to an _id on the product
  const farmerProduct = product ? product.map((product: Product, index: number) => {
    return product.show && (
    <Text className={styles['farmerUser_container']} fz='sm' c="dimmed" key={`product.farm_name-${index}`}>
      <Text fw={800}>{product?.product_name && `Product: ${product?.product_name}`}</Text>
      <Text>{product?.product_feed.length >= 1 && `Feed: ${product?.product_feed}`}</Text>
      <Text>{product?.product_description && `Description: ${product?.product_description}`}</Text>
      <Text tt="uppercase">{product?.available ? 'Available Now' : 'Not Available'}</Text>
    </Text>
    )
}) : <Text fw={800} fz='sm' c="dimmed">No Products To Show</Text>

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
