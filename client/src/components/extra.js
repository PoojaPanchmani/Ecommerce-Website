return(<div>
    {cartstatus ? 
    return(<div>
     {userData.addtocart.map((val)=>
     {
         return(<>
             <div className="container-fluid mt-5">
             <div className="row">
                 <div className="col-11">
                     <div className="row">
                         <div className="product_b col-12 col-md-12 col-lg-6 col-xl-6 m-4">
                             <div className="row">
                                 <div className="col-12 col-md-12 col-lg-4">
                                     <img src={val.img} alt="img"
                                     style={{width:"250px",height:"250px"}} className="product_image_b"></img>
                                 </div>
                                 <div className="product_detail_b col-12 col-md-12 col-lg-8">
                                     <h5 className="product_name_b">{val.name}</h5>
                                     <div className="d-flex justify-content-between product_price_b">
                                         <p>{val.dis_price}</p>
                                         <p><del className="org_price_b">{val.org_price}</del></p>
                                     </div>
                                     <p className="save_price_b">Save  {val.save_price}</p>
                                     <p className="order_soon_b">Order Soon</p>
                                     <p className="free_delievery_b">Free Delivery</p>
                                     <div className="d-flex justify-content-between">
                                     <NavLink to="/buynow">
                                         <button type="button" className="buy_cart_b">
                                         Buy Now</button>
                                     </NavLink>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         </>);        
     })}
 </div>)  : return(<>
 <div>HEllo</div>
 </>))}</div>)
