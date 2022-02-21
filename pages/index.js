import withWidth from "../HOC/withWidth";
import SelectedBlog from "../Components/Index/SelectedBlog/selectedBlog";
import Categories from "../Components/Index/Categories/categories";
import Blogs from "../Components/Index/Blogs/blogs";
import axios from "../util/axios";
import Newsletter from "../UI/Newsletter/newsletter";
import Footer from "../UI/Footer/footer";
import Navbar from "../UI/Navbar/navbar";
import {useState} from "react";

const Home = props => {

    const [selected, setSelected] = useState('001');

    return (
        <>
            <Navbar/>
            <SelectedBlog posts={props.posts} />
            <Categories categories={props.categories} selected={selected} setSelected={setSelected} />
            <Blogs
                posts={selected === '001' ? props.posts : props.posts.filter(post => post.category._id === selected)}
                constants={props.constants}
            />
            <Newsletter />
            <Footer/>
        </>
    )
}

export async function getStaticProps() {

    const posts = await axios.get('/posts');
    const categories = await axios.get('/categories');
    const constants = await axios.get('/constants');

    return {
        props: {
            posts: posts.data.map(post => {
                const date = new Date(post.createdAt);
                return{
                    ...post,
                    owner: post.owner.firstName + ' ' + post.owner.lastName,
                    about: post.owner.about,
                    date: date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })
                }
            }),
            categories: categories.data,
            constants: constants.data,
        },
        revalidate: 10
    }
}

export default withWidth(Home);
