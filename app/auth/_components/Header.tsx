import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full min-w-[320px] h-[83px] bg-[#cfcfcf] flex items-center justify-between px-[90px] gap-2
    max-[1200px]:px-10 max-[900px]:px-5 max-[600px]:flex-col max-[600px]:h-auto max-[600px]:py-3 max-[600px]:gap-3">
      
      {/* Brand */}
      <div className="flex items-center gap-2 h-10">
        {/* Logo gradient border */}
        <div className="relative w-10 h-10 rounded-md flex items-center justify-center
          bg-gradient-to-r from-[#9100ff] to-[#ffc400]
          [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
          [mask-composite:exclude] p-0"
        >
          {/* Logo inner container */}
          <div className="w-full h-full rounded-md bg-linear-to-r from-[#9000ff] via-[#b23caf] to-[#ffc300] overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-cover rounded-md"
              draggable={false}
            />
          </div>
        </div>

        {/* Brand Title */}
        <span className="font-bold text-[24px] leading-tight tracking-[-0.4px] whitespace-nowrap 
          bg-linear-to-r from-[#9000ff] via-[#b23caf] to-[#ffc300] bg-clip-text text-transparent 
          max-[1200px]:text-[20px] max-[900px]:text-[18px]">
          Sound Wave
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-0 h-full w-auto max-[600px]:w-full max-[600px]:justify-between">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            aria-label={`Nav Item ${n}`}
            className="w-[100px] h-[83px] flex items-center justify-center cursor-pointer bg-transparent border-none outline-none 
            transition-all active:bg-black/5 focus:bg-black/5
            max-[1200px]:w-[80px] max-[900px]:w-[60px] max-[600px]:w-12 max-[600px]:h-12"
          />
        ))}
      </nav>
    </header>
  );
}
