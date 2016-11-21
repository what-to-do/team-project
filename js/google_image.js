function google_image(){

var url = "https://www.googleapis.com/customsearch/v1?&cx=017612769462488902851%3Auasggoghxt4&key=";
var apikey_google = 'AIzaSyCjmwysp5xUbx_hRaAsed0YNw6M3cKpc0w';
url+=apikey_google;
url += '&q=' + "zebra"
$.ajax({
	url: url,
	method: 'GET',
	dataType: 'jsonp',
}).done(function(result) {
	console.log(result);
	console.log(url);
	console.log(result.items[0].link);


	$('#main-display').empty();
	
	var img = $("<img>");

	
	img.attr({
			   "src":    "images.google.com/hosted/life/1da4bcda9a5b8e5d.html"
	}); 

	console.log(img);
	console.log(result.items[0].link);
	
	$('#main-display').append(img);
})

}

/*{
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&cref={cref?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [
      {
        "title": "Google Custom Search - zebra",
        "totalResults": "75",
        "searchTerms": "zebra",
        "count": 10,
        "startIndex": 1,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "017612769462488902851:uasggoghxt4"
      }
    ],
    "nextPage": [
      {
        "title": "Google Custom Search - zebra",
        "totalResults": "75",
        "searchTerms": "zebra",
        "count": 10,
        "startIndex": 11,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "017612769462488902851:uasggoghxt4"
      }
    ]
  },
  "context": {
    "title": "Googleimages"
  },
  "searchInformation": {
    "searchTime": 0.160956,
    "formattedSearchTime": "0.16",
    "totalResults": "75",
    "formattedTotalResults": "75"
  },
  "items": [
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/1da4bcda9a5b8e5d.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 1011 pixels (17.8 x 14.0 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 1011 pixels (17.8 x 14.0 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "KdCKKFCEPfgJ",
      "formattedUrl": "images.google.com/hosted/life/1da4bcda9a5b8e5d.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/1da4bcda9a5b8e5d.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/a6808a61c7b88aca.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 956 pixels (17.8 x 13.3 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 956 pixels (17.8 x 13.3 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "-O9HScA_y_cJ",
      "formattedUrl": "images.google.com/hosted/life/a6808a61c7b88aca.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/a6808a61c7b88aca.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/d8186f629bd443af.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 780 pixels (17.8 x 10.8 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 780 pixels (17.8 x 10.8 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "Fp6kXfH1n_cJ",
      "formattedUrl": "images.google.com/hosted/life/d8186f629bd443af.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/d8186f629bd443af.html",
      "pagemap": {
        "cse_thumbnail": [
          {
            "width": "288",
            "height": "175",
            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTH-D1Vn_3NnnajNs0mLjxpbh-P8eglTBhgVQzYJnRIF58ntEmd7YP1p9k"
          }
        ],
        "cse_image": [
          {
            "src": "http://www.gstatic.com/hostedimg/d8186f629bd443af_landing"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/424de08ac7ef1416.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 933 pixels (17.8 x 13.0 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 933 pixels (17.8 x 13.0 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "UDGUGD48iPYJ",
      "formattedUrl": "images.google.com/hosted/life/424de08ac7ef1416.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/424de08ac7ef1416.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/a431f471b612a322.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 969 pixels (17.8 x 13.5 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 969 pixels (17.8 x 13.5 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "Q0qDC6jdk-4J",
      "formattedUrl": "images.google.com/hosted/life/a431f471b612a322.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/a431f471b612a322.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/5e153b1cd9e4fd1e.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 979 pixels (17.8 x 13.6 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 979 pixels (17.8 x 13.6 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "8GsUBkteie0J",
      "formattedUrl": "images.google.com/hosted/life/5e153b1cd9e4fd1e.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/5e153b1cd9e4fd1e.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/43faa88cea7e09e0.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 953 pixels (17.8 x 13.2 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 953 pixels (17.8 x 13.2 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "j_AKmtYPZdsJ",
      "formattedUrl": "images.google.com/hosted/life/43faa88cea7e09e0.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/43faa88cea7e09e0.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/4235aad242696b41.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 911 pixels (17.8 x 12.7 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 911 pixels (17.8 x 12.7 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "zJ2nacHOqtkJ",
      "formattedUrl": "images.google.com/hosted/life/4235aad242696b41.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/4235aad242696b41.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/0904ed73c554172e.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 938 pixels (17.8 x 13.0 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 938 pixels (17.8 x 13.0 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "uaLdjqz0IdgJ",
      "formattedUrl": "images.google.com/hosted/life/0904ed73c554172e.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/0904ed73c554172e.html"
    },
    {
      "kind": "customsearch#result",
      "title": "Zoo Zebra - Hosted by Google",
      "htmlTitle": "Zoo <b>Zebra</b> - Hosted by Google",
      "link": "http://images.google.com/hosted/life/114649c0e1c61e84.html",
      "displayLink": "images.google.com",
      "snippet": "Zoo Zebra. ZOO Zebra. Size: 1280 x 948 pixels (17.8 x 13.2 inches). Related \nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only\n ...",
      "htmlSnippet": "Zoo <b>Zebra</b>. ZOO <b>Zebra</b>. Size: 1280 x 948 pixels (17.8 x 13.2 inches). Related <br>\nimages: Search LIFE Images: © Time Inc. For personal non-commercial use only<br>\n&nbsp;...",
      "cacheId": "9Et9ykSFPtMJ",
      "formattedUrl": "images.google.com/hosted/life/114649c0e1c61e84.html",
      "htmlFormattedUrl": "images.google.com/hosted/life/114649c0e1c61e84.html"
    }
  ]
}*/