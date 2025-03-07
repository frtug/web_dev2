import { useState } from "react";

export default function Url() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!url) {
      return;
    }
    // const d = {
    //     url: url 
    //   };
    try {
      const data = await fetch("http://localhost:3000/api/url-short", { 
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({url:url})
       });
       console.log(url)
       const result = await data.json()
       console.log(result)
      setShortUrl(result.short);
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div  >
      <h1  >🔗 URL Shortener</h1>
      
      <div  >
        <input
          type="text"
          placeholder="Enter your long URL"
           
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleShorten}  >
          Shorten
        </button>
      </div>

      {shortUrl && (
        <div  >
          {shortUrl}
          <button onClick={copyToClipboard}  >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}