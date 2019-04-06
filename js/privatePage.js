class privatePage {
    constructor(redirectUrl = '/', message = 'You are not authorized to view this page') {
        this.redirectUrl = redirectUrl;
        this.message = message;
        this.path = window.location.pathname;
    }
}