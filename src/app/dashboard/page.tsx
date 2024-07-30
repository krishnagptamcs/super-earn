import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const { userId } = auth();

  if (!userId) {
    return <p>You are not logged in</p>;
  }

  const user = await currentUser();

  console.log("user ", user);
  return <div>page</div>;
};

export default page;
