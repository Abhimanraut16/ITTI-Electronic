import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

// import Product from './Product'


function ProductDetail() {
    const { id } = useParams()
    const [Product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((Product) => Product.id == id)
        setProduct(filterProduct[0]);

        const relatedProducts = items.filter((p) => p.category === Product.category)
        // setRelatedProducts(relatedProducts)
        setRelatedProducts(relatedProducts)

    }, [id, Product.category]);
    return (
        <>
            <div className="container cont">
                <div className="img">
                    <img src={Product.imgSrc} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className="card-title">{Product.title}</h2>
                    <p className="card-text">{Product.description}</p>
                    <button className='btn btn-primary mx-3'>{Product.price}{' '}₹</button>
                    <button className='btn btn-warning'>Add to Cart</button>
                </div>


            </div>
            {/* <Product items={relatedProducts} /> */}
            {relatedProducts.map((rp) =>
                <>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-lg-8 col-md-6 my-3 text-center">
                                <div className="cart d-flex">

                                    <div className='text-center '>
                                        <img src={rp.imgSrc} width="25%"></img>
                                        <h2 className="card-title">{Product.title}</h2>
                                        <p className="card-text">{Product.description}</p>
                                        <button className='btn btn-primary mx-3'>{Product.price}{' '}₹</button>
                                        <button className='btn btn-warning'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>



            )}


            {/* <Product/> */}

        </>
    )
}

export default ProductDetail