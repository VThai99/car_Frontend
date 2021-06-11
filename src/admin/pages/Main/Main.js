import Footer from "./Footer"
import Header from "./Header"

const Main = (props) => {
    return (
        <div>
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </div>
    )
}
export default Main;