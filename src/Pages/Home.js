import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (<div className='card'>
        <div className='card__body'> <h2 className='card__title'>Welcome To The Home Page</h2>
        </div>
        <br />
        < div className="post">
            <ul>
                <li>
                    <h4 >
                        <Link className="nav-link" to="DetailPage"> Click here for the detail Post</Link>

                    </h4>
                    <p>Press the upper link. To Explore our Complete entire Post</p><br /></li></ul>
            <ul>
                <li>
                    <h4 >
                        <Link className="nav-link" to="DetailPage"> Click here for the detail Post</Link>

                    </h4>
                    <p>Press the upper link. To Explore our Complete entire Post</p><br /></li></ul>
            <ul>
                <li>
                    <h4 >
                        <Link className="nav-link" to="Api"> Click here for the API FETCHING post</Link>

                    </h4>
                    <p>Press the upper link. To Explore our Complete entire Post</p></li></ul>

        </div>

    </div>
    );
}
export default Home;