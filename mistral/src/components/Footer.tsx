import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-amber-100 text-black py-16 p-5px-6 md:px-20 h-[340]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        
        <div className="flex flex-col items-start space-y-4">
            <Image src="/BlackLogo.svg" alt="Logo" width={41} height={29} />

          <div className="flex space-x-2">
            
              <Image src="/appstore.svg" alt="Apple" width={120} height={40}/>
              
            
           
              <Image src="/androidstore.svg" alt="google" width={120} height={40}/>

        
          </div>
          <p className="text-sm">Mistral AI © 2025</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mt-6 md:mt-0">
          <div>
            <h4 className="text-orange-500 font-bold">Why Mistral</h4>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Our customers</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-orange-500 font-bold">Explore</h4>
            <ul className="space-y-2">
              <li>AI solutions</li>
              <li>Partners</li>
              <li>Research</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-orange-500 font-bold">Build</h4>
            <ul className="space-y-2">
              <li>La Plateforme</li>
              <li>Le Chat</li>
              <li>Try the API</li>
            </ul>
          </div>
          <div>
            <h4 className="text-orange-500 font-bold">Legal</h4>
            <ul className="space-y-2">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Data processing agreement</li>
              <li>Legal notice</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end space-y-4 mt-6 md:mt-0">
        
          <div className="flex space-x-4">
            <Image src="/twitter.webp" alt="twitter" width={38} height={38}/>
            <Image src="/linkedin.svg" alt="linkedin" width={38} height={38}/>
            <Image src="/discord.svg" alt="discord" width={38} height={38}/>

            
          </div>
        </div>
      </div>
    </footer>
  );
}
