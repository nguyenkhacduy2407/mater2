import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
   
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Tiêu đề</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label> Mô tả</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Giá bán</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Đang chuyển hàng</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Vui lòng chọn</option>
          <option value="No">Không</option>
          <option value="Yes">Có</option>
        </select>
      </div>

      <div className="form-group">
        <label>Số lượng</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Màu</label>
        <select name="color" className="form-control" onChange={handleChange}>
          <option>Vui lòng chọn</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Nhãn hiệu</label>
        <select name="brand" className="form-control" onChange={handleChange}>
          <option>Vui lòng chọn</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Loại</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
        >
          <option>Vui lòng chọn</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {showSub && (
        <div>
          <label>Danh mục phụ</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

      <br />
      <button className="btn btn-outline-info">Lưu</button>
    </form>
  );
};

export default ProductCreateForm;
