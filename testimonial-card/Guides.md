# Guides

These guides help you get started on the trickier portions of the challenge and are not meant to be exhaustive. However, do let us know what other guidance you'd benefit from and we can add it in.

Welcome to GreatFrontEnd Projects! We hope that this is the beginning of your wonderful front end journey with us. If you haven't already, join our Discord channel and introduce yourself there.

The testimonial card challenge is a gentle introduction to the platform and only requires basic mastery of HTML and CSS to complete. The challenges get progressively harder and you will soon be building engaging sections of a marketing website, reusable UI components of a design system, and fully interactive pages of an e-commerce platform.

Since this is a warm up challenge, more guidance will be provided. As we move on to the more complex challenges, there will be less guidance on the fundamentals and more emphasis on topics like accessibility, performance, and code structure.

Let's start building a testimonial card!

## Relevant concepts

These CSS concepts will be useful for this challenge.

- **Box model**: Understanding padding, borders, and margins is necessary for achieving the desired layout.
- **Flex**: Flex layouts are useful for displaying the image and text side-by-side. While flex is not the only way to achieve the layout, it is the modern way of doing so.

## Recommended approach

- **Build the page layout**: Render a background color for the page. Within the page, add a horizontally-centered card that is a fixed distance of 200px from the top of the page.
- **Build the card and its contents**: Display the avatar image, name, username, and testimonial message.

## Card structure

- Build the card container first, then add the contents starting from the top.
- Use semantic HTML elements to create containers for different parts of the card. For instance, you might have one `<div>` for the card itself, another `<div>` wrapping the user avatar and name, and a `<p>` for the testimonial message.
- Use an `<img>` tag to display the avatar picture, making sure to provide alt attributes for accessibility.

## Card layout

Observe that the card has a fixed width of 340px and is a fixed distance of 200px from the top of the screen (it is not vertically centered!).

- Set a fixed width and margin-top for the card.
- The card should not have a hardcoded height value; its height should be according to the vertical space taken up by its contents. This is the behavior by default in CSS, so there are no extra steps needed.
- To horizontally center the card on the page, a simple way would be margin-left: auto; margin-right: auto or to make the card parent display: flex; justify-content: center.
- Use modern display properties like flex and grid. display: flex can be used to make the image and the words side-by-side.

## Styling the card and its contents

- When styling, _use classes_ to apply styles to specific elements as opposed to inline styles. There can be more than one testimonial card per page, using classes will allow you to apply the styles to another testimonial card instance.
- Notice that the card has a box shadow, a background color and rounded corners! _Be sure to add the necessary styling_.
- _Refer to the style guide_ for the appropriate typography values and colors to use.
- Round images can be achieved using the border-radius property – use a value of at least half the height of the image, or some really huge value like border-radius: 9999px.

## Test your card

- View your card in multiple browsers to ensure compatibility.
- Validate your HTML and CSS using online validators to ensure they follow web standards.
- Use accessibility tools to check if your card is accessible to all users, including those with disabilities.

## General tips

- _Keep it simple initially_, especially if you're just starting. You can always add more complexity later.
- _Focus on readability and organization of your code_; it helps when you need to debug or extend it.
- _Comment your code_ to remind yourself and inform others about the purpose of various code sections.
- _Practice version control with a system like Git_. This allows you to keep track of changes and revert to previous versions if something goes wrong.
- _Stay consistent with naming conventions and coding styles_. This will make your code easier to read and maintain.
