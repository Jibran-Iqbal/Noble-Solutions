import React from 'react'
import { Link } from 'react-router-dom'

const BecomeButton = () => {
  return (
    <section className="product py-3 bg1">
        <div className="container">
            <div className="row mb-2">
                <div className="col-md-6">
                    <Link to="/products">
                        <img  src={process.env.PUBLIC_URL + "/img/slides/noble1.png"} style={{width:"100%", borderRadius:'2%'}}/>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/products">
                        <img  src={process.env.PUBLIC_URL + "/img/slides/noble2.png"} style={{width:"100%", borderRadius:'2%'}}/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BecomeButton
