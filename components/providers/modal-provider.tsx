"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";
import { useModal } from "@/hooks/use-modal-store";

export const ModalProvider = () => {
  const [isMounted,setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  },[])

  if(!isMounted) {
    return null;
  }
  return (
      <CreateServerModal />
  );
};
