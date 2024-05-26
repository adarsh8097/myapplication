import React from "react";
import { useLocation } from "react-router-dom";
import './ItemDetail.css';
import HomePage from "../../Home/Homepage";

function ItemDetail() {
    const location = useLocation();
    const { item } = location.state;

    if (!item) return <div>No item data available</div>;

     const handleData =()=>{
        alert('Coming soon');
     }
    return (
        <>
        <HomePage/>
        <div className="container w-75">
            <div className="single-item card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={item.poster} alt={item.title} className="card-img" />
                    </div>
                    <div className="col-md-8 text-gray-600">
                        <h1>{item.title}</h1>
                        <p><strong>Genre:</strong> {item.genre ?? "No data"}</p>
                        <p><strong>Language:</strong> {item.language ?? "No data"}</p>
                        <p><strong>Director:</strong> {item.director?.join(', ') ?? "No data"}</p>
                        <p><strong>Stars:</strong> {item.stars?.join(', ') ?? "No data"}</p>
                        <p><strong>Released Date:</strong> {item.releasedDate ? new Date(item.releasedDate * 1000).toLocaleDateString() : "No data"}</p>
                        <p><strong>Production Company:</strong> {item.productionCompany?.join(', ') ?? "No data"}</p>
                        <p><strong>Page Views:</strong> {item.pageViews ?? "No data"} views</p>
                        <p><strong>Total Votes:</strong> Voted by {item.totalVoted ?? "No data"} People</p>
                        <button className="btn btn-primary w-100" onClick={ handleData}>Watch Trailer</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
