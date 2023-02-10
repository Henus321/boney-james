import React from "react";
import { FaFacebook, FaInstagram, FaVk, FaYoutube } from "react-icons/fa";

export const SOCIAL_NETWORKS = [
  {
    link: "https://www.instagram.com",
    icon: React.createElement(FaInstagram),
  },
  {
    link: "https://www.vk.com",
    icon: React.createElement(FaVk),
  },
  {
    link: "https://www.youtube.com",
    icon: React.createElement(FaYoutube),
  },
  {
    link: "https://www.facebook.com",
    icon: React.createElement(FaFacebook),
  },
];

export const NOT_FOUND_OPTIONS = {
  PAGE_NOT_FOUND: {
    title: "Страница не найдена",
    text: "Что-то пошло не так...",
  },
  WORK_IN_PROGRESS: {
    title: "Страница на реконструкции",
    text: "Попробуйте зайти позднее...",
  },
};

export const SIDE_MENU_TITLE = {
  bookmarks: "Закладки",
  cart: "Корзина",
  profile: "Профиль",
};

export const CITIES_OPTIONS = [
  {
    label: " ",
    value: "",
  },
  {
    label: "Москва",
    value: "moscow",
  },
  {
    label: "Санкт-Петербург",
    value: "saint-petersburg",
  },
  {
    label: "Владивосток",
    value: "vladivostok",
  },
];

export const TYPE_OPTIONS = [
  {
    label: " ",
    value: "",
  },
  {
    label: "Одежда для женщин",
    value: "woman",
  },
  {
    label: "Одежда для мужчин",
    value: "man",
  },
  {
    label: "Одежда для детей",
    value: "children",
  },
];
