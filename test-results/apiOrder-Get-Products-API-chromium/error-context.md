# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiOrder.spec.js >> Get Products API
- Location: tests\apiOrder.spec.js:3:1

# Error details

```
Error: apiRequestContext.get: read ECONNRESET
Call log:
  - → GET https://rahulshettyacademy.com/api/ecom/product/get-all-products
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Get Products API', async ({ request }) => {
  4  | 
> 5  |     const response = await request.get(
     |                                    ^ Error: apiRequestContext.get: read ECONNRESET
  6  |         'https://rahulshettyacademy.com/api/ecom/product/get-all-products'
  7  |     );
  8  | 
  9  |     expect(response.status()).toBe(200);
  10 | 
  11 |     const body = await response.json();
  12 | 
  13 |     console.log(body);
  14 | });
```