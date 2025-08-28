import Card from "../components/Card"
import NavBar from "../components/Navbar"

function Home(){
    return(
        <>
        <NavBar/>
        <div className="flex flex-wrap gap-4">
        <Card/>
        <Card/>
        <Card/> 
        <Card/> 
        <Card/> 
        <Card/> 
        <Card/>     
        </div>

        </>
    )
}
export default Home