// Write your code in this file!
const currentUser = "Eva Tu";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const firstInitial = currentUser.slice(0,1);
const restOfName = currentUser.slice(1);

const shortGreeting = `Welcome, ${firstInitial}!`;