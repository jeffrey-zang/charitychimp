# 🐵 CharityChimp

## 💡 Inspiration
In the spirit of Thanksgiving, I wanted to Give Back to the world by donating to a charity. But as I was browsing the internet, trying to find the perfect cause to support, I found it difficult to put my finger on one. I didn't know which ones were 501(c) nonprofits, who they supported, or if they were financially transparent. This is why we made **CharityChimp**.

## 🧠 How we help
**CharityChimp** is a full-stack web application that makes it easy to find verified charities to donate to. Powered by the **Deso** blockchain, we allow users to make posts about their favourite charities, as well as browse the charities with a search system and tags. **CharityChimp** makes it much easier to find safe and reliable charity organizations to give back to. 

## ⚙️ How it works
Through the Deso blockchain, users will sign in using their Deso public key. Then, they can make posts about their favourite charities. They can add tags to their posts to make it easier to find for users. Additionally, they're able to see the monetary goals for these charities to better visualize their impact.

## 💻 Demo + Explanation
It's Thanksgiving! Bob wants to donate to a charity, but he doesn't know which one. So, he goes on **CharityChimp**. First he uses the tags `animal` and `environment` because he knows he wants to help them. Boom! The World Wildlife Fund is perfect. Afterwards, he wants to post about his local charity, the Humane Society. He creates a Deso account, logs in, and creates a post about it.

## 😩 Challenges we ran into
We found it very challenging to deal with the Deso API. The one provided by MLH, `deso-protocol`, didn't work lol. We had to switch to a new, unfinished APi called `deso.js`. This created many conflicts in our work and forced us to restart many times. 

## 🙏 Why we help
As hackers and tech enthusiasts, we wanted to find a way to give back to the world through programming and technology. We work to find solutions to problems through tech. Even if we can't donate to charities monetarily, we wanted to help them in a different way by using our programming skills. We believe that everyone deserves a Thanksgiving they can enjoy, and we hope that CharityChimp will help someone accomplish that.

## 💭 What's next for CharityChimp
We hope to implement transactions through the Deso api, so that people can donate to charities using `$DESO` straight from our website. We want to add "more info" pop-ups for the charities, so you can get a better sense of their goals and ideas. Lastly, we hope that CharityChimp will be used around the world one day, making charities around the world feel more connected.

## 👓 How it ACTUALLY works (for the nerds)
When you click on CharityChimp, `React`, `React Icons`, `TypeScript`, and `SASS`  render a website. `React-router-dom` helps in browsing the pages. When you log in, we make an API request to the backend through `express.js`, `Node.js`, and `TypeScript`. Then, `deso.js` interacts with the Deso API and to return some user info, allowing you to log into your account. When you create a post, it gets added to our list of posts and gets indexed by the search engine.