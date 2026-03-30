import { afterEach, before } from "node:test";
import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { JSDOM } from "jsdom";

import ShopPage from "../app/shop/page";

before(() => {
  const dom = new JSDOM("<!doctype html><html><body></body></html>", {
    url: "http://localhost:3000/shop",
  });

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: dom.window,
  });
  Object.defineProperty(globalThis, "self", {
    configurable: true,
    value: dom.window,
  });
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: dom.window.document,
  });
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    value: dom.window.navigator,
  });
  Object.defineProperty(globalThis, "HTMLElement", {
    configurable: true,
    value: dom.window.HTMLElement,
  });
  Object.defineProperty(globalThis, "Node", {
    configurable: true,
    value: dom.window.Node,
  });
  Object.defineProperty(globalThis, "MouseEvent", {
    configurable: true,
    value: dom.window.MouseEvent,
  });
  Object.defineProperty(globalThis, "getComputedStyle", {
    configurable: true,
    value: dom.window.getComputedStyle.bind(dom.window),
  });
});

afterEach(() => {
  cleanup();
});

test("category nav keeps dropdowns outside the horizontal scroll area", () => {
  const view = render(<ShopPage />);

  const koiCategoryButton = view.getByRole("button", { name: /koi variety/i });
  const navList = koiCategoryButton.closest("li")?.parentElement;

  assert.ok(navList, "expected the category button to live inside the nav list");
  assert.match(
    navList.className,
    /\bmd:overflow-visible\b/,
    "desktop nav should let dropdowns escape the horizontal scroller",
  );

  fireEvent.click(koiCategoryButton);

  assert.ok(
    view.getByRole("button", { name: "Kohaku" }),
    "opening the category should render submenu items",
  );
});

test("shop page shows a coming soon sales notice below the hero", () => {
  const view = render(<ShopPage />);

  assert.ok(
    view.getByText("正在准备中，暂时不开放销售，敬请期待"),
    "expected the shop page to show the temporary sales notice",
  );
  assert.ok(
    view.getByText("We are preparing the shop. Sales are temporarily unavailable. Stay tuned."),
    "expected the shop page to show the English sales notice",
  );
});
