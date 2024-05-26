import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './item.css'
import HomePage from "../Home/Homepage";
import Footer from "../Footer/Footer";
function Item() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const requestData = {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting"
    };

    const handleData = async () => {
        try {
            const response = await fetch('https://hoblist.com/api/movieList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("Item Data", data);
            setItems(data.result); // Ensure you set the correct part of the response
        } catch (error) {
            console.log("Data not Found:", error);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    const handleItemClick = (item) => {
        navigate(`/Item/${item._id}`, { state: { item } });
    };

    return (
        <>
         <HomePage/>
       
        <div className="container-fluid">
          
            <div className="container movie-list ">
                {items.map((item) => (
                    <div key={item._id} className="card w-75"  onClick={() => handleItemClick(item)} >
                        <div className="item-card">
                        <img src={item.poster} alt={item.title}  className="card-img"/>
                        <div className="overlay">
                                <div className="title">{item.title}</div>
                               </div>
                        </div>
                        <div>
                            {/* <h2>{item.title}</h2>  */}
                             {/* <p><strong>Genre:</strong> {item.genre}</p>
                            <p><strong>Language:</strong> {item.language}</p>
                            <p><strong>Director:</strong> {item.director.join(', ')}</p>
                            <p><strong>Stars:</strong> {item.stars.join(', ')}</p>
                            <p><strong>Released Date:</strong> {new Date(item.releasedDate * 1000).toLocaleDateString()}</p>
                            <p><strong>Production Company:</strong> {item.productionCompany.join(', ')}</p>
                            <p><strong>Page Views:</strong> {item.pageViews}</p>
                            <p><strong>Total Votes:</strong> {item.totalVoted}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}



export default Item;
