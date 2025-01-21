import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";

function MainPage(){
    return (
        <div>
        <header className="App-header">
            <Navbar searchData=""></Navbar>
            <Hero></Hero>
        </header>
        <Section
            title="Top Albums"
            apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
        />
        <Section
            title="New Albums"
            apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
        />
        </div>
    );
}
export default MainPage;