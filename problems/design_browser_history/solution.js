/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.page = {
        url: homepage,
        back: null,
        next: null,
    };
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.page.next = {
        url,
        back: this.page,
        next: null
    }
    this.page = this.page.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.page.back && steps){
        this.page = this.page.back;
        steps--;
    }
    return this.page.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (this.page.next && steps) {
        this.page = this.page.next;
        steps--;
    }
    
    return this.page.url;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */