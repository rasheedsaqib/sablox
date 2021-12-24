import withWidth from "../HOC/withWidth";
import SelectedBlog from "../Components/Index/SelectedBlog/selectedBlog";
import Categories from "../Components/Index/Categories/categories";

const Home = () => {
    return (
        <>
            <SelectedBlog />
            <Categories />
        </>
    )
}

export default withWidth(Home);
