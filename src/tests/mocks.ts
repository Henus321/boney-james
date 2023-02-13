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

export const mockCollection = [
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
