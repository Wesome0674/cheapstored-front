import { Button } from "@/UI/Design-System/Button";
import { Input } from "@/UI/Design-System/Input";
import { Typographie } from "@/UI/Design-System/Typographie";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full flex ">
      <div className="hidden flex-1 h-screen bg-login md:flex"></div>
      <div className="flex flex-1 items-center justify-center min-h-screen p-4">
        <div className="space-y-[50px] max-w-[600px]">
          <div className="space-y-[20px]">
            <Typographie font="cooper" variant="h2">
              Bienvenue sur Cheapstored, <br /> Connecter vous pour Continuer.
            </Typographie>
            <Typographie font="ambit" variant="tag-title">
              Vous n&apos; avez pas de compte?
              <span className="underline text-blue cursor-pointer"> Creer un compte</span>{" "}
              <br /> Cela prendra moin de une minutes
            </Typographie>
          </div>
          <form
            action=""
            className="flex flex-col items-center gap-[20px] w-full"
          >
            <div className="space-y-[10px] w-full">
              <Typographie variant="h3" font="ambit">
                Email
              </Typographie>
              <Input variant="email" placeholder="email@exemple.com" />
            </div>
            <div className="space-y-[10px] w-full">
              <Typographie variant="h3" font="ambit">
                Mot de passe
              </Typographie>
              <Input variant="password" placeholder="votre mot de passe" />
            </div>
            <Typographie
              theme="secondary"
              variant="h3"
              className="underline cursor-pointer"
              font="ambit"
            >
              Mot de passe oublié?
            </Typographie>
            <Button size="large" className="w-full" variant="filled">
              Se Connecter
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
