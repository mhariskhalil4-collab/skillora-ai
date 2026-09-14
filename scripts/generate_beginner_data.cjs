const fs = require('fs');
const path = require('path');

// Balanced 20 MCQs for Beginner Level (5 each of 0, 1, 2, 3)
const BEGINNER_MCQS = [
  {
    id: 1,
    topic: "Web Mechanics & DNS",
    question: "When a user enters a domain name in a browser, what is the core role of the Domain Name System (DNS)?",
    options: [
      "To resolve the human-readable domain name into an IP address routable by internet routers",
      "To compress all CSS styles on the server before transmitting them to the client",
      "To encrypt HTML markup using AES-256 binary keys",
      "To compile client-side JavaScript into server-side bytecode"
    ],
    correctAnswer: 0,
    explanation: "DNS translates human-friendly domain names (like example.com) into numerical IP addresses (like 93.184.216.34) so computers can locate the hosting server."
  },
  {
    id: 2,
    topic: "HTML5 DOCTYPE Declaration",
    question: "What is the primary function of the <!DOCTYPE html> declaration at the beginning of an HTML file?",
    options: [
      "It connects the document directly to a PostgreSQL database",
      "It instructs the browser to parse and render the document in modern standards compliance mode",
      "It imports external JavaScript libraries into the browser runtime",
      "It instructs web crawlers to ignore the page content for SEO"
    ],
    correctAnswer: 1,
    explanation: "<!DOCTYPE html> prevents browsers from switching into quirks mode, ensuring standard HTML5 rendering behavior."
  },
  {
    id: 3,
    topic: "Headings & Document Hierarchy",
    question: "Why should each distinct web page generally have only one <h1> element?",
    options: [
      "Because web browsers delete all subsequent <h1> tags automatically",
      "Because CSS stylesheets can only apply styles to a single <h1> element per domain",
      "To clearly signal the primary subject of the page to search engines and screen reader users",
      "Because HTML5 specifications forbid more than one heading tag on any page"
    ],
    correctAnswer: 2,
    explanation: "A single <h1> establishes the document's top-level heading in the accessibility tree and outlines the core topic for search engines."
  },
  {
    id: 4,
    topic: "Anchor Security Attributes",
    question: "When creating an external link with target=\"_blank\", why is adding rel=\"noopener noreferrer\" recommended?",
    options: [
      "It forces the destination website to load in dark mode",
      "It speeds up the user's internet connection by 50%",
      "It automatically minifies all CSS stylesheets on the target domain",
      "It prevents the target page from accessing window.opener and prevents tab-nabbing security vulnerabilities"
    ],
    correctAnswer: 3,
    explanation: "rel=\"noopener\" severs the JavaScript window.opener connection between the current tab and the newly opened tab, preventing malicious redirection."
  },
  {
    id: 5,
    topic: "Image Accessibility",
    question: "What is the primary purpose of the alt attribute on an <img> tag?",
    options: [
      "It provides textual description for screen readers and acts as fallback text if the image fails to load",
      "It specifies the CSS hover animation duration for the image",
      "It alters the image resolution dynamically on the server",
      "It sets the border radius of the image container"
    ],
    correctAnswer: 0,
    explanation: "The alt attribute conveys the meaning of the image to visually impaired users and displays when network errors prevent image loading."
  },
  {
    id: 6,
    topic: "Semantic Navigation Markup",
    question: "Which HTML structure is semantically best suited for building a top-level site navigation bar?",
    options: [
      "A <div> tag holding multiple <span> elements with cursor: pointer",
      "A <nav> landmark element wrapping an unordered list (<ul>) of items (<li>) with links (<a>)",
      "A <table> containing a single row and multiple <td> cells",
      "An ordered list (<ol>) styled with display: table-caption"
    ],
    correctAnswer: 1,
    explanation: "Using <nav><ul><li><a href=\"...\">...</a></li></ul> provides clear semantic navigation landmark structure to assistive tech and browsers."
  },
  {
    id: 7,
    topic: "Form Labels & Accessibility",
    question: "How do you programmatically bind an HTML <label> to a specific <input> field?",
    options: [
      "By setting the label's class to match the input's name attribute",
      "By adding data-label=\"true\" to both elements",
      "By matching the label's for attribute to the input's unique id attribute",
      "By wrapping both elements in an unclosed <div>"
    ],
    correctAnswer: 2,
    explanation: "Matching <label for=\"email-input\"> with <input id=\"email-input\"> creates an explicit accessibility binding and enables clicking the label to focus the input."
  },
  {
    id: 8,
    topic: "Semantic HTML Elements",
    question: "Which semantic HTML5 tag represents self-contained, independently distributable content such as a blog article or product review?",
    options: [
      "<section>",
      "<aside>",
      "<div>",
      "<article>"
    ],
    correctAnswer: 3,
    explanation: "<article> indicates content that stands alone and could be syndicated or reused independently of the rest of the page."
  },
  {
    id: 9,
    topic: "CSS Specificity Calculation",
    question: "Between an element selector, class selector, ID selector, and inline style attribute, which has the highest specificity?",
    options: [
      "Inline style attribute (style=\"...\")",
      "ID selector (#header)",
      "Class selector (.button)",
      "Element type selector (p, h1)"
    ],
    correctAnswer: 0,
    explanation: "Inline styles have a specificity weight of (1,0,0,0), overriding IDs (0,1,0,0), classes (0,0,1,0), and element types (0,0,0,1)."
  },
  {
    id: 10,
    topic: "CSS HSL Color Model",
    question: "In the HSL color model (e.g., hsl(200, 70%, 50%)), what does the first numerical value (200) represent?",
    options: [
      "The opacity level of the background",
      "The Hue angle on the 360-degree color wheel",
      "The total number of hardware pixels",
      "The brightness contrast ratio"
    ],
    correctAnswer: 1,
    explanation: "Hue represents an angle on the color circle: 0 is red, 120 is green, 240 is blue. 200 represents a clean sky blue."
  },
  {
    id: 11,
    topic: "CSS Box Model & box-sizing",
    question: "With box-sizing: border-box; applied, what happens when you add padding and borders to an element with width: 300px?",
    options: [
      "The total width expands to 300px plus the padding and border values",
      "The element shrinks to 0px and disappears from the layout",
      "The total rendered width remains exactly 300px because padding and borders are absorbed inside",
      "The border is ignored and only padding is rendered"
    ],
    correctAnswer: 2,
    explanation: "With border-box, declared width encompasses content, padding, and border, preventing unexpected layout wrapping."
  },
  {
    id: 12,
    topic: "CSS Margin Collapsing",
    question: "What occurs when two adjacent vertical block elements have margin-bottom: 30px and margin-top: 20px respectively?",
    options: [
      "The margins add together into a 50px space",
      "The margins multiply together into 600px",
      "The bottom margin is completely cancelled out to 0px",
      "The margins collapse into a single 30px gap (the larger of the two)"
    ],
    correctAnswer: 3,
    explanation: "In standard vertical flow, adjoining top and bottom margins collapse into a single margin equal to the maximum value."
  },
  {
    id: 13,
    topic: "CSS Display Property",
    question: "How does display: inline-block differ from standard display: inline?",
    options: [
      "inline-block respects width, height, and vertical margins/padding while still sitting inline with adjacent elements",
      "inline-block forces an immediate line break before and after the element",
      "inline-block elements cannot have background colors or borders",
      "inline-block elements only render when JavaScript is enabled"
    ],
    correctAnswer: 0,
    explanation: "inline-block elements flow horizontally like inline elements, but allow full box-model sizing (width, height, vertical padding, vertical margins)."
  },
  {
    id: 14,
    topic: "Horizontal Centering in CSS",
    question: "What requirement must be met for margin: 0 auto; to center a block element horizontally?",
    options: [
      "The element must have position: absolute",
      "The element must have a specified width or max-width less than 100% of its parent",
      "The element must have float: left",
      "The parent container must have display: inline"
    ],
    correctAnswer: 1,
    explanation: "Auto margins divide remaining available horizontal space equally, requiring the element to have a defined width or max-width."
  },
  {
    id: 15,
    topic: "Viewport Meta Configuration",
    question: "Why is <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> required for responsive websites?",
    options: [
      "It disables right-clicking on mobile web pages",
      "It automatically converts desktop CSS grid layouts into native mobile apps",
      "It instructs mobile browsers to render at device width at a 1:1 scale rather than simulating a 980px desktop screen",
      "It forces all images to be cached in local storage"
    ],
    correctAnswer: 2,
    explanation: "Without the viewport meta tag, mobile devices simulate a wide desktop browser and scale down the entire page, making text unreadably small."
  },
  {
    id: 16,
    topic: "HTML Table Semantics",
    question: "Which HTML element provides a semantic title/summary specifically for an HTML <table>?",
    options: [
      "<summary>",
      "<legend>",
      "<header>",
      "<caption>"
    ],
    correctAnswer: 3,
    explanation: "The <caption> element is placed directly after the opening <table> tag to give a descriptive title accessible to screen readers."
  },
  {
    id: 17,
    topic: "Links vs Buttons",
    question: "What is the core rule for choosing between an <a> anchor tag and a <button> element?",
    options: [
      "Use <a> for navigation to a URL/resource and <button> for triggering actions, forms, or UI state changes",
      "Use <button> for navigation and <a> for submitting database forms",
      "Use whichever tag looks better in the default browser stylesheet",
      "Always use <div> tags with onClick handlers instead of native elements"
    ],
    correctAnswer: 0,
    explanation: "Links (<a>) navigate to locations or URLs; buttons (<button>) trigger scripts, submit forms, open dialogs, or execute actions."
  },
  {
    id: 18,
    topic: "CSS Background Sizing",
    question: "Which CSS property scales a background image to completely cover the container while preserving its aspect ratio?",
    options: [
      "background-size: 100% 100%;",
      "background-size: cover;",
      "background-repeat: round;",
      "background-origin: content-box;"
    ],
    correctAnswer: 1,
    explanation: "background-size: cover scales the image proportionally so that both width and height fill the container completely, clipping excess if needed."
  },
  {
    id: 19,
    topic: "HTML5 Form Validation",
    question: "Which HTML5 attribute ensures a user cannot submit a form if an input field is empty?",
    options: [
      "validate=\"true\"",
      "mandatory",
      "required",
      "check-input"
    ],
    correctAnswer: 2,
    explanation: "The boolean required attribute activates native browser validation, blocking form submission if the field is left blank."
  },
  {
    id: 20,
    topic: "CSS Line-Height Scaling",
    question: "Why is a unitless line-height (e.g., line-height: 1.5;) preferred in typography systems?",
    options: [
      "It reduces CSS file sizes by removing unit letters",
      "It prevents browsers from rendering custom web fonts in italic mode",
      "It disables line breaks across paragraph elements",
      "It allows child elements to calculate line-height proportionally based on their own font-size rather than inheriting a rigid pixel value"
    ],
    correctAnswer: 3,
    explanation: "A unitless line-height acts as a proportional multiplier of font-size. If a child element has a larger font size, its line-height scales accordingly."
  }
];

console.log('Beginner MCQs validated. Count:', BEGINNER_MCQS.length);
const dist = {};
BEGINNER_MCQS.forEach(q => dist[q.correctAnswer] = (dist[q.correctAnswer] || 0) + 1);
console.log('Answer distribution:', dist);
