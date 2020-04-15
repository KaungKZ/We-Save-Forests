import { selectOne, selectAll } from "./selectFunctions";

export const nav_btn = selectOne(".menu-for-phone");
export const header_menu = selectOne("header .menu");
export const header = selectOne("header");
export const mobile_list = selectOne("header .menu .list");
export const upToTop_btn = selectOne(".up-to-top");
export const home_page_body = selectOne(".home-page");

export const nav_links = selectAll(".list a");
export const slide_links = selectAll(".slide-link");

export const learn_more_btn = selectOne(".learn_more-btn");

export const loading_screen = selectOne(".loading-screen");
