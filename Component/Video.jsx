import world from '../assets/world.mp4'
import  './Style/video.css'

const Video = () =>{
return(
  <video
  autoPlay
  loop
  muted
  className="world"
  >
  <source src={world} type="video/mp4" />
  </video>

)

}

export default Video