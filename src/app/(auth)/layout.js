
import { Toaster } from "react-hot-toast";


export default function RootLayout({
  children,
}) {

  
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <div className="min-h-screen bg-slate-950 flex justify-center items-center"><Toaster position="top-right"/>
      <div className=" w-11/12 md:w-3/12 mx-auto">
      { children }
      </div>
      </div>
      
      </body>
    </html>
  );
}
