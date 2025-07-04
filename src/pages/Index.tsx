import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const professions = [
    {
      title: "Таксист",
      icon: "Car",
      description: "Перевозка пассажиров по городу",
      color: "bg-blue-500",
    },
    {
      title: "Автобусник",
      icon: "Bus",
      description: "Общественный транспорт",
      color: "bg-green-500",
    },
    {
      title: "Дальнобойщик",
      icon: "Truck",
      description: "Дальние грузоперевозки",
      color: "bg-orange-500",
    },
    {
      title: "Полицейский",
      icon: "Shield",
      description: "Охрана порядка",
      color: "bg-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-gray-900 font-roboto">
            SubRP
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            BeamNG Drive Roleplay Server
          </p>
          <Badge
            variant="outline"
            className="bg-orange-100 text-orange-800 border-orange-300"
          >
            В разработке
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {professions.map((profession, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${profession.color} flex items-center justify-center`}
                >
                  <Icon
                    name={profession.icon}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-roboto">
                  {profession.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {profession.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-roboto mb-4">
                О сервере
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                SubRP - это новый roleplay сервер для BeamNG Drive, где вы
                сможете окунуться в атмосферу реалистичного симулятора жизни.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Выбирайте профессию, развивайте своего персонажа,
                взаимодействуйте с другими игроками и создавайте уникальные
                истории.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Users" size={20} className="mr-2" />
                  Присоединиться
                </Button>
                <Button variant="outline">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
