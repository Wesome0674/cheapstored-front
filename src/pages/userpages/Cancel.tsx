import { Button } from "@/UI/Design-System/Button";
import { Typographie } from "@/UI/Design-System/Typographie";
import React from "react";
import Link from "next/link";

const Cancel = () => {
  return (
    <div className="w-full min-h-screen grid place-content-center">
      <div className="space-y-[30px] flex  items-center flex-col">
        <Typographie
          className="max-w-[650px] text-center"
          font="ambit"
          variant="h2"
          theme="error"
        >
          Votre payement n&aposa pas aboutie veuillez ressayer ou contacter notre
          support
        </Typographie>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button  size="large" className="w-full">
              Retourner a l&aposaccueil
            </Button>
          </Link>
          <Link href="/userpages/ClientSupport">
            <Button variant="filled" size="large" className="w-full">
              Contacter le Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
