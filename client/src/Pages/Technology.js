import React, { useEffect , useState } from 'react'
// import { store } from './Detail';
import CardOne from '../Component/CardOne'
import CardTwo from '../Component/CardTwo';

export const Technology = () => {
//   const [detail] = useContext(store);

const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://blog-server21.herokuapp.com/api/bolly";
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])



    return (
        <div>
        <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>
        <h1 style={{ margin: "20px 0px 20px 41.9%", display: "inline-block" }}>Top Posts</h1>
        <div className="main__container">
            <div className='rightbar'>
{
    data.filter((article) => { return article.category === "Technology" }).map((res) => (
                      <CardOne
                      articleid={res.id}
                              imgUrl={res.Image}
                              title={res.title}
                              description={res.description.slice(0, 400)}
                              category={res.category}
                              author={res.author}
                      />)) 
}


                {/* {
                    detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                        <CardOne
                             articleid={n.id}
                             imgUrl={n.Image}
                             title={n.title}
                             description={n.description.slice(0, 400)}
                             category={n.category}
                             author={n.author}
                         />
                     ))
                } */}
            </div>

            <div className="sidebar">

            {
                data.filter((article) => { return article.category === "Technology" }).map((res) => (
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
                {/* {
                     detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                         <CardTwo
                             articleid={n.id}
                             imgUrl={n.Image}
                             description={n.description.slice(0, 200)}
                             title={n.title.slice(0, 35)}
                             category={n.category}
                             author={n.author}
                         />
                     ))
                } */}

                <div className='advertisement'>
                    <p>Advertisement</p>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Technology