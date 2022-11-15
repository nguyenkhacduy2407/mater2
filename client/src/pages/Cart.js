import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("GIỎ HÀNG ", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("lỗi lưu giỏ hàng", err));
  };

  const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("GIỎ HÀNG ", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("lỗi lưu giỏ hàng", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
        <th scope="col">Hình ảnh</th>
          <th scope="col">Tiêu đề</th>
          <th scope="col">Giá</th>
          <th scope="col">Thương hiệu</th>
          <th scope="col">Màu sắc</th>
          <th scope="col">Đếm</th>
          <th scope="col">Vận chuyển</th>
          <th scope="col">Xóa</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>Giỏ Hàng / {cart.length} Sản phẩm</h4>

          {!cart.length ? (
            <p>
             Không có sản phẩm trong giỏ hàng. <Link to="/shop">Tiếp tục Mua sắm.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Tóm tắt theo thứ tự</h4>
          <hr />
          <p>Các sản phẩm</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = {c.price * c.count} :VND
              </p>
            </div>
          ))}
          <hr />
          Tổng cộng: <b>{getTotal()} :VND</b>
          <hr />
          {user ? (
            <>
              <button
                onClick={saveOrderToDb}
                className="btn btn-sm btn-primary mt-2"
                disabled={!cart.length}
              >
             Thanh Toán Qua Thẻ
              </button>
              <br />
              <button
                onClick={saveCashOrderToDb}
                className="btn btn-sm btn-warning mt-2"
                disabled={!cart.length}
              >
           Thanh toán tiền mặt khi giao hàng
              </button>
            </>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
              Đăng nhập để thanh toán
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
