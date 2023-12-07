import React, { useState } from 'react';
import Link from 'next/link';
import { createStyles, Header, Transition, Paper, Container, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useUser } from '@auth0/nextjs-auth0/client';


import styles from '../styles/Navigation.module.css';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  header: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
    zIndex: 9000,
  },

  dropdown: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 3000,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    width: '40%',
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50px',
    backdropFilter: 'blur(15px)',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

export function Navigation() {
  const { user } = useUser();

  const loggedOutLinksArray = [
    {
      'link': '/',
      'label': 'Home',
    },
    {
      'link': '/farm-to-table',
      'label': 'Farm to Table',
    },
    {
      'link': '/live-animals',
      'label': 'Live Animals',
    },
    {
      'link': '/hay',
      'label': 'Hay',
    },
    {
      'link': '/straw',
      'label': 'Straw',
    },
    {
      'link': '/farm-services',
      'label': 'Farm Services',
    },
    {
      'link': '/api/auth/login',
      'label': 'Login',
    }
  ]

  const loggedInLinksArray = [
    {
      'link': '/',
      'label': 'Home',
    },
    {
      'link': '/farm-to-table',
      'label': 'Farm to Table',
    },
    {
      'link': '/live-animals',
      'label': 'Live Animals',
    },
    {
      'link': '/hay',
      'label': 'Hay',
    },
    {
      'link': '/straw',
      'label': 'Straw',
    },
    {
      'link': '/farm-services',
      'label': 'Farm Services',
    },
    {
      'link': '/api/auth/logout',
      'label': 'Logout',
    }
  ];

  // Hiding Profile navigation for now for logged in users
  // {
  //   'link': '/profile',
  //   'label': 'Profile',
  // },

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(loggedOutLinksArray[0].link);
  const { classes, cx } = useStyles();

  const loggedOut = loggedOutLinksArray.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  const loggedIn = loggedInLinksArray.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ))

  const items = user ? loggedIn : loggedOut;


  return (
    <Header className={styles['container']} height={60}>
      <Container className={classes.header}>
        {/* <MantineLogo size={28} /> */}
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}