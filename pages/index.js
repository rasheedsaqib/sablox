import withWidth from "../HOC/withWidth";
import SelectedBlog from "../Components/Index/SelectedBlog/selectedBlog";
import Categories from "../Components/Index/Categories/categories";
import Blogs from "../Components/Index/Blogs/blogs";

const Home = props => {
    return (
        <>
            <SelectedBlog />
            <Categories />
            <Blogs posts={props.posts} />
        </>
    )
}

export async function getStaticProps() {
    return{
        props: {
            posts: [
                {_id: 1, title: 'Lorem ipsum dolor sit Amet, consectetur',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing',
                    owner: 'Hussain Ahmad',
                    tag: 'Development',
                    createdAt: 'December 9, 2021',
                    image: 'http://localhost:3000/thumbnail.jpg'
                },
                {_id: 2, title: 'Lorem ipsum dolor sit Amet, consectetur',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing',
                    owner: 'Hussain Ahmad',
                    tag: 'Development',
                    createdAt: 'December 9, 2021',
                    image: 'http://localhost:3000/thumbnail2.jpg'
                },
                {_id: 3, title: 'Lorem ipsum dolor sit Amet, consectetur',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing',
                    owner: 'Hussain Ahmad',
                    tag: 'Development',
                    createdAt: 'December 9, 2021',
                    image: 'http://localhost:3000/thumbnail3.jpg'
                },
                {_id: 4, title: 'Lorem ipsum dolor sit Amet, consectetur',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing',
                    owner: 'Hussain Ahmad',
                    tag: 'Development',
                    createdAt: 'December 9, 2021',
                    image: 'http://localhost:3000/thumbnail.jpg'
                },
                {_id: 5, title: 'Lorem ipsum dolor sit Amet, consectetur',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing',
                    owner: 'Hussain Ahmad',
                    tag: 'Development',
                    createdAt: 'December 9, 2021',
                    image: 'http://localhost:3000/thumbnail2.jpg'
                },
                {_id: 6, title: 'Lorem ipsum dolor sit Amet, consectetur',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing',
                    owner: 'Hussain Ahmad',
                    tag: 'Development',
                    createdAt: 'December 9, 2021',
                    image: 'http://localhost:3000/thumbnail3.jpg'
                }
            ]
        }
    }
}

export default withWidth(Home);
