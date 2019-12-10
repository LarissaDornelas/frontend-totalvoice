import React, { useState, useEffect } from "react";
//import { api } from "../../services/api";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <SideBar selected={1} />
      <Header />
    </Container>
  );
}
