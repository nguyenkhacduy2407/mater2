import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
        Sản phẩm
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
        Các sản phẩm
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
        Loại
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
        Danh mục phụ
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
        Phiếu mua hàng
        </Link>
      </li>

      {/*<li className="nav-item">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
</li>*/}
    </ul>
  </nav>
);

export default AdminNav;
