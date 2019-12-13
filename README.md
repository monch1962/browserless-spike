Start Browserless using `$ docker run -p 3000:3000 --restart always browserless/chrome`

Run

`$ node test.js`

to spin up a server, then go to

`http://localhost:8080/image` to get a rendered PNG version of http://www.example.com

---

To do:
- generate `Dockerfile` for this repo
- should be able to spin up Browserless server as container within e.g. Google Cloud Run or AWS Lambda
- in principle, should be able to store test cases under `/tests` and execute them via `/testcases/test123` endpoint
- should be able to load test cases into `/tests` via Docker volume
- should be able to pass Browserless server URL as env var when Docker container spins up

---

Browserless info at https://docs.browserless.io and https://github.com/browserless/chrome

