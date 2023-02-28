import About from "../../component/about/About";
import CourseHome from "../../component/allcourses/CourseHome";
import Blog from "../../component/blog/Blog";
import Contact from "../../component/contact/Contact";
import Home from "../../component/home/Home";
import Pricing from "../../component/pricing/Pricing";
import Team from "../../component/team/Team";
import Main from "../../Layout/Main";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>, 
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/courses',
            element: <CourseHome/>
        },
        {
            path: '/team',
            element: <Team/>
        },
        {
            path: '/pricing',
            element: <Pricing/>
        },
        {
            path: '/journal',
            element: <Blog/>
        },
        {
            path: '/contact',
            element: <Contact/>
        }
      ]
    }

  ]);

  export default router;