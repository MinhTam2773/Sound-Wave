import React from "react";

const LeftSidebar = () => {
  return (
    <aside className="relative w-[300px] min-w-[220px] max-w-full h-screen bg-[#323131] flex flex-col p-[25px] box-border">
      {/* Gradient Border */}
      {/* <div className="absolute inset-0 rounded-r-[20px] p-[0.5px]">
        <div className="absolute inset-0 rounded-r-[20px] bg-gradient-to-r from-[#9100ff] via-[#ffc300] to-transparent" />
        <div className="absolute inset-0 rounded-r-[20px] bg-[#323131]">
          <div className="absolute inset-0 rounded-r-[20px] bg-gradient-to-r from-[#9100ff] via-[#ffc300] to-transparent opacity-50" />
        </div>
      </div> */}

      <div className="relative z-10 flex flex-col flex-1 gap-[201px] h-full">
        <div className="flex flex-col gap-[25px] w-full flex-1">
          {/* Header */}
          <div className="flex items-center gap-[8px] w-[198px] h-[40px]">
            {/* Logo */}
            <div className="relative w-[40px] h-[40px] rounded-[5px] bg-linear-to-r from-[#9000ff] via-[#b23caf] to-[#ffc300] overflow-visible">
              <img
                className="w-full h-full rounded-[5px] object-cover "
                src="https://s3-alpha-sig.figma.com/img/5d7e/5589/d8d80bda398b944f3b24c2a013e61c36?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lY1KKlaqXdyVNIozOyMbVDIKcq74g~UIo1OC4os3o3tkcOjWQnvKS3HyB7q~N7nlkpT4wHn0Q78L0k1E3Kmg-45iW3vuAoluhdskIvVHSJLkV4YYQnh477ED0ywvmQHRFr5iSgxCYerpXfE0GfLCwA75bv7o50ve0lmN5Gi6QWQaOinqWquS2m3tR4Bev~9YAlUXGYwWDkCU1Ur3RqS8i6EjghQjOoZYXbzwOTGUtNq2z5pWx0rNADhtxocHkNKC~PkEJzichZqi~QvtNA3jvKpclfGAYdIZJLqGbz5eegQv8FzkK61mxZ7gUOOqp5ObRZO0VVcnIfnJYjWarGwwSQ__"
                alt="Logo"
              />
            </div>
            <span className="text-[24px] font-bold bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc300] bg-clip-text text-transparent ml-[10px] whitespace-nowrap">
              Sound Wave
            </span>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col gap-[25px] w-full">
            <div className="flex items-center gap-[10px] w-full h-[29px]">
              <span className="text-white text-[22px] font-semibold">
                Navigation
              </span>
            </div>

            <nav className="flex flex-col gap-[15px] w-full">
              {/* Home */}
              <div
                className="relative flex items-center gap-2.5 w-full min-h-[45px] rounded-[10px] p-0 cursor-pointer 
                            bg-linear-to-r overflow-visible"
              >
                <div className="absolute inset-0 rounded-[10px] p-[1px]">
                  <div className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#9100ff] via-[#b23caf] to-[#ffc300]" />
                  <div className="absolute inset-[1px] rounded-[10px] " />
                </div>
                <img
                  className="w-[25px] h-[25px] rounded-[5px] object-cover  ml-[15px] relative z-10"
                  src="https://s3-alpha-sig.figma.com/img/3781/2ff9/4832bd5a0da410ddf27a5f787cd7b265?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fsVK5ZgXj6xTs2CJFctpy7WyCnIPiW9CTt7SzAoK6toEOCi7-8WjFSK3zaRqiIvsnyO2UiUPp8EJPJCGWsVybcrXBgvBfsEBtT7uxkEl20SWIFw3xh2yb3PKGEe9KMBgdfO6s5GY-lei9Lvdy0nVEFuGtd6RxVzsffx9HoVUsHQfHZZryIY~q7ctnEzCWfyqsGXS9x7vc4b46bag2aZUAk9uJ9ceTtxnvxeYiVJIDJ0Axu8G0ecUA8EkGSw2ZYYNIzBU5jo9ipi0diK4h7TMb-82J7KOPMWLlZ-CkWk36AWSxUpBz4YPQvbEAlv4jxlJvIn-bvpCIo2kmS3SIWwYGg__"
                  alt="Home"
                />
                <span className="text-white text-[18px] font-semibold relative z-10">
                  Home
                </span>
              </div>

              {/* Music */}
              <div className="flex items-center gap-[10px] w-full min-h-[45px] rounded-[10px] p-0 cursor-pointer hover:bg-white/10 transition-colors pl-[15px]">
                <img
                  className="w-[25px] h-[25px] rounded-[5px] object-cover "
                  src="https://s3-alpha-sig.figma.com/img/a270/e67b/8ff8e175062c35ebb1afe8fa17608ac6?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kD6A8bhuI~x7eG~AcT3qgJxRJTAFNf4WTaeUVQxnL-MDEAw6FAsD9Vao1pmdxJ~Orb20LMXq1q6G4qV5ehozIJ4IjN8Lh-rDZw2eBYqwsggkTuQpxMeMsPDYnJlbrh6ZTgtVWs9F9Y4ibvdqBkFWmK8F6DjC1rzSyiMravWbG7OZWSjSZHhK34hISv9O378-53oiSCRfJFOOr0qDF8y97oUEhdQ9ePVehFJjRsc3xazIT6QyD5n3ZEOD1klXSsqyMR25DMEqhxDjqOUhpAFRak0HIg2tnW4-8N0OFy1tjdZMaRWW~Hj4GiLa0cTEiQyrUEqB4F6B3xWK0OwZ0E1~GQ__"
                  alt="Music"
                />
                <span className="text-white text-[18px] font-medium">
                  Music
                </span>
              </div>

              {/* Library */}
              <div className="flex items-center gap-[10px] w-full min-h-[45px] rounded-[10px] p-0 cursor-pointer hover:bg-white/10 transition-colors pl-[15px]">
                <img
                  className="w-[25px] h-[25px] rounded-[5px] object-cover "
                  src="https://s3-alpha-sig.figma.com/img/c77d/497c/2c9cfdd17bea94d25bc44822c54dae17?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZYt6AaJDZSKToc5R1fqZ03LLHZylTDK9UspBcCQu1R~pq-Pckj5shv5Wo~JGd9DBlKtgErM~UMrvKLhL2KLofx-EKsqcLRHPfzT0VHMXv0bkCuZ21uG2CL15aBKp6EUv0GqZ2IXmezg6btlKgjbpoDmOJ5Yu0EfLiiW0ROn15FIqaQyZpwF3GdrMdkY6K~AxuEblX6YMG~aQhvjHDgmOdrhYdIMMx2BxNiCha0cBAW2hUvyY~UaBvG9BmhTqCig-vnSJKoFOybAJWKxT0-G87DIIJMrSScwYPcdDCEs1jmrX4cnTYLWnV3PowFfAwjMBK1AM55Kg-sAvYCmJe-glhw__"
                  alt="Library"
                />
                <span className="text-white text-[18px] font-medium">
                  Library
                </span>
              </div>

              {/* Explore */}
              <div className="flex items-center gap-[10px] w-full min-h-[45px] rounded-[10px] p-0 cursor-pointer hover:bg-white/10 transition-colors pl-[15px]">
                <img
                  className="w-[25px] h-[25px] rounded-[5px] object-cover "
                  src="https://s3-alpha-sig.figma.com/img/f5e1/3e28/704728717d45c05f00379811461dfd90?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gJL0vzsnupB7XiaRHIZ0TFDqpuCFBFtxW6zuGfID~A91aB-6wRuYP2Wfucfz~hOESKu6A90wAvCTqOA~OSpaPCKqPgVSqNJKilCXob5xB7XNWS1weAQLZR-gqxIgBpR-l4Z30vWP7tH8rmX~QeAR4syIxUtA6G58~heMw9OeG8lZZvPkdzwLU1C5kd30Fy0e2sQkM6bgx2vvV9sdoUAUI9o9tyBQdnPgIIL3-YfB0wzWYBPPYXwoSkdaWxSFzF6rQwVR3fza~3PPuC8280IUjM0LSv9VPZ49cByBbVlQC5y0E1JM42g8fdwUdy-WTXWmo-4oV-OQT-xz6oejAKByHw__"
                  alt="Explore"
                />
                <span className="text-white text-[18px] font-medium">
                  Explore
                </span>
              </div>

              {/* Notifications */}
              <div className="flex items-center gap-[10px] w-full min-h-[45px] rounded-[10px] p-0 cursor-pointer hover:bg-white/10 transition-colors pl-[15px] pt-[11px] pb-[11px]">
                <img
                  className="w-[25px] h-[25px] rounded-[5px] object-cover "
                  src="https://s3-alpha-sig.figma.com/img/c3e5/cf55/13643780bcf6b633a155d71853465e43?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=II~9NcrC~gUOTnPYuhJgMQd7UYpOAG13MeFxTD6kmwfBtRU0F5IgtfH50rVPeXbfIuP1LrpIwvDjjlY4VoOFgseBrSpUuxAVhIdeIgos6XBfgqois1cjYb27dUGDgeUlr5saUE4tEyp0Iv2kAoAM2qgEKTXD8py~TrNRb~~XX8LcnV6AeMg5bbo6-JeIB6ChNY3OIG4GBiAac3CHO4guVkT~iQTG6t1yBvdVSeZNpmqRqM3ayfDIFgBdBsCAS36oSapgl442yKFrefL4gkeLw1XO0WEUg9h~wIMZZ3WtZaWe0LdTpBzzKS7k6O91WXDjDVI6HburVZMRQV1abBDFQA__"
                  alt="Notifications"
                />
                <span className="text-white text-[18px] font-medium">
                  Notifications
                </span>
              </div>

              {/* Settings */}
              <div className="flex items-center gap-[10px] w-full min-h-[45px] rounded-[10px] p-0 cursor-pointer hover:bg-white/10 transition-colors pl-[15px]">
                <img
                  className="w-[25px] h-[25px] rounded-[5px] object-cover "
                  src="https://s3-alpha-sig.figma.com/img/273d/e481/0ba854c453fbeadd28223017e0d6885d?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GONiZGVz~0oGXn2qOrTl9tDny9fQTIZPvxkXElelvV2-DOUaKfLsDk~cmYiqnGYWJYvHf67lG5sAjvd7Js387aC8pDZ9pgPVR6LJZRNVHjTaJpD542XgNcEqrYzRp2QKegn75JlZNRbw1szIZVxj~5pMwSCYf~pLPs1T0dCcm3I0uIdx~fRYTKbydnAvfehd6md-gJc5FijfNmk1nMfGL0wU8iV1gCKUYQccSVzMXbQA3PFYmeadJRtqH93uSZlAjBlZ-OtPOSd~d5ayd2q0RYfNxZuczsUBkjYaVjXQRKRC7CVB9XyubDqBtsSfnPLPW7O7ykT8KwHjEz-Zb3nafA__"
                  alt="Settings"
                />
                <span className="text-white text-[18px] font-medium">
                  Settings
                </span>
              </div>

              {/* Search */}
              <div className="flex items-center gap-[10px] w-full min-h-[45px] rounded-[10px] p-0 cursor-pointer hover:bg-white/10 transition-colors pl-[15px]">
                <img
                  className="w-[25px] h-[25px] rounded-[5px] object-cover "
                  src="https://s3-alpha-sig.figma.com/img/0e3e/a1f4/af7bdc0353252fa8af7de9366406fd82?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J2MpCOkYf~HI7pEbxPwoWtlD7id9oh1QtasR6CywBbj8kyyyE1md4T4WfZ5GVI2lorOpkmskC9jx7Czb50AA2hokwFT5cnew~8jd8~3ibJz1UEUvNsoQFIrrQP~6eyEnMJzwN5BXHa~m1f~rN80~UTBaZc8OO3OyqdHQw5KNH8mAy2sj36iFPLKu1J2~H9Xj85hzBfx5OKVEGuCThnDMy0ty8GvsvmEBZhu7S3PfpMsvsV06k1tsSp5iM96WOl7wN2iT-zvHdaRBqkR2wIqcrG1lUh-tg5YBcBWE1AsvgZa6aGR96ucXZdj~feo73q4KkVEmhnTF-8BV0QmXuKufRw__"
                  alt="Search"
                />
                <span className="text-white text-[18px] font-medium">
                  Search
                </span>
              </div>
            </nav>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-[16px] w-[146px] h-[41px] mt-auto">
          <div className="w-[40px] h-[40px] rounded-full bg-white" />
          <div className="flex flex-col justify-center h-[41px] gap-0">
            <span className="text-white text-[18px] font-semibold mb-[2px]">
              Username
            </span>
            <span className="text-white text-[15px] font-normal opacity-70">
              @name
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
