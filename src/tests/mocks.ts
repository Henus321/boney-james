import { IBookmarksItem, ICartItem, IItem, IShop } from "../models";

export const mockState = {
  collection: {
    collection: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  item: {
    item: null,
    color: "",
    size: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  sidebar: {
    bookmarks: false,
    cart: false,
    profile: false,
  },
  cart: {
    cart: [],
  },
  bookmarks: {
    bookmarks: [],
  },
  shops: {
    shops: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  user: {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  orders: {
    orders: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  burger: {
    burger: false,
  },
};

export const mockCollection: IItem[] = [
  {
    cost: 10999,
    description:
      "Элегантное короткое пальто на кнопках, прямой крой и воротник-стойка.",
    name: "Короткое пальто",
    options: [
      {
        color: "dark-blue",
        id: "378cc4b1-90a8-4c98-a342-c7540a50ba9e",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=4f301a1d-77d8-4e15-9117-a40ae1107a42",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=3c6cce45-978c-4b8f-a25f-7529c36d948d",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=698d4f96-c5b4-4bcf-91e5-71cbb3147290",
        ],
      },
      {
        color: "turquoise",
        id: "10061d1b-504b-4525-9f99-3dca9abdbb4d",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=669b7b47-4f74-4684-a50b-8415e3e75cde",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=7609c089-9e0b-44a8-afa8-1988548d7acf",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=d8dcd203-61fe-4177-baa1-df2ad0ba2f7c",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "short-coat",
  },
  {
    cost: 11990,
    description:
      "Однобортное пальто из вареной шерсти, классическая модель c английским воротником.",
    name: "Однобортное пальто",
    options: [
      {
        color: "dark-green",
        id: "3670b7f6-3dd3-4325-a42d-8a10c873fc41",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=c6d65e99-983d-4c8c-ba8c-e56ee9f82416",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=4b0ff364-b088-477a-8ad9-6c543f799b07",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=3afd2043-1c01-4ee2-adf8-462fab7c1840",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "single-coat",
  },
  {
    cost: 12999,
    description: "Пальто-кокон на кнопках, вареная шерсть и воротник-стойка.",
    name: "Пальто со стойкой",
    options: [
      {
        color: "dark-blue",
        id: "a87af8dc-b4cf-4a17-afa5-5ad359f50be2",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=e1de9b6c-2d36-4379-8599-d6346a3e8608",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=b4fa90e8-e98f-4ee6-8e17-c1c114142856",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=f2c7e4f7-1048-4549-a89c-98b70bdef607",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "collar-coat",
  },
  {
    cost: 9900,
    description: "Двубортное пальто-кокон на двух пуговицах.",
    name: "Пальто-кокон",
    options: [
      {
        color: "milk",
        id: "a8f94501-cbfa-4286-8215-ebd7ca236c77",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=bbc1aca6-9310-45dd-b728-ca21c31c4a8f",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=c806a0fa-0dba-4459-bc70-3c5b8e86953b",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=f67600df-432c-412d-b254-e08c341a8c33",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=ba047d57-8336-4f3e-804d-48684d952291",
        ],
      },
      {
        color: "grey",
        id: "bd043114-54fd-4696-ac41-4e9118d2dfcb",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=d72e602a-d46b-41a0-9037-b7d1019d7e46",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=2a58b65a-ff15-4515-9d53-8ea7fe5329c1",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=56b43e23-ca48-41ef-be6c-d850c3aba811",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=ed5cbb04-787b-47c9-98a0-8c285df5fe67",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "cocoon-coat",
  },
];

export const mockShops: IShop[] = [
  {
    city: "moscow",
    name: "ТЦ Европейский",
    phone: "+7 (495) 921-34-44",
    street: "ул.Площадь Киевского Вокзала",
    subway: "Метро Киевская",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской и детской одежды",
      value: ["woman", "children"],
    },
  },
  {
    city: "saint-petersburg",
    name: "ТРЦ Галерея",
    phone: "+7 (812) 643-31-73",
    street: "Лиговский просп., стр. 30",
    subway: "Метро Площадь Восстания",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской, мужской и детской одежды",
      value: ["woman", "man", "children"],
    },
  },
  {
    city: "moscow",
    name: "ТРЦ Июнь",
    phone: "+7 (495) 543-44-03",
    street: "ул.Мира, стр. 51",
    subway: "Метро Медведково",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской, мужской и детской одежды",
      value: ["woman", "man", "children"],
    },
  },

  {
    city: "moscow",
    name: "ТРЦ Метрополис",
    phone: "+7 (495) 197-77-11",
    street: "Ленинградское ш., 16А, стр. 4",
    subway: "Метро Балтийская",
    time: "10:00-22:00",
    type: { label: "Магазин женской одежды", value: ["woman"] },
  },
  {
    city: "moscow",
    name: "ТЦ Капитолий",
    phone: "+7 (495) 937-26-10",
    street: "ул.Шереметьевская, стр. 20",
    subway: "Метро Марьина Роща",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской, мужской и детской одежды",
      value: ["woman", "man", "children"],
    },
  },
  {
    city: "moscow",
    name: "ТЦ Московский",
    phone: "+7 (495) 414-41-62",
    street: "Комсомольская площадь, стр. 6",
    subway: "Метро Комсомольская",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской и мужской одежды",
      value: ["woman", "man"],
    },
  },
  {
    city: "saint-petersburg",
    name: "ТРЦ Лето",
    phone: "+7 (800) 600-07-84",
    street: "Пулковское ш., 25, корп. 1",
    subway: "Метро Звёздная",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской и мужской одежды",
      value: ["woman", "man"],
    },
  },
  {
    city: "moscow",
    name: "ТЦ Охотный Ряд",
    phone: "+7 (916) 002-87-78",
    street: "Манежная площадь, 1, стр. 2",
    subway: "Метро Охотный Ряд",
    time: "10:00-22:00",
    type: { label: "Магазин мужской одежды", value: ["man"] },
  },
  {
    city: "vladivostok",
    name: "ТРЦ Калина Молл",
    phone: "+7 (914) 970-01-70",
    street: "ул. Калинина, стр. 8",
    subway: "Станция Мальцевская",
    time: "10:00-22:00",
    type: { label: "Магазин мужской одежды", value: ["man"] },
  },
  {
    city: "vladivostok",
    name: "ТЦ Малый ГУМ",
    phone: "+7 (423) 222-20-54",
    street: "ул.Светланская, стр. 43",
    subway: "Станция Улица Лазо",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской, мужской и детской одежды",
      value: ["woman", "man", "children"],
    },
  },
  {
    city: "moscow",
    name: "ТЦ Атриум",
    phone: "+7 (495) 970-15-55",
    street: "ул.Земляной Вал, стр. 33",
    subway: "Метро Чкаловская",
    time: "10:00-22:00",
    type: { label: "Магазин женской одежды", value: ["woman"] },
  },
  {
    city: "moscow",
    name: "ТЦ Европолис",
    phone: "+7 (495) 966-64-98",
    street: "ул.Проспект Мира, 211, корп. 2",
    subway: "Метро Росткино",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской, мужской и детской одежды",
      value: ["woman", "man", "children"],
    },
  },
  {
    city: "saint-petersburg",
    name: "ТРЦ Рио",
    phone: "+7 (812) 414-30-55",
    street: "ул. Фучика, стр. 2",
    subway: "Метро Бухарестская",
    time: "10:00-22:00",
    type: { label: "Магазин женской одежды", value: ["woman"] },
  },
  {
    city: "saint-petersburg",
    name: "ТЦ Радиус",
    phone: "+7 (812) 676-11-00",
    street: "Волковский просп., стр. 32",
    subway: "Метро Волковская",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской, мужской и детской одежды",
      value: ["woman", "man", "children"],
    },
  },
  {
    city: "vladivostok",
    name: "ТЦ Море",
    phone: "+7 (984) 145-15-40",
    street: "ул.Некрасовская, стр. 49А",
    subway: "Станция Улица Гоголя",
    time: "10:00-22:00",
    type: {
      label: "Магазин женской и мужской одежды",
      value: ["woman", "man"],
    },
  },
];

export const mockBookmarks: IBookmarksItem[] = [
  {
    color: "grey",
    cost: 10990,
    description: "Классическое прямое двубортное пальто с четырьмя пуговицами.",
    name: "Прямое пальто",
    options: [
      {
        color: "grey",
        id: "c597455b-29da-4627-b099-8a6fe54f6860",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=1e4192f9-7478-40ad-b70b-b9d221a3fc33",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=844a4eb9-0d5f-4940-9944-7df156671ddc",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=02918c23-2b9f-4651-8b51-85431fd42031",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=8e0ffa5c-ffe3-420e-afdb-ec47e219c273",
        ],
      },
      {
        color: "black",
        id: "25e2d037-2215-4ce7-b6dd-1d040740e8a6",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=26f42d47-200a-417b-b63d-367ed3bfd68d",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=fa4a2f94-a6df-4492-9e2d-76b7cfa540b2",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=883288f3-7b09-427a-b6e5-ac883bce9e6d",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=8a091cec-516b-470e-b6fb-5cfbd5dc7ce5",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "straight-coat",
  },
  {
    color: "dark-blue",
    cost: 10999,
    description:
      "Элегантное короткое пальто на кнопках, прямой крой и воротник-стойка.",
    name: "Короткое пальто",
    options: [
      {
        color: "dark-blue",
        id: "378cc4b1-90a8-4c98-a342-c7540a50ba9e",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-1.jpg?alt=media&token=4f301a1d-77d8-4e15-9117-a40ae1107a42",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-2.jpg?alt=media&token=3c6cce45-978c-4b8f-a25f-7529c36d948d",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-3.jpg?alt=media&token=698d4f96-c5b4-4bcf-91e5-71cbb3147290",
        ],
      },
      {
        color: "turquoise",
        id: "10061d1b-504b-4525-9f99-3dca9abdbb4d",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-6.jpg?alt=media&token=669b7b47-4f74-4684-a50b-8415e3e75cde",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-7.jpg?alt=media&token=7609c089-9e0b-44a8-afa8-1988548d7acf",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-8.jpg?alt=media&token=d8dcd203-61fe-4177-baa1-df2ad0ba2f7c",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "short-coat",
  },
  {
    color: "dark-green",
    cost: 11990,
    description:
      "Однобортное пальто из вареной шерсти, классическая модель c английским воротником.",
    name: "Однобортное пальто",
    options: [
      {
        color: "dark-green",
        id: "3670b7f6-3dd3-4325-a42d-8a10c873fc41",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-004-2.jpg?alt=media&token=c6d65e99-983d-4c8c-ba8c-e56ee9f82416",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-004-1.jpg?alt=media&token=4b0ff364-b088-477a-8ad9-6c543f799b07",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-004-3.jpg?alt=media&token=3afd2043-1c01-4ee2-adf8-462fab7c1840",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "single-coat",
  },
];

export const mockCart: ICartItem[] = [
  {
    color: "grey",
    cost: 10990,
    description: "Классическое прямое двубортное пальто с четырьмя пуговицами.",
    name: "Прямое пальто",
    quantity: 1,
    size: "XS 42",
    options: [
      {
        color: "grey",
        id: "c597455b-29da-4627-b099-8a6fe54f6860",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=1e4192f9-7478-40ad-b70b-b9d221a3fc33",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=844a4eb9-0d5f-4940-9944-7df156671ddc",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=02918c23-2b9f-4651-8b51-85431fd42031",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=8e0ffa5c-ffe3-420e-afdb-ec47e219c273",
        ],
      },
      {
        color: "black",
        id: "25e2d037-2215-4ce7-b6dd-1d040740e8a6",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=26f42d47-200a-417b-b63d-367ed3bfd68d",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=fa4a2f94-a6df-4492-9e2d-76b7cfa540b2",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=883288f3-7b09-427a-b6e5-ac883bce9e6d",
          "https://firebasestorage.googleapis.com/v0/b/boney-…=media&token=8a091cec-516b-470e-b6fb-5cfbd5dc7ce5",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "straight-coat",
  },
  {
    color: "dark-blue",
    cost: 10999,
    description:
      "Элегантное короткое пальто на кнопках, прямой крой и воротник-стойка.",
    name: "Короткое пальто",
    quantity: 3,
    size: "L 48",
    options: [
      {
        color: "dark-blue",
        id: "378cc4b1-90a8-4c98-a342-c7540a50ba9e",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-1.jpg?alt=media&token=4f301a1d-77d8-4e15-9117-a40ae1107a42",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-2.jpg?alt=media&token=3c6cce45-978c-4b8f-a25f-7529c36d948d",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-3.jpg?alt=media&token=698d4f96-c5b4-4bcf-91e5-71cbb3147290",
        ],
      },
      {
        color: "turquoise",
        id: "10061d1b-504b-4525-9f99-3dca9abdbb4d",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-6.jpg?alt=media&token=669b7b47-4f74-4684-a50b-8415e3e75cde",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-7.jpg?alt=media&token=7609c089-9e0b-44a8-afa8-1988548d7acf",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-005-8.jpg?alt=media&token=d8dcd203-61fe-4177-baa1-df2ad0ba2f7c",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "short-coat",
  },
  {
    color: "dark-green",
    cost: 11990,
    description:
      "Однобортное пальто из вареной шерсти, классическая модель c английским воротником.",
    name: "Однобортное пальто",
    quantity: 2,
    size: "S 44",
    options: [
      {
        color: "dark-green",
        id: "3670b7f6-3dd3-4325-a42d-8a10c873fc41",
        photos: [
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-004-2.jpg?alt=media&token=c6d65e99-983d-4c8c-ba8c-e56ee9f82416",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-004-1.jpg?alt=media&token=4b0ff364-b088-477a-8ad9-6c543f799b07",
          "https://firebasestorage.googleapis.com/v0/b/boney-james-c978c.appspot.com/o/2016%2F2021-a-004-3.jpg?alt=media&token=3afd2043-1c01-4ee2-adf8-462fab7c1840",
        ],
      },
    ],
    sizes: ["XS 42", "S 44", "M 46", "L 48"],
    slug: "single-coat",
  },
];
