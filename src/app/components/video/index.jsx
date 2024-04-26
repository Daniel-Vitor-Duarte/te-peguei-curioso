import Script from "next/script";


export default function Video(){
    return(
      <div id="vid_662b960d86ddc700080573cd" className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
      {/* Video Thumbnail */}
      <img
        id="thumb_662b960d86ddc700080573cd"
        src="https://images.converteai.net/0fb3788a-9dc3-4608-ac04-eabdf9376e0e/players/662b960d86ddc700080573cd/thumbnail.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Video Thumbnail"
      />

      {/* Backdrop Blur */}
      <div
        id="backdrop_662b960d86ddc700080573cd"
        className="absolute top-0 w-full h-full backdrop-blur-sm"
        style={{
          WebkitBackdropFilter: 'blur(5px)',
          backdropFilter: 'blur(5px)',
        }}
      ></div>

      {/* Video Player Script */}
      <Script
        id="scr_662b960d86ddc700080573cd"
        dangerouslySetInnerHTML={{
          __html: `
            var s = document.createElement("script");
            s.src = "https://scripts.converteai.net/0fb3788a-9dc3-4608-ac04-eabdf9376e0e/players/662b960d86ddc700080573cd/player.js";
            s.async = true;
            document.head.appendChild(s);
          `,
        }}
      />
    </div>
    )
}