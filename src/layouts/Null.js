import React from "react";
import { renderRoutes } from "react-router-config";

const NullLayout = ({ route }) => <>{renderRoutes(route.routes)}</>;

export default NullLayout;
