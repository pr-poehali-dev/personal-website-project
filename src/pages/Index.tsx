import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const GoBoard = () => {
  const [stones, setStones] = useState<{row: number, col: number, color: 'black' | 'white'}[]>([
    { row: 3, col: 3, color: 'black' },
    { row: 3, col: 4, color: 'white' },
    { row: 4, col: 3, color: 'white' },
    { row: 4, col: 4, color: 'black' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<'black' | 'white'>('black');

  const handleCellClick = (row: number, col: number) => {
    if (stones.find(stone => stone.row === row && stone.col === col)) return;
    
    setStones([...stones, { row, col, color: currentPlayer }]);
    setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-sm text-stone-600">
        Ход: <span className="font-medium">{currentPlayer === 'black' ? '⚫ Черные' : '⚪ Белые'}</span>
      </div>
      <div className="bg-amber-100 p-4 rounded-lg shadow-sm">
        <div className="grid grid-cols-9 gap-0 w-72 h-72 bg-amber-200 rounded">
          {Array.from({ length: 81 }, (_, i) => {
            const row = Math.floor(i / 9);
            const col = i % 9;
            const stone = stones.find(s => s.row === row && s.col === col);
            
            return (
              <div
                key={i}
                className="w-8 h-8 border border-amber-800 border-opacity-30 cursor-pointer hover:bg-amber-300 transition-colors duration-200 flex items-center justify-center relative"
                onClick={() => handleCellClick(row, col)}
              >
                {stone && (
                  <div className={`w-6 h-6 rounded-full animate-scale-in ${
                    stone.color === 'black' ? 'bg-stone-900 shadow-lg' : 'bg-white shadow-md border border-stone-300'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setStones([])}
        className="text-xs"
      >
        Очистить доску
      </Button>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-4 tracking-tight">
              Илья Нечаев Сергеевич
            </h1>
            <div className="w-32 h-px bg-terracotta-600 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Стремящийся к космическим высотам через познание земной мудрости
            </p>
            <div className="flex justify-center gap-4 text-sm text-stone-500 mb-2">
              <span>🎂 31 мая 2008</span>
              <span>📍 Нижний Новгород</span>
              <span>💕 В отношениях</span>
            </div>
            <div className="text-xs text-stone-400">
              Основное общее образование • Тоншаевская средняя школа, 2024
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-2 mb-12 animate-scale-in">
            <Badge variant="outline" className="bg-sage-50 text-sage-700 border-sage-200">囲碁 Го</Badge>
            <Badge variant="outline" className="bg-terracotta-50 text-terracotta-700 border-terracotta-200">Философия</Badge>
            <Badge variant="outline" className="bg-stone-200 text-stone-700">Физика</Badge>
            <Badge variant="outline" className="bg-sage-100 text-sage-800">Космология</Badge>
            <Badge variant="outline" className="bg-terracotta-100 text-terracotta-800">Китай</Badge>
          </div>
        </div>

        <div className="absolute top-12 right-12 text-6xl opacity-10 font-light">☯</div>
        <div className="absolute bottom-12 left-12 text-4xl opacity-10">∞</div>
        <div className="absolute top-1/2 left-8 text-3xl opacity-10">道</div>
      </section>

      {/* Personality Traits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-stone-900 mb-12 text-center">Личностные характеристики</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="strengths" className="border border-sage-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium text-stone-800 hover:text-sage-700">
                Сильные стороны 💪
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <Icon name="TrendingUp" size={32} className="text-sage-600 mx-auto mb-2" />
                    <h4 className="font-medium text-stone-800">Стремление к развитию</h4>
                    <p className="text-sm text-stone-600 mt-1">Постоянное желание расти и совершенствоваться</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Brain" size={32} className="text-sage-600 mx-auto mb-2" />
                    <h4 className="font-medium text-stone-800">Эрудированность</h4>
                    <p className="text-sm text-stone-600 mt-1">Широкие знания в разных областях</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Users" size={32} className="text-sage-600 mx-auto mb-2" />
                    <h4 className="font-medium text-stone-800">Преданность</h4>
                    <p className="text-sm text-stone-600 mt-1">Верность принципам и близким людям</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="growth-areas" className="border border-terracotta-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium text-stone-800 hover:text-terracotta-700">
                Зоны роста 🌱
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <Icon name="Shield" size={32} className="text-terracotta-500 mx-auto mb-2" />
                    <h4 className="font-medium text-stone-800">Доверчивость</h4>
                    <p className="text-sm text-stone-600 mt-1">Работаю над здоровой осторожностью</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Zap" size={32} className="text-terracotta-500 mx-auto mb-2" />
                    <h4 className="font-medium text-stone-800">Стрессоустойчивость</h4>
                    <p className="text-sm text-stone-600 mt-1">Развиваю навыки управления стрессом</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Sun" size={32} className="text-terracotta-500 mx-auto mb-2" />
                    <h4 className="font-medium text-stone-800">Оптимизм</h4>
                    <p className="text-sm text-stone-600 mt-1">Работаю над позитивным мышлением</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="principles" className="border border-stone-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium text-stone-800 hover:text-stone-700">
                Принципы и убеждения 🎯
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h4 className="font-medium text-stone-800 mb-2">Жизненные принципы:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <Badge variant="secondary" className="text-xs justify-center">Преданность</Badge>
                      <Badge variant="secondary" className="text-xs justify-center">Саморазвитие</Badge>
                      <Badge variant="secondary" className="text-xs justify-center">Ответственность</Badge>
                      <Badge variant="secondary" className="text-xs justify-center">Честность</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <span className="text-lg">☯</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800">Мировоззрение</h4>
                      <p className="text-sm text-stone-600">Атеист с элементами даосизма и буддизма</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="work-style" className="border border-sage-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium text-stone-800 hover:text-sage-700">
                Подход к работе и решениям 💼
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-sage-200">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-stone-800 mb-2 flex items-center gap-2">
                          <Icon name="Clock" size={18} className="text-sage-600" />
                          Рабочий подход
                        </h4>
                        <p className="text-sm text-stone-600 mb-2">
                          Верю в своевременное выполнение задач. Ничего нельзя откладывать.
                        </p>
                        <p className="text-xs text-sage-700 font-medium">
                          Дедлайны — мощный стимул к действию
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-sage-200">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-stone-800 mb-2 flex items-center gap-2">
                          <Icon name="Brain" size={18} className="text-sage-600" />
                          Принятие решений
                        </h4>
                        <p className="text-sm text-stone-600 mb-2">
                          Зависит от ситуации. Сочетаю интуицию с логическим анализом.
                        </p>
                        <p className="text-xs text-sage-700 font-medium">
                          Стремлюсь к тщательному планированию дня
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social" className="border border-terracotta-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium text-stone-800 hover:text-terracotta-700">
                Социальные навыки 🤝
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-stone-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800">Интроверт</h4>
                      <p className="text-sm text-stone-600">Могу заводить знакомства, но предпочитаю не быть в центре внимания</p>
                    </div>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <h4 className="font-medium text-stone-800 mb-2">Ценю в людях:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Ум</Badge>
                      <Badge variant="secondary" className="text-xs">Мотивация</Badge>
                      <Badge variant="secondary" className="text-xs">Энтузиазм</Badge>
                      <Badge variant="secondary" className="text-xs">Целеустремлённость</Badge>
                      <Badge variant="secondary" className="text-xs">Преданность</Badge>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Interests Section with Interactive Go Board */}
      <section className="py-20 px-6 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-stone-900 mb-12 text-center">Увлечения</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-medium text-stone-800">
                    <span className="text-2xl">⚫⚪</span>
                    Настольная игра Го
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    Древняя стратегическая игра, развивающая логическое мышление и терпение. 
                    Путь к пониманию баланса противоположностей.
                  </p>
                  <div className="text-sm text-terracotta-700 font-medium">
                    🎯 Цель: получить первый дан
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-medium text-stone-800">
                    <Icon name="BookOpen" size={24} className="text-sage-600" />
                    Литература и философия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-stone-800 mb-1">Любимые произведения:</h4>
                      <ul className="text-sm text-stone-600 space-y-1">
                        <li>• «Эпопея Империи Цинь» (сериал)</li>
                        <li>• «Воспоминания о прошлом Земли» — Лю Цысинь</li>
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-stone-800 mb-1">Интересы:</h4>
                      <p className="text-sm text-stone-600">География, физика, космология, история и культура Китая</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-medium text-stone-800 mb-4">Интерактивная доска Го</h3>
              <GoBoard />
              <p className="text-xs text-stone-500 mt-4 text-center max-w-xs">
                Нажимайте на пересечения линий, чтобы поставить камни. Играют поочередно черные и белые.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🎮</div>
                <CardTitle className="text-xl font-medium text-stone-800">Развлечения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-terracotta-500" />
                    <span>Компьютерные игры</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-sage-500" />
                    <span>Просмотр видеороликов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-stone-500" />
                    <span>Изучение истории</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🎵</div>
                <CardTitle className="text-xl font-medium text-stone-800">Музыка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-3 text-center">Меломан с широкими вкусами</p>
                <div className="space-y-2 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-terracotta-500" />
                    <span>Рок-музыка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-sage-500" />
                    <span>Электронная музыка</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-terracotta-700 font-medium text-center">
                  🎵 Цель: научиться играть на инструментах
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🌌</div>
                <CardTitle className="text-xl font-medium text-stone-800">Наука</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-terracotta-500" />
                    <span>Физика и Космология</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-sage-500" />
                    <span>География</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-stone-500" />
                    <span>История Китая</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals & Dreams */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-stone-900 mb-12 text-center">Цели и мечты</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium text-stone-800 mb-6">Краткосрочные цели</h3>
              <div className="space-y-4">
                {[
                  { icon: "Home", text: "Приобрести собственный дом", color: "sage" },
                  { icon: "DollarSign", text: "Обеспечить высокий доход", color: "terracotta" },
                  { icon: "Plane", text: "Путешествовать за границу ежегодно", color: "stone" },
                  { icon: "BookOpen", text: "Собрать личную библиотеку", color: "sage" },
                  { icon: "Heart", text: "Укрепить нынешние отношения", color: "terracotta" }
                ].map((goal, index) => (
                  <Card key={index} className="border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-${goal.color}-100 rounded-full flex items-center justify-center`}>
                          <Icon name={goal.icon as any} size={20} className={`text-${goal.color}-600`} />
                        </div>
                        <span className="text-stone-700 font-medium">{goal.text}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-stone-800 mb-6">Заветные мечты</h3>
              <div className="space-y-4">
                {[
                  { icon: "PenTool", text: "Написать собственную книгу", color: "terracotta" },
                  { icon: "Globe", text: "Посетить множество стран", color: "sage" },
                  { icon: "Target", text: "Получить первый дан в Го", color: "stone" },
                  { icon: "Music", text: "Научиться играть на инструментах", color: "sage" },
                  { icon: "Rocket", text: "Стать инженером в космонавтике", color: "terracotta" }
                ].map((dream, index) => (
                  <Card key={index} className="border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-${dream.color}-100 rounded-full flex items-center justify-center`}>
                          <Icon name={dream.icon as any} size={20} className={`text-${dream.color}-600`} />
                        </div>
                        <span className="text-stone-700 font-medium">{dream.text}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Card className="border-stone-300 bg-gradient-to-r from-sage-50 to-terracotta-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-stone-900 mb-4">Видение будущего</h3>
                <p className="text-stone-700 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
                  Через 10-15 лет вижу себя докторантом на престижной должности, 
                  с комфортным домом на двоих и электрокаром в гараже.
                </p>
                <blockquote className="text-stone-600 italic">
                  "Успех для меня — возможность удовлетворить все желания 
                  и иметь чуть больше, чем необходимо для комфорта"
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heroes & Inspiration */}
      <section className="py-20 px-6 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-stone-900 mb-12 text-center">Идеалы и кумиры</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Чжугэ Лян", 
                description: "Великий стратег и мудрец", 
                era: "Китай, III век", 
                icon: "⚔️",
                detail: "Мастер стратегии и дипломатии"
              },
              { 
                name: "Люй Бувэй", 
                description: "Государственный деятель", 
                era: "Древний Китай", 
                icon: "📜",
                detail: "Влиятельный политик и меценат"
              },
              { 
                name: "Илон Маск", 
                description: "Предприниматель-визионер", 
                era: "Современность", 
                icon: "🚀",
                detail: "Пионер космических технологий"
              },
              { 
                name: "Станислав Лем", 
                description: "Писатель-фантаст", 
                era: "XX век", 
                icon: "📚",
                detail: "Мастер философской фантастики"
              },
              { 
                name: "Лю Цысинь", 
                description: "Автор научной фантастики", 
                era: "Современность", 
                icon: "🌌",
                detail: "Создатель «Задачи трёх тел»"
              }
            ].map((hero, index) => (
              <Card key={index} className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {hero.icon}
                  </div>
                  <h3 className="font-medium text-stone-900 text-lg mb-2">{hero.name}</h3>
                  <p className="text-stone-600 text-sm mb-1">{hero.description}</p>
                  <p className="text-stone-500 text-xs mb-2">{hero.era}</p>
                  <p className="text-terracotta-600 text-xs font-medium">{hero.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-stone-900 mb-12">Связаться со мной</h2>
          
          <Card className="border-stone-200 shadow-sm">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" size={20} className="text-sage-600" />
                  <span className="text-stone-700">ilya.nechaev@example.com</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" size={20} className="text-sage-600" />
                  <span className="text-stone-700">+7 (XXX) XXX-XX-XX</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Icon name="MapPin" size={20} className="text-sage-600" />
                  <span className="text-stone-700">Нижний Новгород, Россия</span>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" className="border-sage-200 text-sage-700 hover:bg-sage-50">
                    <Icon name="Github" size={16} className="mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="border-terracotta-200 text-terracotta-700 hover:bg-terracotta-50">
                    <Icon name="Linkedin" size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-center">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-stone-300 text-lg italic mb-4">
            "Путь в тысячу ли начинается с одного шага"
          </blockquote>
          <cite className="text-stone-400 text-sm">— Лао-цзы</cite>
          
          <div className="mt-8 text-stone-400 text-sm">
            © 2024 Илья Нечаев Сергеевич — От земной мудрости к космическим высотам
          </div>
          
          <div className="mt-6 text-4xl opacity-30 font-light">
            道
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;