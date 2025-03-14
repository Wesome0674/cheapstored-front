import Image from "next/image";
import React from "react";
import { Typographie } from "../Design-System/Typographie";
import { Button } from "../Design-System/Button";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import Counter from "../Design-System/Counter";

interface CartProductProps {
  index: number; // Index of the product in the cart
  name: string;
  price: number;
  quantity: number;
  onDelete: (index: number) => void;
  onQuantityChange: (index: number, delta: number) => void; // Function to change quantity
  image: string;
}

const CartProducts = ({
  index,
  name,
  price,
  quantity,
  onDelete,
  onQuantityChange,
  image,
}: CartProductProps) => {
  return (
    <div className="w-full flex justify-between flex-col md:flex-row gap-4 bg-light border border-cloud rounded-[10px] p-[20px] items-start ">
      <div className="flex gap-[20px]">
        <div className="w-max h-max">
          <Image src={image} alt="" width={54} height={50} />
        </div>

        <div className="space-y-[10px]">
          <Typographie variant="body-sm" theme="dark" font="ambit">
            {name}
          </Typographie>
          <Typographie
            variant="body-sm"
            theme="grey"
            font="ambit"
            className="underline"
          >
            Retour gratuit sous 3 jours
          </Typographie>
          <Typographie variant="body-sm" theme="grey" font="ambit">
            {price} €
          </Typographie>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="w-fit rounded-full flex items-center gap-[15px] px-[15px] py-[5px] border-2 border-grey border-dashed select-none">
          <HiMinus
            className="text-black/70 cursor-pointer"
            size={20}
            onClick={() => onQuantityChange(index, -1)} // Decrement quantity
          />
          <Counter
            value={quantity}
            places={[1]}
            fontSize={16}
            padding={5}
            gap={10}
            textColor="black"
            fontWeight={500}
          />
          <AiOutlinePlus
            className="text-black/70 cursor-pointer"
            size={20}
            onClick={() => onQuantityChange(index, 1)} // Increment quantity
          />
        </div>
        <Button
          variant="delete"
          size="small"
          onClick={() => onDelete(index)} // Call onDelete with the product's index
        >
          Supprimer
        </Button>
      </div>
    </div>
  );
};

export default CartProducts;
