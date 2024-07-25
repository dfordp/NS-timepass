"use client"

import { deleteCookies } from "@/actions/cookies";
import { Button } from "@/components/ui/button"


const IsAuthenticated = () => {

      const handleLogout = async()=>{
        await deleteCookies("token");
        await deleteCookies("id");
      }

  return (
    <div className="flex flex-col items-center">
          <Button onClick={handleLogout}>
            Sign Out
          </Button>
    </div>
  )
}

export default IsAuthenticated
