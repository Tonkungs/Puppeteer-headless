docker run --init -it --rm --name chrome --shm-size=1024m -p 127.0.0.1:9222:9222 --cap-add=SYS_ADMIN yukinying/chrome-headless-browser




docker run --init -it --rm -p 3000:3000 browserless/chrome

// ดูเลข ws
http://localhost:3000/json/version

https://github.com/cyrus-and/chrome-remote-interface/issues/10