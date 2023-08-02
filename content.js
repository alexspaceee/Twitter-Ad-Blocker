function hideTwitterAds() {
    // Find all spans with the specific class for "Ad"
    const ads = document.querySelectorAll('span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
  
    ads.forEach((ad) => {
      // Traverse up the DOM to find the parent Tweet container
      let tweet = ad;
      while (tweet && !tweet.getAttribute('data-testid')) {
        tweet = tweet.parentElement;
      }
  
      // If a parent Tweet container is found, hide it
      if (tweet && tweet.getAttribute('data-testid') === 'tweet') {
        tweet.style.display = 'none';
      }
    });
  }
  
  // Run the function regularly to catch new ads as they load
  setInterval(hideTwitterAds, 1000);
  