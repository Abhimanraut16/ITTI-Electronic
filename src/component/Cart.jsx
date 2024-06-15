import React from 'react'

function Cart({ cart, setCart }) {
  return (
    <div>
      <div className="container my-5" style={{ width: '54%' }}>
        {cart.length == 0 ? (
          <>
          </>

        ) :
          cart.map((pro) => {
            return (<>
              <div className="card mb-3 my-5" style={{ width: '700px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={pro.imgSrc} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">{pro.title}</h5>
                      <p className="card-text">{pro.description}</p>
                      <button className='btn btn-primary mx-3'>{pro.price}{' '}₹</button>
                      <button className='btn btn-warning'>Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>)
          })}



      </div>
    </div>
  )
}

export default Cart