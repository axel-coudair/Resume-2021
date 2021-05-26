import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Description from "../components/Description";
import TitleBar from "../components/TitleBar";
import DatedEvent from "../components/DatedEvent";
import ListedPart from "../components/ListedPart";

export default class Home extends React.Component {
  render() {
    return (
      <Layout title="Axel Coudair | Développeur Full stack">
        <Header className="fixed" printable={this}></Header>
        <Description></Description>
        <TitleBar />
        <DatedEvent />
        <DatedEvent />
        <TitleBar />
        <ListedPart />
      </Layout>
    );
  }
}
