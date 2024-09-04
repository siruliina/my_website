import React from 'react';
import '../css/Hobbies.css';

function Hobbies() {
  return (
    <div>
        <p>
            These are some of my hobbies.
        </p>
        <div className="grid-container">
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2017/03/28/05/45/run-2181103_1280.jpg" alt="Picture" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>Jogging</b></h4>
                    <p>
                        I like to go on runs to get some exercise and steps.
                    </p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2016/11/18/16/56/book-1835799_1280.jpg" alt="Picture" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>Reading</b></h4>
                    <p>
                        It's nice to get lost in a good book and see the world through a different lens.
                    </p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2015/07/31/15/02/knit-869221_1280.jpg" alt="Picture" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>Knitting</b></h4>
                    <p>
                        Knitting calms my mind and gives me an opportunity to make things for myself.
                    </p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2017/06/11/15/21/yoga-2392635_1280.jpg" alt="Picture" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>Aesthetic Group Gymnastics</b></h4>
                    <p>
                        I have had this hobby for pretty much my whole life.
                        I first stopped in 2016 but started as a coach right away.
                        In 2023 I continued as an athlete in an adults' team.
                    </p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2017/03/07/23/34/camera-2125549_1280.jpg" alt="Picture" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>Social Media</b></h4>
                    <p>
                        When I was younger I had a pretty successful social media career.
                        However I stopped in 2017 when I lost interest.
                        Since then I have found my interest again and am making content again.
                        I especially enjoy filming and editing videos.
                    </p>
                </div>
            </div>
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_1280.jpg" alt="Picture" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>Baking</b></h4>
                    <p>
                        Baking is like a big hug. I get to eat my delicious creations
                        and invite people over to chat while enjoying a cup of coffee and a baked good.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hobbies;

