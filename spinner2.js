let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let delay = 100;
for (const spin of spinner) {
  setTimeout(()=>{
    process.stdout.write(spin);
  }, delay);
  delay += 100;
}
