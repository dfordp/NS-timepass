// This is a server component example. Adjustments might be needed based on your specific setup.

import { Button } from "@/components/ui/button";

export default function Home() {
  // Direct navigation using anchor tags in server components
  return (
    <div className="w-screen min-h-screen m-0 p-0">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center gap-4">
          <div>
            {/* Using an anchor tag for navigation */}
            <a href="/sign-in" style={{ textDecoration: 'none' }}>
              <Button>
                Signin
              </Button>
            </a>
          </div>
          <div>
            {/* Using an anchor tag for navigation */}
            <a href="/sign-up" style={{ textDecoration: 'none' }}>
              <Button>
                Signup
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}