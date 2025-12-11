export default function LandingPage() {
  return (
    <main className="w-full h-screen overflow-y-scroll bg-[#232323] flex flex-col items-center p-0">
      <div className="w-[709px] max-w-full flex flex-col gap-[20px] mx-auto p-0">
        {/* Header */}
        <div className="flex flex-row items-center h-[54px] w-full gap-[10px] bg-none border-none p-0">
          <div className="text-[2rem] font-bold text-white h-[54px] flex items-center tracking-tight ml-0">
            Home
          </div>
        </div>

        {/* Upload Modal */}
        <div className="relative bg-[#323232] rounded-[10px] border-[0.5px] border-[#776f6f] w-full p-[25px_16px_10px_16px] flex flex-col gap-[10px] min-h-[127px] overflow-hidden">
          <div className="absolute inset-0 rounded-[10px] p-[1px]">
            <div className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
            <div className="absolute inset-[1px] rounded-[10px] bg-[#323232]" />
          </div>

          <div className="relative z-10 flex flex-row items-start gap-[25px] w-full">
            <div className="w-[47px] h-[47px] rounded-full bg-white flex-shrink-0" />

            <div className="flex flex-col gap-[10px] w-[calc(100%-47px-25px)]">
              <div className="relative flex flex-row items-center bg-none rounded-[5px] border-[0.5px] border-[#776f6f] p-0 h-[47px] min-h-[47px] w-full">
                <div className="absolute inset-0 rounded-[5px] p-[1px]">
                  <div className="absolute inset-0 rounded-[5px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
                  <div className="absolute inset-[1px] rounded-[5px] bg-[#323232]" />
                </div>
                <span className="text-[#776f6f] text-[1.1rem] font-normal tracking-tight bg-none border-none outline-none w-full h-[24px] flex items-center p-0 z-10 pl-[25px]">
                  What's on your mind?
                </span>
              </div>

              <div className="flex flex-row items-center justify-between w-full gap-[97px]">
                <div className="flex flex-row items-center gap-[25px]">
                  <img
                    className="w-[25px] h-[35px] bg-[#333] rounded-[4px] object-cover"
                    src="https://s3-alpha-sig.figma.com/img/356e/0ccf/322966846a25c5362ed24e842af29722?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KixWVqTsieLm95kzAd2CDsDEm6ks4WcB~Wq3zuwk98vei4~Pfy~1~7TNu6xowf~ilzSVLenYxPrCJJvqNnjJ02CRVIHfryYXGhv~FH8F0upuwMm3nqgsMMxVdwDVyBlvoHxHmV1fF40jLNin37jgto9cdh61muG~N6HZMUKquN7I5LHrIt2pR8Wfc-fC8qaLO3LSUVCdIzcudlxjgPRYyql519FxWjdEGfljCqtOKVF2Yl9Jo7JSwgjhpeTEOV2Zh5~uv77USb9QaNBYXN-TYsgNV5JgQ1gwU8IMufMvKaC7VnH8hkIow6wPIAM15NRzEtXUQZWUmtdHBM2RE67m0Q__"
                    alt="Picture"
                  />
                  <img
                    className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                    src="https://s3-alpha-sig.figma.com/img/a270/e67b/8ff8e175062c35ebb1afe8fa17608ac6?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kD6A8bhuI~x7eG~AcT3qgJxRJTAFNf4WTaeUVQxnL-MDEAw6FAsD9Vao1pmdxJ~Orb20LMXq1q6G4qV5ehozIJ4IjN8Lh-rDZw2eBYqwsggkTuQpxMeMsPDYnJlbrh6ZTgtVWs9F9Y4ibvdqBkFWmK8F6DjC1rzSyiMravWbG7OZWSjSZHhK34hISv9O378-53oiSCRfJFOOr0qDF8y97oUEhdQ9ePVehFJjRsc3xazIT6QyD5n3ZEOD1klXSsqyMR25DMEqhxDjqOUhpAFRak0HIg2tnW4-8N0OFy1tjdZMaRWW~Hj4GiLa0cTEiQyrUEqB4F6B3xWK0OwZ0E1~GQ__"
                    alt="Music"
                  />
                </div>

                <button className="bg-gradient-to-r from-[#9000ff] to-[#ffc300] rounded-[5px] border-none text-white text-[1.1rem] font-semibold w-[90px] h-[33px] flex items-center justify-center tracking-tight cursor-pointer relative z-10">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Post */}
        <div className="relative rounded-[15px] border-[0.5px] border-[#776f6f] p-[14px_15px] flex flex-col gap-[15px] w-full overflow-hidden">
          <div className="absolute inset-0 rounded-[15px] p-[1px] z-0">
            <div className="absolute inset-0 rounded-[15px]" />
            <div className="absolute inset-[1px] rounded-[15px] bg-[#323232]" />
          </div>

          <div className="relative z-10 flex flex-row items-center justify-between w-full gap-[112px]">
            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[40px] h-[40px] rounded-full bg-white flex-shrink-0" />
              <div className="flex flex-col gap-0 justify-center">
                <div className="text-[1.1rem] font-semibold text-white tracking-tight mb-0">
                  Username
                </div>
                <div className="text-[0.95rem] text-white opacity-70 tracking-tight">
                  @username . 2h ago
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[10px]">
              <img
                className="w-[30px] h-[30px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/57dd/ec23/9735d954f6da513085769ac5faa32bf7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mh1wPjE~6lackhngCa8CCDH~sP9lsbpAmhz3slPbG8ZZdRBgr7RmdP8rvuauYk9QnWrgJWzPesxRH35BoZIcp9KpoYwKVWh84hTu70PmfUFmK6I1aWaLtAAy~m1ThX6hr8jUfDBmPyBX-xycy8mwceVYjDHwZNGW-~3JcYUBatbk0zVxPU~mofmJFpq8msruNlT0E1oEu5n0z1kX97NaWibLmyqA4C3F9oLoRmYpp51nvMEdqcsEAP8YbwI1viq3-iMLqnRi1JsfhfsAIHpAKsSvOuRvKxzsNq0ejCFNv6H69YCUe6yxmkLhVL5oTrQHKVnnz3sYp3nk-pgSxRmyxA__"
                alt="Bookmark"
              />
              <img
                className="w-[20px] h-[20px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/6a6c/c36b/c469fa7ca0c281a271d6eed3a15190f7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sOUT4sHlSLbFunuQ~imCKtdC0BAAEsX~8pcwVy~Kxu-H6aJ4UtZTmdbUo5rHNujakzDmhOLEt07QgL458Cu1YAVURCMPqBHkJ-7KjsvoB-WtH4QzMwbEtz32etGnx1ewg-k48Qb~5byzmgQNsVNEjxr2xWny2LVGQlCRfa5rgHCy0cg36eGzzKQUTpQ6XDaiYa7YbBkyQq3GwD66GWZBBijC44kZyB-B3VPBJbTgIegXmiFJTPR0Q9aJ6tgKZkyB1DhYAFxIakeaFziNOyjs8uwujxFPl6VJ-H8y8snvNFBbSkDttGXhGMPMmHglkS9GGn9C33LR~tHjZsA9W~Q4IQ__"
                alt="Ellipsis"
              />
            </div>
          </div>

          <div className="relative z-10 text-[1.1rem] font-semibold text-white tracking-tight mb-0">
            No cap
          </div>

          <div className="flex flex-row gap-[8px] w-full mt-0 z-10">
            <div className="w-[337px] h-[140px] bg-white rounded-[10px] object-cover" />
            <div className="w-[159px] h-[140px] bg-white rounded-[10px] object-cover" />
            <div className="w-[159px] h-[140px] bg-white rounded-[10px] object-cover" />
          </div>

          <div className="flex flex-col gap-[6px] w-full p-0 z-10">
            <div className="w-full h-[2px] bg-white rounded-[1px] opacity-20" />
            <div className="flex flex-row items-center gap-[50px] w-full justify-between">
              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/abfc/c0ec/de860555a66ef4127523aa4de840878a?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCHZrhSdCI0~YQkDpobkmy4hIZYShur3sPxglHO5Z6TKMbYvwGXkII2VQWTrDqxY-88mwFngfiKCVYNNvAVH8I1cOQQxGa~o5qAPhdAGyDi8NIs708Ui1uiULPpoz0M4WvLEnL8ACa0Gz0HvtbAOU877UtEA~OG6Jyl-lFydOKgpYY913yb1fB-8n1hFP~3dg87gerFHaV0Mcb0bioWt9kQBZNhpkrPWMUrJ15tjB75TUm-2QEEiHSObjMh9K-dDniDC4gqUHtP6KCyuPXhHyncR28gLtZK~U88Qx9cS~sx8oB8dkEI0SGlUzLo55Qcy5ICHqCsywKcDFlw-BTR2PQ__"
                  alt="Favorite"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  142
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/952e/f8e0/21e2beb614e0fb68cee46c3bf3d50329?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QkzV1h0OBS1gVcapJHXUVRdrm5ny8v3uQy5uHLv69ZuCjfiOcU4IbT3KnFGcHqs1CRrFOHijgp2K6qZcsER0DCDC7gD4YBFWu9isSu0Cz5Scd2FS4JFjiLWCTn95cppJPx6ysxaE-gDONZRzJ6MuJW~K5Q1DtbOYxiUkYP67EveaL5qp8XFF2ynkvq-AflUkYsgmJuma1NPMvhds-UuvmiGbEquXagdcPa91AUqH4l~o2bW4WH2ahRel7jx9o5shd01RGP5j8d8fWdBpGVCLlwiglkK7y5NMNzx31e-dPksr4XwOywN0DF2CkPMGdY73F0H6N0eYzVx8KIr6o7xMLw__"
                  alt="Speech Bubble"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  23
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/9026/812c/bd2b3b3a5f324a89b7550b86c1c6d7f0?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nh9WKMapaEhpp3LCTpIfhg0BRG~tgBnN1YKfFxm9s4JMVYBq2k3SloCnogg-mfhzAEbCH5YsnKWddUUKEufse03SN3Dpg5cqzNdQHR86KDkGpXjWJYFs8jVAniuMAyimALe0yn2ktNpxYuv254ybISfiDFcQcJpQVhb8hPfDF4TY2TB-32VIjhqGWGS5xDROatpYEdn7JjylLTz1Cj-jxbjzWrG~EC7lrc86z38lftpdpymRw9E~J3mcrieYkdRz4YgrTGlQD4aoZ4Zp~3FHDkIdQ5Wm8-~SO6G6rU-AhSi0Vzhvc2subGCWfkL7UBVz9nuEQKCgxk2ME0zKNMoM3w__"
                  alt="Share"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  8
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/cff4/3912/54e96f7bcc585b68673b85060e3bb283?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RZolRxix7nYxFNqxWusdp68HW~MidgQhq7QKKwwfQIPnx5uV6WItRDyXx4r2T5jxT1uSxGQJFphhoUlvSS8kH8crJQB357hqeWUYnfVUjakyUlOiYlNAyW-Pblz-aE2NYmiiAnf9WBcRTHaCSK5uCVEfmic82DXmtFVJFKCnxOl3fnO4COTMcyRRUMASr2n6Lz86eLmJytaAC73SlTaufZysyQIDyazZjzUDLrWXspf8rBX8yvMV6iytZ-Qacbr56HTzOlXXq-o67bFm99z53Le3TCuYggiN0xQiiOHSNzGEzuXWuMc2a91kwgv5V4qDmWy44lGBfEPF5yYR~vJLTQ__"
                  alt="Retweet"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  34
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Post */}
        <div className="relative bg-[#323232] rounded-[15px] border-[0.5px] border-[#776f6f] p-[14px_15px] flex flex-col gap-[15px] w-full overflow-hidden">
          <div className="absolute inset-0 rounded-[15px] p-[1px]">
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
            <div className="absolute inset-[1px] rounded-[15px] bg-[#323232]" />
          </div>

          <div className="relative z-10 flex flex-row items-center justify-between w-full gap-[112px]">
            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[40px] h-[40px] rounded-full bg-white flex-shrink-0" />
              <div className="flex flex-col gap-0 justify-center">
                <div className="text-[1.1rem] font-semibold text-white tracking-tight mb-0">
                  Username
                </div>
                <div className="text-[0.95rem] text-white opacity-70 tracking-tight">
                  @username . 2h ago
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[10px]">
              <img
                className="w-[30px] h-[30px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/57dd/ec23/9735d954f6da513085769ac5faa32bf7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mh1wPjE~6lackhngCa8CCDH~sP9lsbpAmhz3slPbG8ZZdRBgr7RmdP8rvuauYk9QnWrgJWzPesxRH35BoZIcp9KpoYwKVWh84hTu70PmfUFmK6I1aWaLtAAy~m1ThX6hr8jUfDBmPyBX-xycy8mwceVYjDHwZNGW-~3JcYUBatbk0zVxPU~mofmJFpq8msruNlT0E1oEu5n0z1kX97NaWibLmyqA4C3F9oLoRmYpp51nvMEdqcsEAP8YbwI1viq3-iMLqnRi1JsfhfsAIHpAKsSvOuRvKxzsNq0ejCFNv6H69YCUe6yxmkLhVL5oTrQHKVnnz3sYp3nk-pgSxRmyxA__"
                alt="Bookmark"
              />
              <img
                className="w-[20px] h-[20px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/6a6c/c36b/c469fa7ca0c281a271d6eed3a15190f7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sOUT4sHlSLbFunuQ~imCKtdC0BAAEsX~8pcwVy~Kxu-H6aJ4UtZTmdbUo5rHNujakzDmhOLEt07QgL458Cu1YAVURCMPqBHkJ-7KjsvoB-WtH4QzMwbEtz32etGnx1ewg-k48Qb~5byzmgQNsVNEjxr2xWny2LVGQlCRfa5rgHCy0cg36eGzzKQUTpQ6XDaiYa7YbBkyQq3GwD66GWZBBijC44kZyB-B3VPBJbTgIegXmiFJTPR0Q9aJ6tgKZkyB1DhYAFxIakeaFziNOyjs8uwujxFPl6VJ-H8y8snvNFBbSkDttGXhGMPMmHglkS9GGn9C33LR~tHjZsA9W~Q4IQ__"
                alt="Ellipsis"
              />
            </div>
          </div>

          <div className="relative z-10 text-[1.05rem] text-white tracking-tight leading-relaxed font-normal m-0 p-0">
            With October here, it won't be long until the cold and snow return.
            Lincoln Riddle spoke with our lon... more
          </div>

          <div className="flex flex-col gap-[6px] w-full p-0">
            <div className="w-full h-[2px] bg-white rounded-[1px] opacity-20" />
            <div className="flex flex-row items-center gap-[50px] w-full justify-between">
              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/abfc/c0ec/de860555a66ef4127523aa4de840878a?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCHZrhSdCI0~YQkDpobkmy4hIZYShur3sPxglHO5Z6TKMbYvwGXkII2VQWTrDqxY-88mwFngfiKCVYNNvAVH8I1cOQQxGa~o5qAPhdAGyDi8NIs708Ui1uiULPpoz0M4WvLEnL8ACa0Gz0HvtbAOU877UtEA~OG6Jyl-lFydOKgpYY913yb1fB-8n1hFP~3dg87gerFHaV0Mcb0bioWt9kQBZNhpkrPWMUrJ15tjB75TUm-2QEEiHSObjMh9K-dDniDC4gqUHtP6KCyuPXhHyncR28gLtZK~U88Qx9cS~sx8oB8dkEI0SGlUzLo55Qcy5ICHqCsywKcDFlw-BTR2PQ__"
                  alt="Favorite"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  142
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/952e/f8e0/21e2beb614e0fb68cee46c3bf3d50329?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QkzV1h0OBS1gVcapJHXUVRdrm5ny8v3uQy5uHLv69ZuCjfiOcU4IbT3KnFGcHqs1CRrFOHijgp2K6qZcsER0DCDC7gD4YBFWu9isSu0Cz5Scd2FS4JFjiLWCTn95cppJPx6ysxaE-gDONZRzJ6MuJW~K5Q1DtbOYxiUkYP67EveaL5qp8XFF2ynkvq-AflUkYsgmJuma1NPMvhds-UuvmiGbEquXagdcPa91AUqH4l~o2bW4WH2ahRel7jx9o5shd01RGP5j8d8fWdBpGVCLlwiglkK7y5NMNzx31e-dPksr4XwOywN0DF2CkPMGdY73F0H6N0eYzVx8KIr6o7xMLw__"
                  alt="Speech Bubble"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  23
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/9026/812c/bd2b3b3a5f324a89b7550b86c1c6d7f0?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nh9WKMapaEhpp3LCTpIfhg0BRG~tgBnN1YKfFxm9s4JMVYBq2k3SloCnogg-mfhzAEbCH5YsnKWddUUKEufse03SN3Dpg5cqzNdQHR86KDkGpXjWJYFs8jVAniuMAyimALe0yn2ktNpxYuv254ybISfiDFcQcJpQVhb8hPfDF4TY2TB-32VIjhqGWGS5xDROatpYEdn7JjylLTz1Cj-jxbjzWrG~EC7lrc86z38lftpdpymRw9E~J3mcrieYkdRz4YgrTGlQD4aoZ4Zp~3FHDkIdQ5Wm8-~SO6G6rU-AhSi0Vzhvc2subGCWfkL7UBVz9nuEQKCgxk2ME0zKNMoM3w__"
                  alt="Share"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  8
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/cff4/3912/54e96f7bcc585b68673b85060e3bb283?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RZolRxix7nYxFNqxWusdp68HW~MidgQhq7QKKwwfQIPnx5uV6WItRDyXx4r2T5jxT1uSxGQJFphhoUlvSS8kH8crJQB357hqeWUYnfVUjakyUlOiYlNAyW-Pblz-aE2NYmiiAnf9WBcRTHaCSK5uCVEfmic82DXmtFVJFKCnxOl3fnO4COTMcyRRUMASr2n6Lz86eLmJytaAC73SlTaufZysyQIDyazZjzUDLrWXspf8rBX8yvMV6iytZ-Qacbr56HTzOlXXq-o67bFm99z53Le3TCuYggiN0xQiiOHSNzGEzuXWuMc2a91kwgv5V4qDmWy44lGBfEPF5yYR~vJLTQ__"
                  alt="Retweet"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  34
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Music Post */}
        <div className="relative bg-[#323232] rounded-[15px] border-[0.5px] border-[#776f6f] p-[14px_15px] flex flex-col gap-[15px] w-full overflow-hidden">
          <div className="absolute inset-0 rounded-[15px] p-[1px]">
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
            <div className="absolute inset-[1px] rounded-[15px] bg-[#323232]" />
          </div>

          <div className="relative z-10 flex flex-row items-center justify-between w-full gap-[112px]">
            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[40px] h-[40px] rounded-full bg-white flex-shrink-0" />
              <div className="flex flex-col gap-0 justify-center">
                <div className="text-[1.1rem] font-semibold text-white tracking-tight mb-0">
                  Username
                </div>
                <div className="text-[0.95rem] text-white opacity-70 tracking-tight">
                  @username . 2h ago
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[10px]">
              <img
                className="w-[30px] h-[30px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/57dd/ec23/9735d954f6da513085769ac5faa32bf7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mh1wPjE~6lackhngCa8CCDH~sP9lsbpAmhz3slPbG8ZZdRBgr7RmdP8rvuauYk9QnWrgJWzPesxRH35BoZIcp9KpoYwKVWh84hTu70PmfUFmK6I1aWaLtAAy~m1ThX6hr8jUfDBmPyBX-xycy8mwceVYjDHwZNGW-~3JcYUBatbk0zVxPU~mofmJFpq8msruNlT0E1oEu5n0z1kX97NaWibLmyqA4C3F9oLoRmYpp51nvMEdqcsEAP8YbwI1viq3-iMLqnRi1JsfhfsAIHpAKsSvOuRvKxzsNq0ejCFNv6H69YCUe6yxmkLhVL5oTrQHKVnnz3sYp3nk-pgSxRmyxA__"
                alt="Bookmark"
              />
              <img
                className="w-[20px] h-[20px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/6a6c/c36b/c469fa7ca0c281a271d6eed3a15190f7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sOUT4sHlSLbFunuQ~imCKtdC0BAAEsX~8pcwVy~Kxu-H6aJ4UtZTmdbUo5rHNujakzDmhOLEt07QgL458Cu1YAVURCMPqBHkJ-7KjsvoB-WtH4QzMwbEtz32etGnx1ewg-k48Qb~5byzmgQNsVNEjxr2xWny2LVGQlCRfa5rgHCy0cg36eGzzKQUTpQ6XDaiYa7YbBkyQq3GwD66GWZBBijC44kZyB-B3VPBJbTgIegXmiFJTPR0Q9aJ6tgKZkyB1DhYAFxIakeaFziNOyjs8uwujxFPl6VJ-H8y8snvNFBbSkDttGXhGMPMmHglkS9GGn9C33LR~tHjZsA9W~Q4IQ__"
                alt="Ellipsis"
              />
            </div>
          </div>

          <div className="relative z-10 text-[1.05rem] text-white tracking-tight leading-relaxed font-normal m-0 p-0">
            Omg this new song is amazing!!!
          </div>

          <div className="flex flex-row items-center gap-[10px] w-full mt-0">
            <div className="relative w-[75px] h-[75px] rounded-[5px] bg-gradient-to-r from-[#9000ff] to-[#ffc300] border-[0.5px] border-[#776f6f] flex items-center justify-center overflow-hidden p-[10px_15px]">
              <div className="absolute inset-0 rounded-[5px] p-[1px]">
                <div className="absolute inset-0 rounded-[5px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
                <div className="absolute inset-[1px] rounded-[5px] bg-[#323232]" />
              </div>
              <img
                className="w-[50px] h-[50px] bg-[#333] rounded-[4px] object-cover z-10"
                src="https://s3-alpha-sig.figma.com/img/a270/e67b/8ff8e175062c35ebb1afe8fa17608ac6?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kD6A8bhuI~x7eG~AcT3qgJxRJTAFNf4WTaeUVQxnL-MDEAw6FAsD9Vao1pmdxJ~Orb20LMXq1q6G4qV5ehozIJ4IjN8Lh-rDZw2eBYqwsggkTuQpxMeMsPDYnJlbrh6ZTgtVWs9F9Y4ibvdqBkFWmK8F6DjC1rzSyiMravWbG7OZWSjSZHhK34hISv9O378-53oiSCRfJFOOr0qDF8y97oUEhdQ9ePVehFJjRsc3xazIT6QyD5n3ZEOD1klXSsqyMR25DMEqhxDjqOUhpAFRak0HIg2tnW4-8N0OFy1tjdZMaRWW~Hj4GiLa0cTEiQyrUEqB4F6B3xWK0OwZ0E1~GQ__"
                alt="Music"
              />
            </div>
            <div className="text-[1.1rem] text-white tracking-tight font-semibold ml-[10px] flex-1 min-w-0">
              Random Song Name
            </div>
          </div>

          <div className="flex flex-col gap-[6px] w-full p-0">
            <div className="w-full h-[2px] bg-white rounded-[1px] opacity-20" />
            <div className="flex flex-row items-center gap-[50px] w-full justify-between">
              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/abfc/c0ec/de860555a66ef4127523aa4de840878a?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCHZrhSdCI0~YQkDpobkmy4hIZYShur3sPxglHO5Z6TKMbYvwGXkII2VQWTrDqxY-88mwFngfiKCVYNNvAVH8I1cOQQxGa~o5qAPhdAGyDi8NIs708Ui1uiULPpoz0M4WvLEnL8ACa0Gz0HvtbAOU877UtEA~OG6Jyl-lFydOKgpYY913yb1fB-8n1hFP~3dg87gerFHaV0Mcb0bioWt9kQBZNhpkrPWMUrJ15tjB75TUm-2QEEiHSObjMh9K-dDniDC4gqUHtP6KCyuPXhHyncR28gLtZK~U88Qx9cS~sx8oB8dkEI0SGlUzLo55Qcy5ICHqCsywKcDFlw-BTR2PQ__"
                  alt="Favorite"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  142
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/952e/f8e0/21e2beb614e0fb68cee46c3bf3d50329?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QkzV1h0OBS1gVcapJHXUVRdrm5ny8v3uQy5uHLv69ZuCjfiOcU4IbT3KnFGcHqs1CRrFOHijgp2K6qZcsER0DCDC7gD4YBFWu9isSu0Cz5Scd2FS4JFjiLWCTn95cppJPx6ysxaE-gDONZRzJ6MuJW~K5Q1DtbOYxiUkYP67EveaL5qp8XFF2ynkvq-AflUkYsgmJuma1NPMvhds-UuvmiGbEquXagdcPa91AUqH4l~o2bW4WH2ahRel7jx9o5shd01RGP5j8d8fWdBpGVCLlwiglkK7y5NMNzx31e-dPksr4XwOywN0DF2CkPMGdY73F0H6N0eYzVx8KIr6o7xMLw__"
                  alt="Speech Bubble"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  23
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/9026/812c/bd2b3b3a5f324a89b7550b86c1c6d7f0?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nh9WKMapaEhpp3LCTpIfhg0BRG~tgBnN1YKfFxm9s4JMVYBq2k3SloCnogg-mfhzAEbCH5YsnKWddUUKEufse03SN3Dpg5cqzNdQHR86KDkGpXjWJYFs8jVAniuMAyimALe0yn2ktNpxYuv254ybISfiDFcQcJpQVhb8hPfDF4TY2TB-32VIjhqGWGS5xDROatpYEdn7JjylLTz1Cj-jxbjzWrG~EC7lrc86z38lftpdpymRw9E~J3mcrieYkdRz4YgrTGlQD4aoZ4Zp~3FHDkIdQ5Wm8-~SO6G6rU-AhSi0Vzhvc2subGCWfkL7UBVz9nuEQKCgxk2ME0zKNMoM3w__"
                  alt="Share"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  8
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/cff4/3912/54e96f7bcc585b68673b85060e3bb283?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RZolRxix7nYxFNqxWusdp68HW~MidgQhq7QKKwwfQIPnx5uV6WItRDyXx4r2T5jxT1uSxGQJFphhoUlvSS8kH8crJQB357hqeWUYnfVUjakyUlOiYlNAyW-Pblz-aE2NYmiiAnf9WBcRTHaCSK5uCVEfmic82DXmtFVJFKCnxOl3fnO4COTMcyRRUMASr2n6Lz86eLmJytaAC73SlTaufZysyQIDyazZjzUDLrWXspf8rBX8yvMV6iytZ-Qacbr56HTzOlXXq-o67bFm99z53Le3TCuYggiN0xQiiOHSNzGEzuXWuMc2a91kwgv5V4qDmWy44lGBfEPF5yYR~vJLTQ__"
                  alt="Retweet"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  34
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Post */}
        <div className="relative bg-[#323131] rounded-[15px] border-[0.5px] border-[#776f6f] p-[14px_15px] flex flex-col gap-[15px] w-full overflow-hidden">
          <div className="absolute inset-0 rounded-[15px] p-[1px]">
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
            <div className="absolute inset-[1px] rounded-[15px] bg-[#323131]" />
          </div>

          <div className="relative z-10 flex flex-row items-center justify-between w-full gap-[112px]">
            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[40px] h-[40px] rounded-full bg-white flex-shrink-0" />
              <div className="flex flex-col gap-0 justify-center">
                <div className="text-[1.1rem] font-semibold text-white tracking-tight mb-0">
                  Username
                </div>
                <div className="text-[0.95rem] text-white opacity-70 tracking-tight">
                  @username . 2h ago
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[10px]">
              <img
                className="w-[30px] h-[30px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/57dd/ec23/9735d954f6da513085769ac5faa32bf7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mh1wPjE~6lackhngCa8CCDH~sP9lsbpAmhz3slPbG8ZZdRBgr7RmdP8rvuauYk9QnWrgJWzPesxRH35BoZIcp9KpoYwKVWh84hTu70PmfUFmK6I1aWaLtAAy~m1ThX6hr8jUfDBmPyBX-xycy8mwceVYjDHwZNGW-~3JcYUBatbk0zVxPU~mofmJFpq8msruNlT0E1oEu5n0z1kX97NaWibLmyqA4C3F9oLoRmYpp51nvMEdqcsEAP8YbwI1viq3-iMLqnRi1JsfhfsAIHpAKsSvOuRvKxzsNq0ejCFNv6H69YCUe6yxmkLhVL5oTrQHKVnnz3sYp3nk-pgSxRmyxA__"
                alt="Bookmark"
              />
              <img
                className="w-[20px] h-[20px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/6a6c/c36b/c469fa7ca0c281a271d6eed3a15190f7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sOUT4sHlSLbFunuQ~imCKtdC0BAAEsX~8pcwVy~Kxu-H6aJ4UtZTmdbUo5rHNujakzDmhOLEt07QgL458Cu1YAVURCMPqBHkJ-7KjsvoB-WtH4QzMwbEtz32etGnx1ewg-k48Qb~5byzmgQNsVNEjxr2xWny2LVGQlCRfa5rgHCy0cg36eGzzKQUTpQ6XDaiYa7YbBkyQq3GwD66GWZBBijC44kZyB-B3VPBJbTgIegXmiFJTPR0Q9aJ6tgKZkyB1DhYAFxIakeaFziNOyjs8uwujxFPl6VJ-H8y8snvNFBbSkDttGXhGMPMmHglkS9GGn9C33LR~tHjZsA9W~Q4IQ__"
                alt="Ellipsis"
              />
            </div>
          </div>

          <div className="relative z-10 text-[1.05rem] text-white tracking-tight leading-relaxed font-normal m-0 p-0">
            Guys this is lit listen to this song!
          </div>

          <div className="flex flex-row gap-0 w-full mt-0 mb-0">
            <img
              className="w-[100px] h-[100px] bg-[#333] rounded-[8px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/084a/5090/0facf1fdf383ce413ce57941745b44ce?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GQL15cLZCyMjTdWHfh0SeZVP9Xm4ZgHJoqE8oVRZdAtEyU9HPqkuJ2PsfOY6J02RdNog9M2-q9Ot6jlDKi-EWgNQPT1SysV36iYDqA0XC3TIcZM1bp6R0wSNufkjORdHYrFXxXwUrYHNuM7tkB91GqeI~i-nUHI11pbJkeW95bqleTk5T25Ssri5VIMSvO6PcaQYUJFsWtKLtdaVqFD9lIuEb6Z4HeNzawNM-QvhVOl3npnkTa5yPQAzFzkcvZoRj0ZQEvKIZOwcZk~eZezFajRj7kXYNBrmIZncXD3t-WOMdSzNYvAABwUteTkT8dZAWKZlPVAgY85BVrwWQERafA__"
              alt="Audio Wave"
            />
            <img
              className="w-[100px] h-[100px] bg-[#333] rounded-[8px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/084a/5090/0facf1fdf383ce413ce57941745b44ce?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GQL15cLZCyMjTdWHfh0SeZVP9Xm4ZgHJoqE8oVRZdAtEyU9HPqkuJ2PsfOY6J02RdNog9M2-q9Ot6jlDKi-EWgNQPT1SysV36iYDqA0XC3TIcZM1bp6R0wSNufkjORdHYrFXxXwUrYHNuM7tkB91GqeI~i-nUHI11pbJkeW95bqleTk5T25Ssri5VIMSvO6PcaQYUJFsWtKLtdaVqFD9lIuEb6Z4HeNzawNM-QvhVOl3npnkTa5yPQAzFzkcvZoRj0ZQEvKIZOwcZk~eZezFajRj7kXYNBrmIZncXD3t-WOMdSzNYvAABwUteTkT8dZAWKZlPVAgY85BVrwWQERafA__"
              alt="Audio Wave"
            />
            <img
              className="w-[100px] h-[100px] bg-[#333] rounded-[8px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/0023/0e3e/607ed8870effad5315694b03d08335bf?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=drLSZFVBgi3R2DxCmi-s1jNVWRKsGKQR-F5LeiL~8FmMEHXbTVsIqHCUCAZbqNbjweDkObWcwyUS2wb0pwtLRXxmlQv0Z3auA9aZ5Iipb~HtlyUJZ8-qsE9dw~IAxMBC-uTEOTsKKlrg2DUUI0erih4Xrr~csPq-K4vA0wfyUfqhqFxTpSfc0~8j-6Ur-byK1hED4ABZ8VwspeEy1qqljkCiwayRsy11ornO6rdMvYuKLPc4o49GfTXXLtbeSipdqUCORFyCAFuHj-oxNX6rMTX0ibh2PdliiRDo860Cs7hBfUVdbhsn9g0gV0wnS0DTB1OoU~QNippJ78sG7FxviA__"
              alt="Audio Wave"
            />
            <img
              className="w-[100px] h-[100px] bg-[#333] rounded-[8px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/1c36/67a2/34691c75209979c770de64ab2ab6cb21?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ROCY0JWfI1xlp~hq2uXe5WyVOp7vX-B6GeyAIK8wbtElV4KWJwJf9ztqJ3KvRVngXq~7QZKuDhbOebokkqiQV7Rqy7DweY2E9JMinbMHs4znnBK91NBLTJTL3Fmjnsc7Ear6eKf4a4NDVY04Im2CXe~sjObSaoQU6Nv1mXaPudI5ZiQ~YROeUKczADNCh3oHthAOY-SaVancnGAxmEyXuDNGMbzPMomq~lIRA94COFblnjbwyZ8bkLcNX3Ld~1J~Z8kbVvz2tkqkS5oII8V7R5JSpPcA-hGVtT63BZpt-~NOKRsN8Oo5GcP6ZvfuJngC4t1AYATPbha5ZxZKg7vryA__"
              alt="Audio Wave"
            />
            <img
              className="w-[100px] h-[100px] bg-[#333] rounded-[8px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/1c36/67a2/34691c75209979c770de64ab2ab6cb21?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ROCY0JWfI1xlp~hq2uXe5WyVOp7vX-B6GeyAIK8wbtElV4KWJwJf9ztqJ3KvRVngXq~7QZKuDhbOebokkqiQV7Rqy7DweY2E9JMinbMHs4znnBK91NBLTJTL3Fmjnsc7Ear6eKf4a4NDVY04Im2CXe~sjObSaoQU6Nv1mXaPudI5ZiQ~YROeUKczADNCh3oHthAOY-SaVancnGAxmEyXuDNGMbzPMomq~lIRA94COFblnjbwyZ8bkLcNX3Ld~1J~Z8kbVvz2tkqkS5oII8V7R5JSpPcA-hGVtT63BZpt-~NOKRsN8Oo5GcP6ZvfuJngC4t1AYATPbha5ZxZKg7vryA__"
              alt="Audio Wave"
            />
            <img
              className="w-[100px] h-[100px] bg-[#333] rounded-[8px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/1c36/67a2/34691c75209979c770de64ab2ab6cb21?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ROCY0JWfI1xlp~hq2uXe5WyVOp7vX-B6GeyAIK8wbtElV4KWJwJf9ztqJ3KvRVngXq~7QZKuDhbOebokkqiQV7Rqy7DweY2E9JMinbMHs4znnBK91NBLTJTL3Fmjnsc7Ear6eKf4a4NDVY04Im2CXe~sjObSaoQU6Nv1mXaPudI5ZiQ~YROeUKczADNCh3oHthAOY-SaVancnGAxmEyXuDNGMbzPMomq~lIRA94COFblnjbwyZ8bkLcNX3Ld~1J~Z8kbVvz2tkqkS5oII8V7R5JSpPcA-hGVtT63BZpt-~NOKRsN8Oo5GcP6ZvfuJngC4t1AYATPbha5ZxZKg7vryA__"
              alt="Audio Wave"
            />
          </div>

          <div className="flex flex-row items-center gap-[50px] w-[275px] mt-0 mb-0">
            <img
              className="w-[50px] h-[50px] bg-[#333] rounded-full object-cover transform rotate-180"
              src="https://s3-alpha-sig.figma.com/img/52c1/b71a/c5657103c050173c48e28bc928710c8e?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UzmG8m~xsg7fVxCMlOPUCbbQSo2vstu~WMzuXtHKo~EMT7rN4w4XqpAjv8DZTtKjGbh-78g3FLPNhYkoVMa~rjfJCtH2HOlqzUnmmF1yi-aSfp6oArWSQKLyvdi2AvmgkBu0Az-4AJiNiqeX6xz0HyE4FEeDMMLxE-PeVYhOCxoOqdJL-sPlHx2CpxtYxFY0ccKuq6ekMPuTPKVRTMcIvgwJzgsmXlJzQWviP-T1Z2OAPiiJPzHJOG472m~jLoqPmCPhtMw47Wwk2NTQQ3tHGEG68cwHPqL7afFnRMLGt8P2SjieEZb6yvRIv8wkMnr0hj1FwARaqP2RTbT8Vm2OJQ__"
              alt="End"
            />
            <img
              className="w-[75px] h-[75px] bg-[#333] rounded-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/17ca/adb0/1b311e870e5577814dd2e65467e4a7b9?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jcOIFEmkdQOpIr-27kiXniKslnqMcwLb6ksuhbf3Fx4nDpuMyhlcT4EZX3JC1xEX5YO~D-oVqQK-N6C0ViIpM~5P03fica9ix-qpC7UHwGsNXUqFYnIju0Q9631IldB9DIJCZb6LVzPrsRmEglL1BIQukv6abZifH0Q9Rhe-m4fg2Uq-FpsprUNbEpIwp-PDouinqYGngjVf6sX2Ca9W5xLapcL4P9iP8kXeC9rbcN-Fs-6d3ISPAuALA0oKkoSHdpZ5Isak-4RT3a~zsHjqZBaOWLkWO9PbrJ5yIIC0G-HuAIcGN4S7aE6kQ2EErKRb2J58aHhQ1QroicJkxlXmUg__"
              alt="Play"
            />
            <img
              className="w-[50px] h-[50px] bg-[#333] rounded-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/52c1/b71a/c5657103c050173c48e28bc928710c8e?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UzmG8m~xsg7fVxCMlOPUCbbQSo2vstu~WMzuXtHKo~EMT7rN4w4XqpAjv8DZTtKjGbh-78g3FLPNhYkoVMa~rjfJCtH2HOlqzUnmmF1yi-aSfp6oArWSQKLyvdi2AvmgkBu0Az-4AJiNiqeX6xz0HyE4FEeDMMLxE-PeVYhOCxoOqdJL-sPlHx2CpxtYxFY0ccKuq6ekMPuTPKVRTMcIvgwJzgsmXlJzQWviP-T1Z2OAPiiJPzHJOG472m~jLoqPmCPhtMw47Wwk2NTQQ3tHGEG68cwHPqL7afFnRMLGt8P2SjieEZb6yvRIv8wkMnr0hj1FwARaqP2RTbT8Vm2OJQ__"
              alt="End"
            />
          </div>

          <div className="flex flex-col gap-[6px] w-full p-0">
            <div className="w-full h-[2px] bg-white rounded-[1px] opacity-20" />
            <div className="flex flex-row items-center gap-[50px] w-full justify-between">
              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/abfc/c0ec/de860555a66ef4127523aa4de840878a?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCHZrhSdCI0~YQkDpobkmy4hIZYShur3sPxglHO5Z6TKMbYvwGXkII2VQWTrDqxY-88mwFngfiKCVYNNvAVH8I1cOQQxGa~o5qAPhdAGyDi8NIs708Ui1uiULPpoz0M4WvLEnL8ACa0Gz0HvtbAOU877UtEA~OG6Jyl-lFydOKgpYY913yb1fB-8n1hFP~3dg87gerFHaV0Mcb0bioWt9kQBZNhpkrPWMUrJ15tjB75TUm-2QEEiHSObjMh9K-dDniDC4gqUHtP6KCyuPXhHyncR28gLtZK~U88Qx9cS~sx8oB8dkEI0SGlUzLo55Qcy5ICHqCsywKcDFlw-BTR2PQ__"
                  alt="Favorite"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  142
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/952e/f8e0/21e2beb614e0fb68cee46c3bf3d50329?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QkzV1h0OBS1gVcapJHXUVRdrm5ny8v3uQy5uHLv69ZuCjfiOcU4IbT3KnFGcHqs1CRrFOHijgp2K6qZcsER0DCDC7gD4YBFWu9isSu0Cz5Scd2FS4JFjiLWCTn95cppJPx6ysxaE-gDONZRzJ6MuJW~K5Q1DtbOYxiUkYP67EveaL5qp8XFF2ynkvq-AflUkYsgmJuma1NPMvhds-UuvmiGbEquXagdcPa91AUqH4l~o2bW4WH2ahRel7jx9o5shd01RGP5j8d8fWdBpGVCLlwiglkK7y5NMNzx31e-dPksr4XwOywN0DF2CkPMGdY73F0H6N0eYzVx8KIr6o7xMLw__"
                  alt="Speech Bubble"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  23
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/9026/812c/bd2b3b3a5f324a89b7550b86c1c6d7f0?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nh9WKMapaEhpp3LCTpIfhg0BRG~tgBnN1YKfFxm9s4JMVYBq2k3SloCnogg-mfhzAEbCH5YsnKWddUUKEufse03SN3Dpg5cqzNdQHR86KDkGpXjWJYFs8jVAniuMAyimALe0yn2ktNpxYuv254ybISfiDFcQcJpQVhb8hPfDF4TY2TB-32VIjhqGWGS5xDROatpYEdn7JjylLTz1Cj-jxbjzWrG~EC7lrc86z38lftpdpymRw9E~J3mcrieYkdRz4YgrTGlQD4aoZ4Zp~3FHDkIdQ5Wm8-~SO6G6rU-AhSi0Vzhvc2subGCWfkL7UBVz9nuEQKCgxk2ME0zKNMoM3w__"
                  alt="Share"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  8
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/cff4/3912/54e96f7bcc585b68673b85060e3bb283?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RZolRxix7nYxFNqxWusdp68HW~MidgQhq7QKKwwfQIPnx5uV6WItRDyXx4r2T5jxT1uSxGQJFphhoUlvSS8kH8crJQB357hqeWUYnfVUjakyUlOiYlNAyW-Pblz-aE2NYmiiAnf9WBcRTHaCSK5uCVEfmic82DXmtFVJFKCnxOl3fnO4COTMcyRRUMASr2n6Lz86eLmJytaAC73SlTaufZysyQIDyazZjzUDLrWXspf8rBX8yvMV6iytZ-Qacbr56HTzOlXXq-o67bFm99z53Le3TCuYggiN0xQiiOHSNzGEzuXWuMc2a91kwgv5V4qDmWy44lGBfEPF5yYR~vJLTQ__"
                  alt="Retweet"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  34
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Shared Post */}
        <div className="relative bg-[#323232] rounded-[15px] border-[0.5px] border-[#776f6f] p-[14px_25px] flex flex-col gap-[15px] w-full overflow-hidden">
          <div className="absolute inset-0 rounded-[15px] p-[1px]">
            <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
            <div className="absolute inset-[1px] rounded-[15px] bg-[#323232]" />
          </div>

          <div className="relative z-10 flex flex-row items-center justify-between w-full gap-[112px]">
            <div className="flex flex-row items-center gap-[15px]">
              <div className="w-[40px] h-[40px] rounded-full bg-white flex-shrink-0" />
              <div className="flex flex-col gap-0 justify-center">
                <div className="text-[1.1rem] font-semibold text-white tracking-tight mb-0">
                  Username
                </div>
                <div className="text-[0.95rem] text-white opacity-70 tracking-tight">
                  @username . 2h ago
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[10px]">
              <img
                className="w-[30px] h-[30px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/57dd/ec23/9735d954f6da513085769ac5faa32bf7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mh1wPjE~6lackhngCa8CCDH~sP9lsbpAmhz3slPbG8ZZdRBgr7RmdP8rvuauYk9QnWrgJWzPesxRH35BoZIcp9KpoYwKVWh84hTu70PmfUFmK6I1aWaLtAAy~m1ThX6hr8jUfDBmPyBX-xycy8mwceVYjDHwZNGW-~3JcYUBatbk0zVxPU~mofmJFpq8msruNlT0E1oEu5n0z1kX97NaWibLmyqA4C3F9oLoRmYpp51nvMEdqcsEAP8YbwI1viq3-iMLqnRi1JsfhfsAIHpAKsSvOuRvKxzsNq0ejCFNv6H69YCUe6yxmkLhVL5oTrQHKVnnz3sYp3nk-pgSxRmyxA__"
                alt="Bookmark"
              />
              <img
                className="w-[20px] h-[20px] bg-[#333] rounded-[4px] object-cover"
                src="https://s3-alpha-sig.figma.com/img/6a6c/c36b/c469fa7ca0c281a271d6eed3a15190f7?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sOUT4sHlSLbFunuQ~imCKtdC0BAAEsX~8pcwVy~Kxu-H6aJ4UtZTmdbUo5rHNujakzDmhOLEt07QgL458Cu1YAVURCMPqBHkJ-7KjsvoB-WtH4QzMwbEtz32etGnx1ewg-k48Qb~5byzmgQNsVNEjxr2xWny2LVGQlCRfa5rgHCy0cg36eGzzKQUTpQ6XDaiYa7YbBkyQq3GwD66GWZBBijC44kZyB-B3VPBJbTgIegXmiFJTPR0Q9aJ6tgKZkyB1DhYAFxIakeaFziNOyjs8uwujxFPl6VJ-H8y8snvNFBbSkDttGXhGMPMmHglkS9GGn9C33LR~tHjZsA9W~Q4IQ__"
                alt="Ellipsis"
              />
            </div>
          </div>

          <div className="relative z-10 text-[1.05rem] text-white tracking-tight leading-relaxed font-normal m-0 p-0 w-[659px]">
            This is so true I cant wait see and hear more...
          </div>

          <div className="relative bg-[#323232] rounded-[15px] border-[0.5px] border-[#776f6f] p-0 m-0 w-[659px] max-w-full overflow-hidden">
            <div className="absolute inset-0 rounded-[15px] p-[1px]">
              <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-[#9000ff] to-[#ffc300]" />
              <div className="absolute inset-[1px] rounded-[15px] bg-[#323232]" />
            </div>

            <div className="relative z-10 p-0">
              <div className="flex flex-col gap-0">
                <div className="flex flex-row items-center gap-[10px] mb-[10px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-white" />
                  <div>
                    <div className="text-[1.1rem] font-semibold text-white tracking-tight">
                      Username
                    </div>
                    <div className="text-[0.95rem] text-white opacity-70 tracking-tight">
                      @username . 2h ago
                    </div>
                  </div>
                </div>
                <div className="text-[1.1rem] font-semibold text-white tracking-tight mb-0">
                  No cap
                </div>
                <div className="flex flex-row gap-[8px]">
                  <div className="w-[204px] h-[140px] bg-white rounded-[10px]" />
                  <div className="w-[159px] h-[140px] bg-white rounded-[10px]" />
                  <div className="w-[159px] h-[140px] bg-white rounded-[10px]" />
                  <div className="w-[159px] h-[140px] bg-white rounded-[10px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[6px] w-full p-0">
            <div className="w-full h-[2px] bg-white rounded-[1px] opacity-20" />
            <div className="flex flex-row items-center gap-[50px] w-full justify-between">
              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/abfc/c0ec/de860555a66ef4127523aa4de840878a?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCHZrhSdCI0~YQkDpobkmy4hIZYShur3sPxglHO5Z6TKMbYvwGXkII2VQWTrDqxY-88mwFngfiKCVYNNvAVH8I1cOQQxGa~o5qAPhdAGyDi8NIs708Ui1uiULPpoz0M4WvLEnL8ACa0Gz0HvtbAOU877UtEA~OG6Jyl-lFydOKgpYY913yb1fB-8n1hFP~3dg87gerFHaV0Mcb0bioWt9kQBZNhpkrPWMUrJ15tjB75TUm-2QEEiHSObjMh9K-dDniDC4gqUHtP6KCyuPXhHyncR28gLtZK~U88Qx9cS~sx8oB8dkEI0SGlUzLo55Qcy5ICHqCsywKcDFlw-BTR2PQ__"
                  alt="Favorite"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  142
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/952e/f8e0/21e2beb614e0fb68cee46c3bf3d50329?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QkzV1h0OBS1gVcapJHXUVRdrm5ny8v3uQy5uHLv69ZuCjfiOcU4IbT3KnFGcHqs1CRrFOHijgp2K6qZcsER0DCDC7gD4YBFWu9isSu0Cz5Scd2FS4JFjiLWCTn95cppJPx6ysxaE-gDONZRzJ6MuJW~K5Q1DtbOYxiUkYP67EveaL5qp8XFF2ynkvq-AflUkYsgmJuma1NPMvhds-UuvmiGbEquXagdcPa91AUqH4l~o2bW4WH2ahRel7jx9o5shd01RGP5j8d8fWdBpGVCLlwiglkK7y5NMNzx31e-dPksr4XwOywN0DF2CkPMGdY73F0H6N0eYzVx8KIr6o7xMLw__"
                  alt="Speech Bubble"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  23
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/9026/812c/bd2b3b3a5f324a89b7550b86c1c6d7f0?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nh9WKMapaEhpp3LCTpIfhg0BRG~tgBnN1YKfFxm9s4JMVYBq2k3SloCnogg-mfhzAEbCH5YsnKWddUUKEufse03SN3Dpg5cqzNdQHR86KDkGpXjWJYFs8jVAniuMAyimALe0yn2ktNpxYuv254ybISfiDFcQcJpQVhb8hPfDF4TY2TB-32VIjhqGWGS5xDROatpYEdn7JjylLTz1Cj-jxbjzWrG~EC7lrc86z38lftpdpymRw9E~J3mcrieYkdRz4YgrTGlQD4aoZ4Zp~3FHDkIdQ5Wm8-~SO6G6rU-AhSi0Vzhvc2subGCWfkL7UBVz9nuEQKCgxk2ME0zKNMoM3w__"
                  alt="Share"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  8
                </span>
              </div>

              <div className="flex flex-row items-center gap-[10px] flex-1 min-w-0">
                <img
                  className="w-[25px] h-[25px] bg-[#333] rounded-[4px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/cff4/3912/54e96f7bcc585b68673b85060e3bb283?Expires=1766361600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RZolRxix7nYxFNqxWusdp68HW~MidgQhq7QKKwwfQIPnx5uV6WItRDyXx4r2T5jxT1uSxGQJFphhoUlvSS8kH8crJQB357hqeWUYnfVUjakyUlOiYlNAyW-Pblz-aE2NYmiiAnf9WBcRTHaCSK5uCVEfmic82DXmtFVJFKCnxOl3fnO4COTMcyRRUMASr2n6Lz86eLmJytaAC73SlTaufZysyQIDyazZjzUDLrWXspf8rBX8yvMV6iytZ-Qacbr56HTzOlXXq-o67bFm99z53Le3TCuYggiN0xQiiOHSNzGEzuXWuMc2a91kwgv5V4qDmWy44lGBfEPF5yYR~vJLTQ__"
                  alt="Retweet"
                />
                <span className="text-[1rem] text-white tracking-tight font-medium">
                  34
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
