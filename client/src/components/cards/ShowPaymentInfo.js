import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Mã đơn đặt hàng: {order.paymentIntent.id}</span>
      {" / "}
      <span>
      Tiền :
        {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "VND",
        })}
{"  "}
      </span>
     số lượng: {" / "}
      <span> {order.paymentIntent.currency.toUpperCase()} </span>
      {" / "}
      <span>Phương pháp: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Thanh toán: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <span>
      Dặt hàng :{" / "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
         TRẠNG THÁI: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;
