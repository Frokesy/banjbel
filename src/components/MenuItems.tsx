import { FC } from "react";

interface MenuItemsProps {
  setShowItems: (showItems: boolean) => void;
}

const MenuItems: FC<MenuItemsProps> = ({ setShowItems }) => {
  const radius = 240; // radius of the curve
  const angle = 90; // angle of the curve in degrees
  const startAngle = -45; // starting angle of the curve in degrees

  const itemCount = 9; // number of menu items
  const itemAngle = angle / (itemCount - 2); // angle between each item
  const itemPositions = Array.from({ length: itemCount }, (_, i) => {
    const itemAngleDeg = startAngle + i * itemAngle;
    const itemAngleRad = (itemAngleDeg * Math.PI) / 180;
    const x = radius * Math.cos(itemAngleRad);
    const y = radius * Math.sin(itemAngleRad);
    return { x, y };
  });

  return (
    <div className="absolute top-0 right-0 h-full">
      <div className="justify-end pt-3">
        {itemPositions.map((pos, i) => (
          <div
            key={i}
            className="border border-[#456db4] bg-[#f6f6f6] flex justify-center py-0.5 px-4 rounded-full uppercase text-[13px] font-bold"
            style={{
              position: "absolute",
              left: `calc(50% - ${pos.x}px)`,
              top: `calc(30% + ${pos.y}px)`,
            }}
            onClick={() => setShowItems(false)}
          >
            {i === 0
              ? "home"
              : i === 1
              ? "our service"
              : i === 2
              ? "pricing"
              : i === 3
              ? "gallery"
              : i === 4 
              ? "facilities"
              : i === 5
              ? "about us"
              : i === 6
              ? "vision"
              : i === 7
              ? "mission"
              : "contact us"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;