import React, { useState, useEffect } from 'react'
// import { store } from './Detail';
import CardOne from '../Component/CardOne'
import CardTwo from '../Component/CardTwo';

const Bollywood = () => {


    // const [detail] = useContext(store);


    const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://blog-server21.herokuapp.com/api/bolly";
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])


    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
            <h1 style={{ margin: "20px 0px 20px 34.15%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {


                        /* detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                         <CardOne
                             articleid={n.id}
                             imgUrl={n.Image}
                             title={n.title}
                             description={n.description.slice(0, 400)}
                             category={n.category}
                             author={n.author}
                         />
                         )) */

                        data.filter((article) => { return article.category === "Bollywood" }).map((res) => (
                            <CardOne
                                articleid={res.id}
                                imgUrl={res.Image}
                                title={res.title}
                                description={res.description.slice(0, 400)}
                                category={res.category}
                                author={res.author}
                            />))



                    }
                </div>

                <div className="sidebar">
                    {

                        /* detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                           <CardTwo
                               articleid={n.id}
                               imgUrl={n.Image}
                               description={n.description}
                               title={n.title}
                               category={n.category}
                               author={n.author}
                           />
                       )) */


                        data.filter((article) => { return article.category === "Bollywood" }).map((res) => (
                            <CardTwo
                                articleid={res.id}
                                imgUrl={res.Image}
                                description={res.description.slice(0, 200)}
                                title={res.title.slice(0, 35)}

                                category={res.category}
                                author={res.author}
                            />
                        ))



                    }

                    <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Bollywood