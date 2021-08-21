const url = new URL(document.URL);

var src = 'default-config.js';
var tenantId = 'saas';
const map = {
    localhost: 'localhost',
    80: 'prod',
    3000: 'dev'
}
window.MyAppConfig = {};
var script = document.createElement('script');
// using port for example
if (url.port == 3000) {
    src = '/localhost-config.js';
    tenantId = 'tenant1_' + url.hostname;
} else if (url.port === 80 || (url.port !== 0 && !url.port)) {
    src = '/prod-config.js';
    tenantId = 'tenant2_' + url.hostname;
}
window.MyAppConfig['tenantId'] = tenantId;
script.src = src;
document.head.appendChild(script);