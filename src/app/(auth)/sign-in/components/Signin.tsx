"use client"

import { setCookies } from "@/actions/cookies";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

const Signin = () => {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleSubmit = async () => {
      const data = {email,password};

      const user = await axios.post('/api/signin',data);
      
      await setCookies("token",user.data.token);
      await setCookies("id",user.data.user.id)
      
      router.push('/')

  }

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 px-10 py-10 rounded-md">
          <div className="flex flex-row justify-center">
            Signin
          </div>
          <div className="mt-4">
            <div>
              Email
              <div>
                <Input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div>
              Password
              <div>
                <Input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-4">
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
