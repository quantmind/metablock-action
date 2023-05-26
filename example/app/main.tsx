import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const root: HTMLElement = document.getElementById("__metablock") as HTMLElement;

hydrateRoot(root, <App />);
