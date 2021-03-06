class formRedirect {
    constructor(form){
        this.form = document.querySelector(form);
        this.url = this.form.action;
        this.handleSubmit();
    }

    handleSubmit() {
        if (!this.url || !this.form) { return }

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.whiteListURL(this.url);
            
            // https://www.netlify.com/docs/form-handling/#ajax-form-submissions
            var $form = $(this.form);
            $.post($form.attr("action"), $form.serialize()).then(function() {
                window.location = this.url;
            });

        });
    }

    whiteListURL(url) {
        if(!url) { return; }

        let urls = this.getWhiteListURLs();

        if ( urls.indexOf(url) === -1 ) {
            urls.push(url);
            localStorage.setItem('whiteListedUrls', JSON.stringify(urls));
        }
        
    }

    getWhiteListURLs() {
        return localStorage.getItem('whiteListedUrls') ? JSON.parse(localStorage.getItem('whiteListedUrls')) : [];
    }

}