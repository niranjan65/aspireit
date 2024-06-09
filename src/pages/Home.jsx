import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


function Home() {
const { user } = useSelector((state) => state.profile)
const navigate = useNavigate();

console.log(user)
  return user ? (
    <div className="h-screen w-screen flex items-center justify-center text-white text-3xl">
      Welcome - {user.firstName} {user.lastName}
    </div>
  ) : (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-white gap-8">
      <h1 className="text-3xl text-blue-500">Please Login......</h1>
      <button onClick={() => navigate("/login")} className="p-3 bg-yellow-50 text-black" >Login</button>
    </div>
  )
}

export default Home