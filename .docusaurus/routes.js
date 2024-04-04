import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/404',
    component: ComponentCreator('/404', '5ba'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2f4'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '702'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '182'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '7db'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'cef'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b44'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '5b1'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b09'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '657'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '30c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a00'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1c7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ad5'),
    routes: [
      {
        path: '/docs/ribpay-api/Account/create-account',
        component: ComponentCreator('/docs/ribpay-api/Account/create-account', '7b9'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Account/delete-account',
        component: ComponentCreator('/docs/ribpay-api/Account/delete-account', '7db'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Account/get-account-by-id',
        component: ComponentCreator('/docs/ribpay-api/Account/get-account-by-id', '36c'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Account/get-all-accounts',
        component: ComponentCreator('/docs/ribpay-api/Account/get-all-accounts', '6ac'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Account/update-account',
        component: ComponentCreator('/docs/ribpay-api/Account/update-account', '16d'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Contract/create-contract',
        component: ComponentCreator('/docs/ribpay-api/Contract/create-contract', '920'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Contract/get-contract-by-id',
        component: ComponentCreator('/docs/ribpay-api/Contract/get-contract-by-id', '00d'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/intro',
        component: ComponentCreator('/docs/ribpay-api/intro', '7b4'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Terminal/create-terminal',
        component: ComponentCreator('/docs/ribpay-api/Terminal/create-terminal', '44a'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Terminal/delete-terminal',
        component: ComponentCreator('/docs/ribpay-api/Terminal/delete-terminal', 'ded'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Terminal/get-all-terminals',
        component: ComponentCreator('/docs/ribpay-api/Terminal/get-all-terminals', 'f24'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Terminal/get-all-terminals-by-account-id',
        component: ComponentCreator('/docs/ribpay-api/Terminal/get-all-terminals-by-account-id', '0c7'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Terminal/get-terminal-by-id',
        component: ComponentCreator('/docs/ribpay-api/Terminal/get-terminal-by-id', 'eb9'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Terminal/update-terminal',
        component: ComponentCreator('/docs/ribpay-api/Terminal/update-terminal', '4dd'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Transaction/create-transaction',
        component: ComponentCreator('/docs/ribpay-api/Transaction/create-transaction', 'ec1'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Transaction/get-transaction-by-id',
        component: ComponentCreator('/docs/ribpay-api/Transaction/get-transaction-by-id', '6b6'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/Transaction/get-transactions',
        component: ComponentCreator('/docs/ribpay-api/Transaction/get-transactions', '2c3'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/User/create-user',
        component: ComponentCreator('/docs/ribpay-api/User/create-user', 'ea3'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/User/delete-user',
        component: ComponentCreator('/docs/ribpay-api/User/delete-user', 'a7f'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/User/get-all-users',
        component: ComponentCreator('/docs/ribpay-api/User/get-all-users', '2ef'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/User/get-user-by-id',
        component: ComponentCreator('/docs/ribpay-api/User/get-user-by-id', '816'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/User/get-users-by-account-id',
        component: ComponentCreator('/docs/ribpay-api/User/get-users-by-account-id', '8f0'),
        exact: true,
        sidebar: "ribpaySidebar"
      },
      {
        path: '/docs/ribpay-api/User/update-user',
        component: ComponentCreator('/docs/ribpay-api/User/update-user', '72d'),
        exact: true,
        sidebar: "ribpaySidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ee7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
