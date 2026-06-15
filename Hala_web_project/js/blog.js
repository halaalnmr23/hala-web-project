function toggleArticle(articleId) {

    let article = document.getElementById(articleId);

    if (article.style.display === "none") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}