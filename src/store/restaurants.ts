import { defineStore } from "pinia";
import { IDish } from "@/typescript/interfaces";

export const useRestaurantsStore = defineStore("restaurants", {
  state: () => ({
    restaurants: [
      {
        id: 1,
        name: "Make Love Pizza",
        dishes: [
          {
            id: 1.1,
            name: "Инглиш Брэкфаст",
            price: 695,
            description:
              "Сырный соус, бекон, охотничьи колбаски, шампики, томаты, перепелиные яички, сыр моцарелла, базилик. В традициях английского завтрака.",
            quantityInCart: 0,
            photoName: "pizza quail testicles",
          },
          {
            id: 1.2,
            name: "Кеннеди",
            price: 625,
            description:
              "Куриное филе, ветчина, свежие томаты, чесночный соус, сыр «Моцарелла» и базилик. Закажи Кеннеди!",
            quantityInCart: 0,
            photoName: "pizza chicken",
          },
          {
            id: 1.3,
            name: "Чиииз",
            price: 625,
            description:
              "Четыре сыра: «Моцарелла», «Пармезан», «Гауда», «Дор-блю» на пицца-соусе, базилик",
            quantityInCart: 0,
            photoName: "pizza cheese",
          },
          {
            id: 1.4,
            name: "Элвис",
            price: 625,
            description:
              "Бекон, ветчина, свежие томаты, красный лук, сырный соус, сыр «Моцарелла», соленые огурчики, кунжутный бортик, базилик",
            quantityInCart: 0,
            photoName: "pizza beacon",
          },
          {
            id: 1.5,
            name: "Сёрф-пицца",
            price: 585,
            description:
              "Куриное филе, ананасы, сыр «Моцарелла», кунжутный бортик и пицца-соус",
            quantityInCart: 0,
            photoName: "pizza pineapple",
          },
          {
            id: 1.6,
            name: "Леннон",
            price: 665,
            description:
              "Свежие шампиньоны, томаты, пеппероната и красный лук, маслины, сыр «Фета», сыр «Моцарелла», томатный пицца-соус и базилик",
            quantityInCart: 0,
            photoName: "pizza vegan",
          },
        ],
        photoName: "Pizza",
      },
      {
        id: 2,
        name: "tut Sочно",
        dishes: [
          {
            id: 2.1,
            name: "SОЧНЫЙ",
            price: 420,
            description:
              "Воздушная булочка, котлета из мраморной говядины, бекон жареный, лук фри, лук красный, лист салата, свежие томаты, огурчики маринованные, сыр «Чеддер», соус «Фирменный».",
            quantityInCart: 0,
            photoName: "burger biff beacon",
          },
          {
            id: 2.2,
            name: "БЕЛЫЙ ИТАЛЬЯШКА",
            price: 429,
            description:
              "Воздушная булочка, свежие томаты, брусника, котлета из мраморной говядины, лист салата, соус «Песто», сыр «Моцарелла», лук красный, базилик, соус «Фирменный».",
            quantityInCart: 0,
            photoName: "burger biff cheese",
          },
          {
            id: 2.3,
            name: "ДОР БЛЮ",
            price: 299,
            description:
              "Воздушная булочка, котлета из мраморной говядины, брусничный конфитюр, лист салата, соус Дор Блю",
            quantityInCart: 0,
            photoName: "burger dor blue",
          },
          {
            id: 2.4,
            name: "КАВКАЗСКИЙ",
            price: 439,
            description:
              "Воздушная булочка, котлета из мраморной говядины, запечённые овощи (баклажан, перец, помидор, лук, чеснок), зелень (кинза, базилик), сыр «Брынза», яйцо, соус «Шрирача», халапеньо маринованный.",
            quantityInCart: 0,
            photoName: "burger biff vegetables",
          },
          {
            id: 2.5,
            name: "PRO ЧЕРРИ",
            price: 390,
            description:
              "Воздушная булочка, котлета из мраморной говядины, белый соус, вишневый и луковый конфитюр, творожный сыр.",
            quantityInCart: 0,
            photoName: "burger biff chery",
          },
          {
            id: 2.6,
            name: "РВАНЫЙ",
            price: 300,
            description:
              "Воздушная булочка, рваная свинина, луковый конфитюр, соус «Фирменный», салат «Витаминка», свежий огурец.",
            quantityInCart: 0,
            photoName: "burger pork",
          },
        ],
        photoName: "Burger",
      },
      {
        id: 3,
        name: "Дыхание Вока",
        dishes: [
          {
            id: 3.1,
            name: "Красный огненный суп",
            price: 200,
            description:
              "Острый суп для любителей огненной еды. Обжаренная говядина с овощами: лук, морковь, болгарский перец, с добавлением лапши и пряного мясного бульона. Соус обладает ярким, насыщенным вкусом ферментированной сои имеет приятное острое послевкусие.",
            quantityInCart: 0,
            photoName: "asian soup",
          },
          {
            id: 3.2,
            name: "Том-ям по-китайски",
            price: 400,
            description:
              "В прибрежных районах Южного Китая тоже готовят том-ям. Только в нём обычно есть и креветки, и куриное филе. И непременная порция риса к тарелке супа.",
            quantityInCart: 0,
            photoName: "tom yum soup",
          },
          {
            id: 3.3,
            name: "Лапша со свининой 'Шанхай'",
            price: 290,
            description:
              "Лапша со свининой и овощами: лук, морковь, перец болгарский, и немного капусты. Готовится с кисло-сладким соусом, сбалансированная, обладает выраженным ароматом китайских специй 'У сань мянь'.",
            quantityInCart: 0,
            photoName: "wok Shanghai",
          },
          {
            id: 3.4,
            name: "Лапша с говядиной по-сычуаньски",
            price: 310,
            description:
              "Лапша с говядиной и овощами: луком, морковью, болгарским перцем и капустой - пряная, обладает интенсивным вкусом, с кисло-острым соусом и посыпана свежемолотым сычуаньским перцем.",
            quantityInCart: 0,
            photoName: "wok in Sichuan",
          },
          {
            id: 3.5,
            name: "Рис на воке с соусом хойсин",
            price: 300,
            description:
              "Рис, жареный на воке со свининой, луком и морковью. С добавлением сладкого  китайского соуса 'хойсин'.",
            quantityInCart: 0,
            photoName: "Wok Rice with Hoisin Sauce",
          },
          {
            id: 3.6,
            name: "Цыплёнок генерала Цо",
            price: 370,
            description:
              "Нежное куриное белое мясо в кляре из крахмала, жареное во фритюре. Подается в терпком кисло-сладком соусе, на подушке из белого риса. В гарнировке пряный морковный салат.",
            quantityInCart: 0,
            photoName: "General Tso's Chicken",
          },
        ],
        photoName: "Asian Food",
      },
      {
        id: 4,
        name: "Panda",
        dishes: [
          {
            id: 4.1,
            name: "Дракон классический",
            price: 330,
            description:
              "Классический ролл с творожным сыром, украшается копченым угрем, соусом 'Унаги' и кунжутом.",
            quantityInCart: 0,
            photoName: "sushi Dragon",
          },
          {
            id: 4.2,
            name: "Лава де Люкс",
            price: 318,
            description:
              "Ролл из нежного лосося, с творожным сыром и фирменным соусом Лава.",
            quantityInCart: 0,
            photoName: "sushi lava",
          },
          {
            id: 4.3,
            name: "Нобу Мацухиса",
            price: 338,
            description:
              "Ролл с лососем, творожным сыром, икрой летучей рыбы и зеленым луком. Украшен майонезом, острым соусом и икрой.",
            quantityInCart: 0,
            photoName: "sushi Nobu Matsuhisa",
          },
          {
            id: 4.4,
            name: "Сяке маки",
            price: 359,
            description: "Классический ролл с нежным лососем.",
            quantityInCart: 0,
            photoName: "sushi Syake maki",
          },
          {
            id: 4.5,
            name: "Тоетоми Хидэеси",
            price: 283,
            description:
              "Ролл с творожным сыром и луком в кляре. Украшен соусом «Саламандра» и темпурной крошкой. Полит чуть сладким соусом.",
            quantityInCart: 0,
            photoName: "sushi Toyotomi Hideyoshi",
          },
          {
            id: 4.6,
            name: "Филадельфия с огурцом",
            price: 413,
            description: "Ролл из нежного лосося, огурца и творожного сыра.",
            quantityInCart: 0,
            photoName: "sushi Philadelphia",
          },
        ],
        photoName: "Sushi",
      },
      {
        id: 5,
        name: "KFC",
        dishes: [
          {
            id: 5.1,
            name: "Шефбургер Де Люкс",
            price: 189,
            description:
              "Бургер от шефа теперь Де Люкс! Сочное филе в оригинальной панировке, томаты, салат айсберг, соус Цезарь, аппетитная булочка, ломтик сыра и ломтик бекона.",
            quantityInCart: 0,
            photoName: "kfc",
          },
          {
            id: 5.2,
            name: "Сандерс бургер оригинальный",
            price: 219,
            description:
              "Сливочная булочка Бриошь, два вида сыра, маринованные огурчики, хрустящий салат и легендарное куриное филе в оригинальной панировке, приготовленное экспертами в курице, - лучше просто не бывает!",
            quantityInCart: 0,
            photoName: "kfc",
          },
          {
            id: 5.3,
            name: "Острые крылышки",
            price: 169,
            description:
              "БОгонь внутри! Далеко не ангельские крылья*! Наши острые куриные крылья в хрустящей панировке со жгучими специями – настоящий огонь!",
            quantityInCart: 0,
            photoName: "kfc",
          },
          {
            id: 5.4,
            name: "Картофель фри",
            price: 59,
            description:
              "Еще больше вкуса! В наших крупных ломтиках мы сохранили еще больше вкуса твоего любимого картофеля фри. Он получается именно таким, как ты любишь – с аппетитно хрустящей корочкой и мягкой, рассыпчатой серединкой.",
            quantityInCart: 0,
            photoName: "kfc",
          },
          {
            id: 5.5,
            name: "Сырные подушечки",
            price: 89,
            description:
              "Нежный сыр в хрустящей панировке! Идеальная закуска или дополнение к любимым блюдам! Еще вкуснее с клюквенным соусом.",
            quantityInCart: 0,
            photoName: "kfc",
          },
          {
            id: 5.6,
            name: "Твистер острый",
            price: 199,
            description:
              "Закручен со вкусом! Кусочки нежнейшего куриного филе в хрустящей острой пан с сочными листьями салата, кусочками помидора и нежным соусом мы завернули в пшеничную лепешку и поджарили в тостере.",
            quantityInCart: 0,
            photoName: "kfc",
          },
        ],
        photoName: "Chicken",
      },
    ],
    currentRestaurantDishes: [] as IDish[],
  }),
  actions: {
    addCurrentDishes(id: number) {
      this.currentRestaurantDishes = [];
      this.currentRestaurantDishes = this.restaurants.find(
        (el) => el.id === id
      )!.dishes;
    },
  },
  getters: {},
});
