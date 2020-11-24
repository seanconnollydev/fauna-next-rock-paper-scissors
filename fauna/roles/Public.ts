import { query } from "faunadb";
const { Collection, Function } = query;

const Public = {
  name: "Public",
  privileges: [
    {
      resource: Collection("Example"),
      actions: {
        read: true,
        create: true,
        delete: false,
      },
    },
    {
      resource: Function("play"),
      actions: {
        call: true,
      },
    },
  ],
};

export default Public;
