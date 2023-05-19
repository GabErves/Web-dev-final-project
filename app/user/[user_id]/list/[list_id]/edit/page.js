"use client";
import EditList from "../../../../../../pages/EditList";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//The page that appears at user/[user_id]/list/[list_id]/edit:
const Page = () => {
  const router = useRouter();
  const currentURL = router.asPath;
  const listid = currentURL.split("list/")[1].split("/")[0];

  //Gets the user id to put into url link before anything else

  return (
    <>
      <EditList list_id={listid}></EditList>
    </>
  );
};

export default Page;
