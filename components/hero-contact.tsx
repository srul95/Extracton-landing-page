'use client';

export default function HeroContact() {
    return (

        <section className=" bg-green-100" id={'contact'}>
        
        <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Adjust as needed
              }}
            >
              <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
        {/* Hero content */}
        <div className="pb-2 pt-2 md:pb-3 md:pt-4">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfzZSfejOh3HyFrqn--I8emfZs-yRcY2b_lt5JdWlY0KYzz8g/viewform?embedded=true"
                width="1060" height="1105">Loading…
            </iframe>
        </div>
    </div>
            </div>

        
         </section>
    );
}
