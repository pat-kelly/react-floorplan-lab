import Kitchen from "./Kitchen"
import BedRoom from "./BedRoom"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"

const FloorPlan = ()=>{
  return(
    <>
      <div className="row-one">
        <div>
          <BedRoom bedNum={1} />
          <Bath size='Full'/>
        </div>
        <LivingRoom />
        <Kitchen />
      </div>
      <div className="row-two">
        <BedRoom bedNum={2} />
        <Bath size='Half' />
        <BedRoom bedNum={3} />
      </div>
    </>
  )
}

export default FloorPlan