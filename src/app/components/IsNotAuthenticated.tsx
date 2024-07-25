"use client"

import { Button } from "@/components/ui/button"


const IsNotAuthenticated = () => {
  return (
    <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center gap-4">
            <div>
              <a href="/sign-in" style={{ textDecoration: 'none' }}>
                <Button>
                  Signin
                </Button>
              </a>
            </div>
            <div>
              <a href="/sign-up" style={{ textDecoration: 'none' }}>
                <Button>
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </div>
  )
}

export default IsNotAuthenticated
