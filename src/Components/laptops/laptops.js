import './laptops.css';
import React from 'react'
import {Card,Button} from 'react-bootstrap';
import { AiOutlineAmazon } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import fdata from '../filpkartlaptop.json'
import adata from '../amazonlaptop.json'

function laptops(){
    const style = {
        width : '250px',
        height: '300px',
        display: 'block',
        margin: 'auto',
        padding : '10px'
    };
    
    return(
            <div className='container'>
                <div className = 'item'>
                    {adata.map((mobile, i)=>(
                        <div>
                            <Card className= 'mt-3 ms-1 mx-3 shadow' key = {i}>
                                <Card.Img style={style} variant="top" src={mobile.image} />
                                    <Card.Title style={{padding:'10px'}} className='text-center'>{mobile.name}</Card.Title>
                                    <div style={{padding:'10px'}} className='d-block'>
                                        <AiOutlineAmazon className='display-6'/>
                                        <div className='text-center d-inline m-5'>
                                            <p className='d-inline'>{mobile.price}</p>
                                        </div>
                                        <Button variant="outline-danger" href = {mobile.url}>BUY</Button>
                                    </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className='item'>
                    {fdata.map((mobile, i)=>(
                        <div>
                            <Card className= 'mt-3 ms-1 mx-3 shadow' key = {i}>
                                <Card.Img style={style} variant="top" src={mobile.image} />
                                    <Card.Title style={{padding:'10px'}} className='text-center'>{mobile.name}</Card.Title>
                                    <div style={{padding:'10px'}} className='d-block'>
                                        <SiFlipkart className='display-6'/>
                                        <div className='text-center d-inline m-5'>
                                            <p className='d-inline'>{mobile.price}</p>
                                        </div>
                                        <Button variant="outline-danger" href = {mobile.url}>BUY</Button>
                                    </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
    )
}
export default laptops;