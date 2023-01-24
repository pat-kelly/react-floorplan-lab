import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = ()=>{
  return(
    <div className="kitchen">
      <div>Kitchen</div>
      <div>
        <Oven />
        <Sink />
      </div>
    </div>
  )
}

export default Kitchen