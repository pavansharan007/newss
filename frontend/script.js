async function fetchNews() {
    const res = await fetch('http://localhost:5000/api/stock-news');
    const news = await res.json();
    const container = document.getElementById('news-container');
  
    news.forEach(article => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description || ''}</p>
        <hr/>
      `;
      container.appendChild(div);
    });
  }
  
  fetchNews();