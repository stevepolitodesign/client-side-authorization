class privatePage {
    constructor(redirectUrl = '/', message = 'You are not authorized to view this page') {
        this.redirectUrl = redirectUrl;
        this.message = message;
        this.url = window.location.href;
        this.handlePageLoad();
    }

    handlePageLoad() {
        let urls = this.getWhiteListURLs();
        if ( urls.indexOf(this.url) === -1 ) {
            alert(this.message);
            window.location =  this.redirectUrl;
        }
    }

    getWhiteListURLs() {
        return localStorage.getItem('whiteListedUrls') ? JSON.parse(localStorage.getItem('whiteListedUrls')) : [];
    }
}