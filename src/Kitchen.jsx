import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = ()=>{
  return(
    <div className="kitchen">
      <div>
        <Oven />
        <Sink />
      </div>
      <div className=" kitchen-text center-text">Kitchen</div>
    </div>
  )
}

export default Kitchen