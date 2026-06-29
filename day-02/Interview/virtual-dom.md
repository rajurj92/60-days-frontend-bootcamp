What is Virtual DOM?
ans: The Virtual DOM is a lightweight, in-memory copy of the actual Document Object Model (DOM).

How does React update the UI?
ans: The Virtual DOM in React helps update the user interface efficiently by tracking changes in a lightweight copy of the real DOM. React compares changes in the Virtual DOM before updating the real DOM. Only the modified parts of the UI are re-rendered, improving performance.

Why is Virtual DOM faster?
ans: The Virtual DOM is faster because it minimizes expensive browser operations. Instead of directly updating the heavy real DOM, it updates an in-memory copy, uses a smart "diffing" algorithm to figure out exactly what changed, and updates only the necessary parts in a single, batched operation.

Difference between Real DOM and Virtual DOM.
ans: The Real DOM is the actual tree structure representing the UI in your browser. The Virtual DOM is a lightweight, in-memory JavaScript copy of the Real DOM.
