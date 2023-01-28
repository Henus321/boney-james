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

export const PAGE_SIZE = 6;

export const DEFAULT_PAGE = 1;
