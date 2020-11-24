import { FunctionComponent } from "react";
import { useFindExampleQuery } from "@gen/graphql";

const Example: FunctionComponent = () => {
  const { data, error } = useFindExampleQuery({ variables: { id: "123" } });

  if (error) {
    console.error(error);
    return <div>‼️ Error! Inspect the console to see what happened.</div>;
  }

  if (data) {
    return (
      <div>
        🎉 Success! We were able to successfully connect with your Fauna
        database.
      </div>
    );
  }

  return null;
};

export default Example;
