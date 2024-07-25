// This is a server component example. Adjustments might be needed based on your specific setup.

import { getCookies } from "@/actions/cookies";
import IsAuthenticated from "./components/IsAuthenticated";
import IsNotAuthenticated from "./components/IsNotAuthenticated";

export default async function Home() {

  const cookie = await getCookies("token");
  
  const isAuthenticaed = (cookie !== undefined) ? true : false; 

  return (
    <div className="w-screen min-h-screen m-0 p-0">
      {isAuthenticaed ? (
        <IsAuthenticated/>
      ) : (
        // Render this if the user is not authenticated
        <IsNotAuthenticated/>
      )}
    </div>
  );
}