import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PurchaseFlowProps {
  selectedAmount: number | null;
  onClose: () => void;
}

const PurchaseFlow = ({ selectedAmount, onClose }: PurchaseFlowProps) => {
  const [step, setStep] = useState(1);

  if (!selectedAmount) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white rounded-2xl overflow-hidden">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Оформление покупки
            </h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>

          {/* Selected Card Info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">
                  Apple Gift Card
                </div>
                <div className="text-sm text-gray-600">
                  Номинал: {selectedAmount}₽
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {selectedAmount}₽
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {step === 1 && (
              <div className="space-y-4">
                <div className="text-center">
                  <Icon
                    name="CreditCard"
                    size={48}
                    className="mx-auto mb-4 text-blue-500"
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    Выберите способ оплаты
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Безопасная оплата через проверенные системы
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="CreditCard" size={20} className="mr-3" />
                    Банковская карта
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Smartphone" size={20} className="mr-3" />
                    СБП (Система быстрых платежей)
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Wallet" size={20} className="mr-3" />
                    Электронный кошелек
                  </Button>
                </div>

                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => setStep(2)}
                >
                  Продолжить
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="text-center">
                  <Icon
                    name="Mail"
                    size={48}
                    className="mx-auto mb-4 text-green-500"
                  />
                  <h3 className="text-lg font-semibold mb-2">Доставка</h3>
                  <p className="text-gray-600 text-sm">
                    Укажите email для получения подарочной карты
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email получателя
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение (необязательно)
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Поздравляю с праздником!"
                    />
                  </div>
                </div>

                <Button
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => setStep(3)}
                >
                  Завершить покупку
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="text-center">
                  <Icon
                    name="CheckCircle"
                    size={48}
                    className="mx-auto mb-4 text-green-500"
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    Покупка завершена!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Подарочная карта отправлена на указанный email
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Icon
                      name="Gift"
                      size={20}
                      className="text-green-600 mr-2"
                    />
                    <div className="text-sm">
                      <div className="font-semibold text-green-800">
                        Карта на {selectedAmount}₽
                      </div>
                      <div className="text-green-600">
                        Активируется в течение 5 минут
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full" onClick={onClose}>
                  Готово
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PurchaseFlow;
