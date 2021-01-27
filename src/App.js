import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const App = () => (
    <>
        <Header
            title="Hello there!"
            descr="General Kenoby!"
        />
        <Layout
        id="first"
        title="Hello There!"
        descr="This is General Kenoby"
        urlBg={ 'https://i.ytimg.com/vi/lszKIyUGp4E/maxresdefault.jpg'}

        />
        <Layout
            id="second"
            title="Second Layout"
            descr="Really Second Layout"
            urlBg={false}
            colorBg="#89e089"
        />
        <Layout
            id="third"
            title="General Kenoby!"
            descr="This is grivus"
            urlBg={'https://i.ytimg.com/vi/E1AGApaV4Ok/maxresdefault.jpg'}
        />
        <Footer/>
    </>
)

export default App;
