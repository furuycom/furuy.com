---
title: "Cloudflare Workers İle Security Headers Ekleme"
date: "2021-09-17"
categories: 
  - "webmaster"
tags: 
  - "security-headers"
---

> Bu yazı uzun zamandır güncellenmemektedir!

HTTP Security Headers'ı, Cloudflare ile kullanmanız mümkün. Cloudflare'ın ücretsiz [Workers](https://workers.cloudflare.com/) planı, şu an için günde 100.000 isteğe ve 30 Worker script'ine izin vermekte. Şayet bunlar, ihtiyaçlarınızı karşılamaya yetiyor ve Cloudflare kullandığınız bir web siteye Security Headers eklemek istiyorsanız, bu küçük rehber tam da size göre.

## Bir Workers Oluşturun

Cloudflare hesabınıza giriş yapın ve işlem yapmak istediğiniz alan adını seçin ve menüden de "Workers" bölümünü seçin. Yeni bir Worker oluşturmak için "Manage Workers" butonuna tıklayın.

Açılacak bir sonraki sayfada ise "Create a Worker" butonuna tıklayın.

Script alanına, kullanmak istediğiniz scripti yazabilir veya benim şu an için kullandığım scripti yapıştırabilirsiniz:

```
addEventListener('fetch', event => {
event.respondWith(handleRequest(event.request));
})
async function handleRequest(request) {
const response = await fetch(request);
return getSecuredResponse(response);
}
const securityHeaderMap = {
"Strict-Transport-Security" : "max-age=31536000; includeSubDomains; preload",
"Content-Security-Policy" : "upgrade-insecure-requests",
"Permissions-Policy" : "geolocation=(), microphone=(), camera=(), payment=()",
"Referrer-Policy" : "strict-origin-when-cross-origin",
"X-Content-Type-Options" : "nosniff",
"X-Frame-Options" : "SAMEORIGIN",
"X-Xss-Protection" : "1; mode=block"
};
const headerDeletionList = \[
"Server",
"Public-Key-Pins",
"X-Powered-By",
"X-AspNet-Version"
\];
async function getSecuredResponse(response) {
let responseHeaders = new Headers(response.headers);
if(isResponseContentTypeNotHtml(responseHeaders)) {
return response;
}
Object.entries(securityHeaderMap).map((\[name, value\]) => responseHeaders.set(name, value));
headerDeletionList.forEach(name => responseHeaders.delete(name));
return new Response(response.body , {
status: response.status,
statusText: response.statusText,
headers: responseHeaders
});
}
function isResponseContentTypeNotHtml(headers) {
const contentType = headers.get('content-type');
return !contentType || !contentType.includes("text/html");
}
```

İşlemleri tamamladıktan sonra, "Save and Deploy" butonuna basın ve geri dönün.


"Add route" butonuna basın ve bilgileri doldurun (_https://furuy.com/\*_ veya _https://www.furuy.com/\*_ şeklinde). Worker için biraz önce oluşturduğunuz Worker'ı seçin ve kaydedin.

Sonucu görüntülemek için [SecurityHeaders.com](https://securityheaders.com/) web sitesini kullanabilirsiniz:

![SecurityHeaders.com Örnek 1](/assets/img/security-headers-ornek1.jpg)

* * *

**KAYNAK**

1. [https://developers.cloudflare.com/workers/examples/security-headers](https://developers.cloudflare.com/workers/examples/security-headers)
