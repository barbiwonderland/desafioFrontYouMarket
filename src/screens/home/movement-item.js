import { FaArrowUp } from "react-icons/fa"
import "./movement-item.css"
function MovementItem({ type, title, amount, date }) {
  return (
    <>
      <div className="movement-wrapper">
        <div className="movement-title">
          <div className="icon-container">
            <FaArrowUp
              size={24}
              className={type == "income" ? " color-success " : "color-danger"}
            ></FaArrowUp>
          </div>
          {title}
        </div>

        <div className="movement-details">
          <div className="movement-amount">
            {type == "income" ? "+" : "-"}
            {amount}
          </div>
          <div className="movement-date">{date}</div>.
        </div>
      </div>
    </>
  )
}

export default MovementItem
