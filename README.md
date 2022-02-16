# Looking For New York - 30MFF Premiere Website

> Assignment for IM-UH 1011 Communications Lab - Spring 2020\
Last updated: Feb 2, 2022

## Project description
This project is a one-page website for the short film created in collaboration with Alex Ko, in which we reflect on our time in New York City. On my part, I expand the idea behind the short video into a concept for a movie about a young man who abandoned his old job to go live in New York City. I use the title Looking For New York (loosely inspired by the title of the novel Looking for Alaska) to reflect the vibes I usually pick up in indie movies about youth and self-discovery.

I aim for an overall mysterious and poignant cinematic vibes, and thus I choose a one-page design with white texts on dark theme, with ample use of wide angle photos of New York. The background images either fade into the background (header and footer) or have a uniform dark overlay to add to the vibes, and to improve text readability.

The unrolling synopsis text is an attempt in adding something that reflects the sense of (self-)discovery that I initially had in mind when expanding the concept of the video. You want to know what the story is about? Keep scrolling, keep looking (the content is just random ramblings unfortunately, I don’t have an actual story to tell here).

## Process
I finalized the overall theme and concept early on in the process and focused on building high fidelity wireframes. Since I already had the specific design and layout I wanted, the implementation mostly consisted of translating the wireframes into code.

### HTML layout
The first step was to create a general skeleton for the web page with all the sections I outlined in the wireframes. Of course, a lot of changes in the HTML components were made once I started to add CSS and had to move the components around and put them in different orders and hierarchies. Still, having a basic HTML page keeps the web page organized.

### CSS styling

Next, I looked into different styling choices, figuring out fonts, sizes, and other measurements like paddings and margins for different sections. It also took me some time to organize flex boxes in the whole pages.

### JavaScript interactivity

Once I had created a fully fleshed out web page with most of the components and stylings as I originally planned, I started to experiment with JavaScript, especially the content we covered in the labs, to add interactivity to the otherwise static, singular page of mine.

Unrolling synopsis: After some experiments, in the end I used a combination of measurements (offset of the text from the top of the page, current window scroll vertical position, height of viewport) to determine where the current viewport is relative to the synopsis text block. This was then used to calculate how much of the text is currently within the viewport, and what percentage of the actual text should be displayed. The characters are added or truncated based on the current scroll position, creating the effect of text rolling out as the user scrolls down the page, and text disappearing as the user scrolls up.

Hovering producers: The producers introduction part reveals new images and texts as the user hovers above the banners. This was an experiment in changing background images using JavaScript. In the end, I was not able to create a smooth transition animation using solely JavaScript, so I used a combination of changing CSS property and setting JavaScript timeout to coordinate the disappearance and appearance of different components to create an impression of transitioning.

Changing reviews: The same principle as above was used for the Reviews section, in which I originally wanted to put a carousel but in the end decided on experimenting with CSS and JavaScript to create the kind-of-carousel myself. Again, this part was a combination of CSS opacity and JavaScript timeout to mimic the fading transition.

## Reflection/Evaluation

Overall, I think that I managed to stay quite close to my original design, except for minor changes in stylings and interactive elements newly added after some experimenting. I find deciding on the concept, theme, and layout early on in the process helpful because it helps me stay focused during the implementation, and I can spend more time working with JavaScript interactivity instead of having to make plenty of changes to HTML and/or CSS. I am also glad that I managed to achieve my goal of learning to combine CSS and JavaScript to create desired effects and interactions.

## Extra

I also finished the all-films premiere web page that I made wireframes for because I previously misread the prompt. Similar to the main page for my film, that page stays quite close to the original design. I am still using the names and summaries I made up myself. To access the page, follow the [See all participating films](https://nhungoc1508.github.io/30MFF/home.html) link at the beginning of my page.
