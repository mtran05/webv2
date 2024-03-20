'use client';

import { useRoutes } from "react-router-dom";
import routes from "../router";

export default function App() {
  const content = useRoutes(routes);
  return content;
}
