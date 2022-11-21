import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { store } from './Detail'
import CardOne from '../Component/CardOne'
import HomeCard from '../Component/HomeCard'
import CardTwo from '../Component/CardTwo'

const Home = () => {
    
    // const [detail] = useContext(store);
   

    const [data, setData] = useState([])

    useEffect(() => {
         const url ="https://server-data1.herokuapp.com/api/Blogdata";
        fetch(url).then(res => res.json()).then(res => setData(res))
      }, [])
   
    
    return (

        <div className='Home'>

            <div className="home__container">
                <div className="home__first">
                
                </div>
                <div className="home__sec">
                    <Link to="/fitness" > 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSr-Lrl9GlkB4aeTNllACb4WIQ1KDEnMWs08qS9-I3&s" alt=" not found" />
                </Link>

                </div>
                <div className="home__thir">
                   
                    <Link to='/technology'>  
                 <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="not found" /></Link>
                </div>
            </div>


            <h1 style={{ marginTop: "20px" }}>The Latest</h1>
            <hr style={{ width: "200px", thickness: "20px" }} />
            <div className='home__left left1'>
                {/* {data.filter((article) => { return article.category === "bollywood" }).map((n) => (
                         <HomeCard
                            articleid={n.id}
                            imgUrl={n.Image}
                            title={n.title}
                            description={n.description}
                            author={n.author}
                        />))} */}

                        {
                            data.filter((article) => { return article.category === "bollywood" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))  
                        }
            </div>
            <div className='home__left left1'>
                {/* {
                   
                    data.filter((article) => { return article.category === "technology" }).map((n) => (
                        <HomeCard
                            articleid={n.id}
                            imgUrl={n.Image}
                            title={n.title}
                            description={n.description.slice(0, 200)}
                            author={n.author}
                        />
                     ))
                   
                } */}
                {
                    data.filter((article) => { return article.category === "technology" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    )) 
                }
            </div>
            <div className='home__left left1'>
                {/* {
                 
                    data.filter((article) => { return article.category === "food" }).map((n) => (
                         <HomeCard
                            articleid={n.id}
                            imgUrl={n.Image}
                            title={n.title}
                            description={n.description.slice(0, 200)}
                            author={n.author}
                        />
                    ))
                } */}
                {
                    data.filter((article) => { return article.category === "food" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }

            </div><div>
            <h1 style={{ marginTop: "10px" ,display:"inline-block",marginBottom:"10px"}}>Latest Articles</h1>
            <h1 className='Top'style={{ display:"inline-block"}} >Top Posts <hr /></h1>
            <hr style={{ width: "200px", thickness: "20px" }} /></div>
           <br /><br />
            



            <div className='rightbar2'>
                {/* {
                    
                    data.filter((article) => { return article.category === "mix" }).map((n) => (
                         <CardOne
                             articleid={n.id}
                             imgUrl={n.Image}
                             title={n.title}
                             description={n.description.slice(0, 200)}
                            author={n.author}
                        />
                    ))
                } */}

                {
                    data.filter((article) => { return article.category === "mix" }).map((res) => (
                        <CardOne
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>
            <div className="sidebar2">

            {
                data.filter((article) => { return article.category === "mix" }).map((res) => (
                        <CardTwo
                            articleid={res.id}
                            imgUrl={res.Image}
                            description={res.description.slice(0, 200)}
                            title={res.title.slice(0, 25)}
                            author={res.author}
                        />
                    ))
            }
                {/* {
                   
                    data.filter((article) => { return article.category === "mix" }).map((n) => (
                         <CardTwo
                             articleid={n.id}
                             imgUrl={n.Image}
                             description={n.description.slice(0, 200)}
                             title={n.title.slice(0, 25)}
                             author={n.author}
                         />
                     ))
                } */}

                <div className='advertisement'>
                    <p>Advertisement</p>
                </div>
            </div>
            <h1 style={{ marginTop: "10px", display: "inline-block" }}>Latest Stories</h1>
            <hr />

            <div className='home__left'>
            {
                data.filter((article) => { return article.category === "footer1" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
            }
                {/* {
                    data.filter((article) => { return article.category === "footer1" }).map((n) => (
                         <HomeCard
                             articleid={n.id}
                             imgUrl={n.Image}
                             title={n.title}
                             description={n.description.slice(0, 200)}
                             author={n.author}
                         />
                     ))
                } */}
            </div>

            <div className='home__left'>
                {/* {
                    data.filter((article) => { return article.category === "footer2" }).map((n) => (
                         <HomeCard
                             articleid={n.id}
                             imgUrl={n.Image}
                             title={n.title}
                             description={n.description.slice(0, 200)}
                             author={n.author}
                         />
                     ))
                } */}

                {
                    data.filter((article) => { return article.category === "footer2" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
                }
            </div>

            <div className='home__left'>

            {
                data.filter((article) => { return article.category === "footer3" }).map((res) => (
                        <HomeCard
                            articleid={res.id}
                            imgUrl={res.Image}
                            title={res.title}
                            description={res.description.slice(0, 200)}
                            author={res.author}
                        />
                    ))
            }
                {/* {
                    data.filter((article) => { return article.category === "footer3" }).map((n) => (
                         <HomeCard
                             articleid={n.id}
                             imgUrl={n.Image}
                             title={n.title}
                             description={n.description.slice(0, 200)}
                             author={n.author}
                         />
                     ))
                } */}
            </div>

        </div>


    )
}

export default Home