import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import PostDetail from "./components/PostDetail";
import Greeting from "./components/Greetings";
import GlobalStyle from "./components/GlobalStyles";

const posts = [
  {
    id: 1,
    title: "The Power of Patience",
    summary: "Why patience keeps returning as a key lesson in life and success.",
    content: `
      Patience is one of the most underrated yet powerful virtues. In a fast-paced world where instant gratification is the norm, waiting can feel frustrating. However, some of the most meaningful achievements in life require patience.

        The Bamboo Tree Lesson 
      In China, there's a unique species of bamboo that takes five years before it even breaks through the soil. During those years, farmers water it every day, seeing no visible progress. Then, suddenly, in the fifth year, the bamboo shoots up 90 feet in just six weeks! The truth is, the tree wasn't stagnant—it was developing deep, strong roots to sustain its growth.

      Like the bamboo tree, our dreams and goals require time to grow. Whether you're working on a career, a skill, or a relationship, progress happens beneath the surface before results appear.

        Example Story:
      Lilian had a dream of becoming a doctor. However, after failing her medical entrance exam twice, she felt like giving up. But instead of quitting, she re-evaluated her study method, sought mentorship, and stayed persistent. On her third attempt, she passed with flying colors. Today, she's a successful surgeon helping to save lives.

      The next time you feel discouraged, remember: Delays are not denials, Growth happens even when you don't see it immediately.

        Key Takeaway: 
      Patience isn't just about waiting, it's about having a positive attitude while waiting. Stay consistent, trust the process, and watch things unfold in their perfect time.
    `,
    author: "Joy Okafor",
    quote: "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.",
    image: "https://media.istockphoto.com/id/1328493330/photo/morning-message-with-tw-flowers-be-patient-with-yourself-nothing-in-nature-blooms-all-year.jpg?s=1024x1024&w=is&k=20&c=AmRclpFDi6edTwy7QcNonbGONye4HVxR14-GEei9OSw="
  },
  {
    id: 2,
    title: "Why Kindness Always Returns",
    summary: "How a simple act of kindness can create life-changing ripples.",
    content: `
      Many believe that kindness is a weakness, but in reality, it's one of the strongest forces in the world. A single act of kindness can start a ripple effect that reaches farther than you could ever imagine.

         The Ripple Effect of Kindness 
      Imagine dropping a small stone into a calm lake—the ripples spread out in all directions. Kindness works the same way. A simple act holding a door, smiling at a stranger, or helping someone in need—can inspire others to do the same.

         Example Story:
      John was a struggling college student who worked part-time to support himself. One day, at a coffee shop, an elderly woman noticed he looked exhausted and paid for his coffee. A small gesture, but John never forgot it. Years later, after becoming a successful businessman, he decided to pay it forward by starting a scholarship fund for students in need. The kindness of one stranger inspired a chain reaction that changed lives.

         Why Kindness Always Returns:  
      1.  It Builds Trust & Relationships. People remember those who treat them with warmth and respect.
      2.  It Creates Unexpected Opportunities. Acts of kindness can open doors in ways you never expect.
      3.  It Brings True Happiness. Science proves that giving makes us feel happier than receiving.

         Key Takeaway:  
      You never know how your kindness might impact someone's life. The world needs more compassion, and it all starts with one simple act.
    `,
    author: "Joy Okafor",
    quote: "No act of kindness, no matter how small, is ever wasted.",
    image: "https://cdn.pixabay.com/photo/2014/08/25/17/18/stone-tower-427299_1280.jpg"
  }
];
  

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Greeting />
      <Routes>
        <Route path="/" element={<BlogList posts={posts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        <Route path="/about" element={<h1>About This Blog</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

