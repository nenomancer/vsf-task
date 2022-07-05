This is my solution for a frontend developer task, made with React and CSS.

I used fetch() to get 12 images from picsum and store them in an object array. The array is iterated over and split into 3 arrays, each containing the images which will be placed into the main 3 columns.

The main layout is a three column grid of equal parts. Each column has a grid layout in order to match the given design, with the middle column having the inverse row template.

I used react-router-dom to dynamically change the URL based on the ID of the clicked image. A new screen shows with the whole image in it's original aspect ration, along with a couple of buttons (only the 'back' button works for now).

The image ID, source, and author name are saved to local storage on click, in order for the browser to keep showing the same information after refreshing the page. 

