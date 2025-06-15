import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GiftCardProps {
  amount: number;
  isPopular?: boolean;
  onSelect: (amount: number) => void;
  isSelected: boolean;
}

const GiftCard = ({
  amount,
  isPopular,
  onSelect,
  isSelected,
}: GiftCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-300 ${
        isSelected
          ? "ring-2 ring-blue-500 shadow-lg scale-105"
          : "hover:shadow-lg hover:scale-102"
      } ${isHovered ? "shadow-xl" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(amount)}
    >
      {isPopular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
          Популярный
        </Badge>
      )}

      <div className="p-6 text-center">
        {/* Apple Logo */}
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold">🍎</span>
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <div className="text-3xl font-bold text-gray-900 mb-1">{amount}₽</div>
          <div className="text-sm text-gray-600">Подарочная карта Apple</div>
        </div>

        {/* Features */}
        <div className="mb-6 space-y-2">
          <div className="text-xs text-gray-500">✓ Мгновенная доставка</div>
          <div className="text-xs text-gray-500">✓ Действует в App Store</div>
          <div className="text-xs text-gray-500">✓ Без комиссий</div>
        </div>

        {/* Purchase Button */}
        <Button
          className={`w-full transition-all duration-200 ${
            isSelected
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          size="lg"
        >
          {isSelected ? "Выбрано" : "Купить"}
        </Button>
      </div>
    </Card>
  );
};

export default GiftCard;
