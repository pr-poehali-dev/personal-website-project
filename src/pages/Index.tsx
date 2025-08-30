import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6 tracking-tight">
              Илья
            </h1>
            <div className="w-24 h-px bg-terracotta-600 mx-auto mb-8"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Стремящийся к космическим высотам через познание земной мудрости
            </p>
          </div>
          
          <div className="flex justify-center gap-2 mb-12 animate-scale-in">
            <Badge variant="outline" className="bg-sage-50 text-sage-700 border-sage-200">
              囲碁 Го
            </Badge>
            <Badge variant="outline" className="bg-terracotta-50 text-terracotta-700 border-terracotta-200">
              Философия
            </Badge>
            <Badge variant="outline" className="bg-stone-200 text-stone-700">
              Физика
            </Badge>
          </div>
        </div>

        <div className="absolute top-12 right-12 text-6xl opacity-10 font-light">
          ☯
        </div>
        <div className="absolute bottom-12 left-12 text-4xl opacity-10">
          ∞
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-stone-900 mb-12 text-center">
            Обо мне
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-medium text-stone-800">
                  <Icon name="GraduationCap" size={24} className="text-sage-600" />
                  Образование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-4">
                  Выпускник Тоншаевской средней школы
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                    <span className="text-sm text-stone-600">Аналитические способности</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                    <span className="text-sm text-stone-600">Эрудированность</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-stone-500 rounded-full"></div>
                    <span className="text-sm text-stone-600">Стремление к знаниям</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-medium text-stone-800">
                  <Icon name="Heart" size={24} className="text-terracotta-600" />
                  Принципы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Саморазвитие</h4>
                    <p className="text-sm text-stone-600">Постоянное стремление к совершенствованию</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Преданность</h4>
                    <p className="text-sm text-stone-600">Верность выбранному пути и людям</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Ответственность</h4>
                    <p className="text-sm text-stone-600">Готовность отвечать за свои решения</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-stone-900 mb-12 text-center">
            Увлечения
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ⚫⚪
                </div>
                <CardTitle className="text-xl font-medium text-stone-800">
                  Настольная игра Го
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-center leading-relaxed">
                  Древняя стратегическая игра, развивающая логическое мышление и терпение. 
                  Путь к пониманию баланса противоположностей.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <CardTitle className="text-xl font-medium text-stone-800">
                  Чтение и Философия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-stone-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-terracotta-500" />
                    <span>Даосизм и Буддизм</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-sage-500" />
                    <span>Научные исследования</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={4} className="text-stone-500" />
                    <span>Мировая литература</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-sage-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🌌
                </div>
                <CardTitle className="text-xl font-medium text-stone-800">
                  Наука
                </CardTitle>
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
                    <span>Астрономия</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aspirations Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-stone-900 mb-12">
            Стремления
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Rocket" size={28} className="text-terracotta-600" />
              </div>
              <h3 className="text-lg font-medium text-stone-800">Космонавтика</h3>
              <p className="text-stone-600 text-sm">
                Стать инженером в области космических технологий
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="BookOpen" size={28} className="text-sage-600" />
              </div>
              <h3 className="text-lg font-medium text-stone-800">Литература</h3>
              <p className="text-stone-600 text-sm">
                Написать собственную книгу
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto">
                <Icon name="TrendingUp" size={28} className="text-stone-600" />
              </div>
              <h3 className="text-lg font-medium text-stone-800">Процветание</h3>
              <p className="text-stone-600 text-sm">
                Достичь финансовой независимости
              </p>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-lg italic text-stone-600 mb-4 max-w-2xl mx-auto">
              "Знание других — это ум, знание себя — это мудрость"
            </blockquote>
            <cite className="text-sm text-stone-500">— Лао-цзы</cite>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-stone-900 mb-12">
            Связаться со мной
          </h2>
          
          <Card className="border-stone-200 shadow-sm">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" size={20} className="text-sage-600" />
                  <span className="text-stone-700">ilya@example.com</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" size={20} className="text-sage-600" />
                  <span className="text-stone-700">+7 (XXX) XXX-XX-XX</span>
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
      <footer className="py-8 px-6 bg-stone-900 text-center">
        <p className="text-stone-400 text-sm">
          © 2024 Илья — Путь через звёзды начинается с одного шага
        </p>
        <div className="mt-4 text-2xl opacity-30">
          道
        </div>
      </footer>
    </div>
  );
};

export default Index;