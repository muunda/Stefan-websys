Part 1:
Initial time is 350 - 400ms 
Useing an ".on" and event delegation the loadtime of the document was reduced to 200 - 220ms
This is an initail time saveings of roughly 150ms

Part 2:
1.used .on for the show all function - ~8ms saved
2.Moved JS to bottom of doc - ~5ms saved
3.moved css to top and downloaded img for background and host it locally - ~10ms saved
4.removed unecissary <style> tags - ~2ms
5.Minified JS - ~2ms

now at 180-200ms to load
