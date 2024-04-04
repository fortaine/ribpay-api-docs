module.exports = [
  { type: "doc", id: "ribpay-api/fastify-swagger" },
  {
    type: "category",
    label: "ACCOUNTS",
    items: [
      {
        type: "doc",
        id: "ribpay-api/create-account",
        label: "Create a new account",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "ribpay-api/get-all-accounts",
        label: "Retrieve all accounts",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "ribpay-api/update-account",
        label: "Update an account",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "ribpay-api/get-account-by-id",
        label: "Retrieve a specific account by ID",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "ribpay-api/delete-account",
        label: "Delete an account",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "USERS",
    items: [
      {
        type: "doc",
        id: "ribpay-api/create-user",
        label: "Create a new user",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "ribpay-api/get-all-users",
        label: "Retrieve all users",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "ribpay-api/get-user-by-id",
        label: "Retrieve a specific user by ID",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "ribpay-api/delete-user",
        label: "Delete a user",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "ribpay-api/update-user",
        label: "Update a user",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "ribpay-api/get-users-by-account-id",
        label: "Retrieve all users by account ID",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "TERMINALS",
    items: [
      {
        type: "doc",
        id: "ribpay-api/create-terminal",
        label: "Create a terminal",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "ribpay-api/get-all-terminals",
        label: "Retrieve all terminals",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "ribpay-api/get-terminal-by-id",
        label: "Retrieve a specific terminal by ID",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "ribpay-api/delete-terminal",
        label: "Delete a terminal",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "ribpay-api/update-terminal",
        label: "Update a terminal",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "ribpay-api/get-all-terminals-by-account-id",
        label: "Retrieve all terminals by account ID",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "CONTRACTS",
    items: [
      {
        type: "doc",
        id: "ribpay-api/create-contract",
        label: "Create a contract",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "ribpay-api/get-contract-by-id",
        label: "Retrieve a specific contract by ID",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "TRANSACTIONS",
    items: [
      {
        type: "doc",
        id: "ribpay-api/create-transaction",
        label: "Create a new transaction",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "ribpay-api/get-transactions",
        label: "Retrieve all transactions",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "ribpay-api/get-transaction-by-id",
        label: "Retrieve a specific transaction by ID",
        className: "api-method get",
      },
    ],
  },
];
