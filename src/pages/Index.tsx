import { useState } from "react";
import GiftCard from "@/components/GiftCard";
import PurchaseFlow from "@/components/PurchaseFlow";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showPurchaseFlow, setShowPurchaseFlow] = useState(false);

  const giftCards = [
    { amount: 500, isPopular: false },
    { amount: 1000, isPopular: true },
    { amount: 3000, isPopular: false },
  ];

  const handleCardSelect = (amount: number) => {
    setSelectedCard(amount);
  };

  const handlePurchase = () => {
    if (selectedCard) {
      setShowPurchaseFlow(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🍎</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                Apple Gift Cards
              </h1>
            </div>
            <Badge
              variant="outline"
              className="text-green-600 border-green-600"
            >
              Мгновенная доставка
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Подарочные карты
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Apple Store
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Идеальный подарок для любого повода. Покупайте приложения, игры,
            музыку и многое другое в экосистеме Apple.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Icon name="Zap" size={16} className="mr-2 text-blue-500" />
              Мгновенная активация
            </div>
            <div className="flex items-center">
              <Icon name="Shield" size={16} className="mr-2 text-green-500" />
              Безопасно
            </div>
            <div className="flex items-center">
              <Icon name="Gift" size={16} className="mr-2 text-purple-500" />
              Без комиссий
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards Grid */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Выберите номинал
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {giftCards.map((card) => (
              <GiftCard
                key={card.amount}
                amount={card.amount}
                isPopular={card.isPopular}
                isSelected={selectedCard === card.amount}
                onSelect={handleCardSelect}
              />
            ))}
          </div>

          {/* Purchase Button */}
          {selectedCard && (
            <div className="text-center animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
                <div className="mb-4">
                  <div className="text-sm text-gray-600">Выбрано:</div>
                  <div className="text-2xl font-bold text-gray-900">
                    Apple Gift Card {selectedCard}₽
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3"
                  onClick={handlePurchase}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить за {selectedCard}₽
                </Button>

                <div className="mt-3 text-xs text-gray-500">
                  Безопасная оплата • Мгновенная доставка
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Почему выбирают наши карты?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Мгновенно
              </h4>
              <p className="text-gray-600">
                Карта приходит на email через несколько минут после покупки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Безопасно
              </h4>
              <p className="text-gray-600">
                Защищенные платежи и официальные карты Apple
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Универсально
              </h4>
              <p className="text-gray-600">
                Используйте в App Store, iTunes и других сервисах Apple
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Flow Modal */}
      {showPurchaseFlow && (
        <PurchaseFlow
          selectedAmount={selectedCard}
          onClose={() => setShowPurchaseFlow(false)}
        />
      )}
    </div>
  );
};

export default Index;
