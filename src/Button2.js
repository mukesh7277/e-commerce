
import React from 'react';
import "./Button1.css";
import BasicTable2 from "./Tables2"

export default function Button2() {
    return (
        <div>
        <div className='productimg'>
            <div >
               <div>
                <img className='productimg2'src="https://i1.wp.com/smartanaaj.com/wp-content/uploads/2021/01/88FINE.jpg?resize=150%2C150&ssl=1"></img>
                </div>
            </div>
            <div className='productimg3'>
                <div >
                    <img className='productimg2' src="https://i0.wp.com/smartanaaj.com/wp-content/uploads/2021/01/88MED.jpg?resize=150%2C150&ssl=1"></img>
                </div>
                
            </div>
            <div className='productimg3'>
                <div >
                    <img className='productimg2' src="https://i0.wp.com/smartanaaj.com/wp-content/uploads/2021/01/88CARSE.jpg?resize=150%2C150&ssl=1"></img>
                </div>
            </div>
            </div>
            <div className='text2'>
                <div>
                    <br/>
                    <h4>Wheat Description</h4>
                </div>
                <div>
                    <BasicTable2/>
                </div>
            </div>
            <br/><br/><br/><br/>
        </div>

    )
}
