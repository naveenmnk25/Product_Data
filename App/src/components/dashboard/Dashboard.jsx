import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PathConstants } from "../../routing/path-contants";
import "../../styles/Dashboard.scss";
import { useAuth } from "../../auth/auth";
import { fetchProduct } from "../../redux/actions/ProductAction";
import { BASEURL } from "../../api/Api";

function Dashboard() {
  const dispatch = useDispatch();
  const auth = useAuth();
  // Local loading state
  const BASE_URL = BASEURL + "image/";
  //--- State Data -------//
  const productList = useSelector((state) => state.product.productList);
  const productGrid = useSelector((state) => state.product.productGrid);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  //--- useEffect -------//
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Group products by type
  const groupedProducts = productList?.reduce((acc, product) => {
    acc[product.type] = acc[product.type] || [];
    acc[product.type].push(product);
    return acc;
  }, {});
  //----- Handle Data Changes Functions------//

  return (
    <>
      <div className="container ">
        <div className="row">
          {productList &&
            Object.keys(groupedProducts).map((type) => {
              const products = groupedProducts[type];
              const gridLayout =
                productGrid.find((grid) => grid.count === products.length)
                  ?.grid || Array(products.length).fill(12);

              return (
                <div className="col-md-3 m-2" key={type}>
                  <div className="row">
                    {/* You can uncomment the heading if needed */}
                    {/* <h2 className="text-center">Type {type}</h2> */}
                    {products.map((product, index) => (
                      <div
                        key={product.id}
                        className={`col-${gridLayout[index]} p-0`}
                      >
                        <div className="border">
                          <img
                            src={BASE_URL + product.imageUrl}
                            className="card-img-top"
                            alt={product.name}
                            height={"130px"}
                            width={"100px"}
                          />
                          {/* Uncomment this section if additional product info is needed */}
                          {/* <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                  </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
