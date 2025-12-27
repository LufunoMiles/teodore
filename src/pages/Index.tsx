import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

// Import images
import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import blogStudying from "@/assets/blog-studying.jpg";
import blogVarsity from "@/assets/blog-varsity.jpg";
import blogAdhd from "@/assets/blog-adhd.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Rethink Studying: It's Not About Cramming.",
    author: "Theodore Tshitangano",
    date: "Oct 8",
    views: 65,
    comments: 0,
    likes: 6,
    image: blogStudying,
  },
  {
    id: 2,
    title: "BECOMING A VARSITY STUDENT",
    author: "Netshedzo (Theodore) Tshitangano",
    date: "Feb 20",
    views: 151,
    comments: 0,
    likes: 15,
    image: blogVarsity,
  },
  {
    id: 3,
    title: "ADHD - Rings A Bell?",
    author: "Netshedzo (Theodore) Tshitangano",
    date: "Dec 10, 2024",
    views: 162,
    comments: 2,
    likes: 27,
    image: blogAdhd,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero heroImage={heroPortrait} />
        <BlogSection posts={blogPosts} />
        <AboutSection aboutImage={aboutPortrait} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
